import { useState, useEffect, useCallback, MouseEvent } from 'react';
import { Range } from 'react-date-range';
import { format } from 'date-fns';
import { SortOrder, EventsSortFields } from '../types/sort.types';
import useDebounce from '@app/hooks/useDebounce';
import { IFilters } from '../types/sort.types';
import { AutocompleteItem, EventStatusType, ICountry } from '../types/event.types';
import useAutocomplete from '@app/hooks/useAutocomplete';
import { allStatesData } from '../data/allStatesData';
import { useLazyGetPredictionsQuery } from '@modules/googlePlace';




const useUserData = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [status, setStatus] = useState<EventStatusType | string>('');

    const debouncedSearchQuery = useDebounce(searchQuery, 500);

    const {
        inputValue,
        onInputChange,
        options,
        selectedValue,
        setInputValue,
        setOptions,
        setSelectedValue
    } = useAutocomplete({ defaultOptions: allStatesData });


    const debouncedCountryQuery = useDebounce(inputValue, 500);


    const [getPredictions] = useLazyGetPredictionsQuery();

    const [dateRange, setDateRange] = useState<Range>({
        startDate: undefined,
        endDate: undefined,
        key: 'selection',
    });

    const [filters, setFilters] = useState<IFilters>({});

    const [order, setOrder] = useState<SortOrder>(SortOrder.DESC);
    const [orderBy, setOrderBy] = useState<EventsSortFields>();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    // const [fetchUsers, { data, error, isLoading }] = useLazyFindAllUsersQuery();
    // const [updateUserStatus] = useUpdateUserStatusMutation();


    const fetchStates = async (input: string) => {
        if (!input) {
            return;
        }

        try {
            const response = await getPredictions({
                input,
                types: '(regions)',
                componentRestrictions: { country: 'us' },
            }).unwrap();
            const cityOptions: ICountry[] = response.predictions.map(
                prediction => ({
                    id: prediction.place_id,
                    name: prediction.description,
                    value: prediction.description,
                }),
            );

            setOptions(cityOptions);
        } catch (error) {
            console.error('Error fetching cities:', error);
            setOptions(allStatesData);
        }
    };

    const fetchEventsData = useCallback(() => {
        // fetchUsers({
        //     search: debouncedSearchQuery.trim() || undefined,
        //     role: filters.role || undefined,
        //     status: filters.status || undefined,
        //     paymentStatus: filters.paymentStatus || undefined,
        //     registeredFrom: dateRange.startDate
        //         ? format(dateRange.startDate, 'yyyy-MM-dd')
        //         : undefined,
        //     registeredTo: dateRange.endDate
        //         ? format(dateRange.endDate, 'yyyy-MM-dd')
        //         : undefined,
        //     page: page + 1,
        //     pageSize: rowsPerPage,
        //     sortBy: orderBy,
        //     sortOrder: order,
        // }).unwrap();
    }, [
        debouncedSearchQuery,
        filters,
        dateRange.startDate,
        dateRange.endDate,
        page,
        rowsPerPage,
        orderBy,
        order,
    ]);

    useEffect(() => {
        fetchEventsData();
    }, [
        debouncedSearchQuery,
        dateRange,
        page,
        rowsPerPage,
        orderBy,
        order,
        filters,
        fetchEventsData,
    ]);


    useEffect(() => {
        if (debouncedCountryQuery) {
            fetchStates(debouncedCountryQuery);
        }
    }, [debouncedCountryQuery])


    const onAutocompleteValueChange = async (newVal: AutocompleteItem | null) => {
        if (!newVal) {
            return;
        }
        setSelectedValue(newVal);
        setFilters((prevState) => {
            return {
                ...prevState,
                state: newVal.name,
            }
        });
        await fetchStates(newVal.name);
    }

    const handleRequestSort = (property: EventsSortFields) => {
        const isAsc = orderBy === property && order === SortOrder.ASC;
        setOrder(isAsc ? SortOrder.DESC : SortOrder.ASC);
        setOrderBy(property);
    };

    const handleStatusChange = (activeStatus: EventStatusType) => {
        setStatus(activeStatus);
        setFilters((prevState) => {
            return {
                ...prevState,
                status: activeStatus,
            }
        });
    }

    const handleSearchChange = (query: string) => {
        setSearchQuery(query);
    };

    const handleUpdateStatus = async (id: number, status: EventStatusType) => {
        console.log(status, 'status')
        try {
            fetchEventsData();
        } catch (error) {
            console.error('Failed to update status:', error);
        }
    };

    const handleDateRangeChange = (range: Range) => {
        setDateRange(range);
        setPage(0);
    };

    const resetDateRange = () => {
        setDateRange({
            startDate: undefined,
            endDate: undefined,
            key: 'selection',
        });
    };

    const handleChangePage = (
        _: MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleRemoveFilter = (key: string) => {
        switch (key) {
            case 'dateRange':
                resetDateRange();
                break;
            case 'status':
                setStatus('');
                break;
            case 'state':
                setSelectedValue(null);
                break;
        }
        setFilters(prevFilters => ({
            ...prevFilters,
            [key]: null,
        }));
    };

    const transformedFilters = Object.keys(filters).reduce(
        (acc, key) => {
            if (filters[key as keyof IFilters]) {
                acc[key] = filters[key as keyof IFilters]!;
            }
            return acc;
        },
        {} as { [key: string]: string },
    );

    if (dateRange.startDate && dateRange.endDate) {
        transformedFilters['dateRange'] = `${format(
            dateRange.startDate,
            'yyyy-MM-dd',
        )} - ${format(dateRange.endDate, 'yyyy-MM-dd')}`;
    }

    return {
        searchQuery,
        setSearchQuery,
        dateRange,
        setDateRange,
        filters,
        order,
        setOrder,
        orderBy,
        setOrderBy,
        page,
        setPage,
        rowsPerPage,
        setRowsPerPage,
        handleRequestSort,
        handleSearchChange,
        handleUpdateStatus,
        handleDateRangeChange,
        resetDateRange,
        handleChangePage,
        handleChangeRowsPerPage,
        transformedFilters,
        handleRemoveFilter,
        handleStatusChange,
        status,
        onInputChange,
        options,
        selectedValue,
        setInputValue,
        onAutocompleteValueChange,
    };
};

export default useUserData;
