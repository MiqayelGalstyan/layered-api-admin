import { Table, TableBody, Box, Paper } from '@mui/material';
import TableHeader from './TableHeader';
import DateRangePicker from './DateRangePicker';
import { useEffect } from 'react';
import useEventsData from '../hooks/useEventsData';
import ActiveFilters from '@components/common/ActiveFilters';
import StyledTablePagination from './StyledTablePagination';
import TableRow from './TableRow';
import { IEvent } from '../types/event.types';

import { useLazyGetProfileQuery } from '@modules/profile';
import { useAppDispatch } from '@app/store';
import { setUser } from '@modules/auth';
import Dropdown from '@components/common/Dropdown';
import { statusTypesData } from '../data/statusTypesData';
import MUIAutocomplete from '@components/common/Autocomplete';

const EventsTable = () => {

  const [getProfile] = useLazyGetProfileQuery();

  const dispatch = useAppDispatch();

  const {
    order,
    orderBy,
    page,
    rowsPerPage,
    handleRequestSort,
    handleUpdateStatus,
    handleDateRangeChange,
    handleChangePage,
    dateRange,
    handleChangeRowsPerPage,
    transformedFilters,
    handleRemoveFilter,
    status,
    handleStatusChange,
    onAutocompleteValueChange,
    onInputChange,
    options,
    selectedValue,
    setInputValue,
  } = useEventsData();

  const fetchUser = async () => {
    try {
      const { data: userProfileData } = await getProfile().unwrap();
      dispatch(setUser(userProfileData));
    } catch (error) {
      console.error('Fetching user profile failed:', error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const filteredRows: IEvent[] = [];

  return (
    <Box sx={{ paddingRight: '50px', paddingLeft: '50px' }}>
      <Box
        display="flex"
        justifyContent="flex-start"
        gap={2}
        alignItems={'center'}
        p={2}>
        <MUIAutocomplete
          width={240}
          options={options}
          value={selectedValue}
          onChange={(newVal) => onAutocompleteValueChange(newVal)}
          onInputChange={onInputChange}
          label='All states'
          onClose={() => setInputValue('')}
        />
        <Dropdown
          valueProp='value'
          labelProp='label'
          keyProp='id'
          options={statusTypesData}
          value={status}
          selectLabel='Status'
          width={160}
          onChange={handleStatusChange} />
        <DateRangePicker
          startDate={dateRange.startDate}
          endDate={dateRange.endDate}
          onChange={handleDateRangeChange}
          sx={{ maxWidth: 122 }}
        />
      </Box>
      <ActiveFilters
        filters={transformedFilters}
        onRemoveFilter={handleRemoveFilter}
      />
      <Paper
        sx={{
          overflowX: 'auto',
          borderRadius: '12px',
          width: '100%',
          minWidth: '100%',
          padding: '0',
          marginTop: '8px',
        }}>
        <Table sx={{ minWidth: 800 }}>
          <TableHeader
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {filteredRows.map(event => (
              <TableRow
                key={event.id}
                event={event}
                onUpdateStatus={handleUpdateStatus}
              />
            ))}
          </TableBody>
        </Table>
        <StyledTablePagination
          count={0}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Rows per page"
          rowsPerPageOptions={[7, 10, 20, 50]}
        />
      </Paper>
    </Box>
  );
};

export default EventsTable;
