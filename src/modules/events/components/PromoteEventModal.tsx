import { FC, useEffect } from 'react';
import CustomModal from '@components/common/Modal';
import { Box, Button, Divider, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PromoteSchema } from '../helpers/promote.helper';
import { PromoteRequest } from '../types/promote.types';
import AutocompleteFormField from './AutocompleteFormField';
import useAutocomplete from '@app/hooks/useAutocomplete';
import { allStatesData } from '../data/allStatesData';
import useDebounce from '@app/hooks/useDebounce';
import { ICountry } from '../types/event.types';
import { useLazyGetPredictionsQuery } from '@modules/googlePlace';


interface IPromoteEventModalProps {
    open: boolean;
    onClose: () => void;
}


const PromoteEventModal: FC<IPromoteEventModalProps> = ({ open, onClose }) => {
    const theme = useTheme();

    const {
        inputValue,
        onInputChange,
        options,
        setInputValue,
        setOptions,
    } = useAutocomplete({ defaultOptions: allStatesData });


    const countryDebouncedValue = useDebounce(inputValue, 500);

    const [getPredictions] = useLazyGetPredictionsQuery();

    const {
        control,
        handleSubmit,
        watch,
        formState: { isSubmitting },
    } = useForm<PromoteRequest>({
        defaultValues: {
            state: null,
            event: '',
        },
        // resolver: yupResolver(PromoteSchema),
    });


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

    useEffect(() => {
        if (countryDebouncedValue) {
            fetchStates(countryDebouncedValue);
        }
    }, [countryDebouncedValue])


    return (
        <CustomModal open={open} onClose={onClose}>
            <Box sx={{
                display: 'flex',
                height: '100%',
                margin: '0 auto',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box sx={{
                    width: 688,
                    height: 346,
                    margin: '0 auto',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                }}>
                    <Box sx={{
                        padding: '10px 25px 15px'
                    }}>
                        <Typography variant='h6'
                            color={theme.palette.grey['900']}
                            sx={{
                                fontSize: '18px',
                                letterSpacing: 0,
                                marginTop: '10px',
                            }}>Promote Event</Typography>
                        <Typography
                            variant='body1'
                            color={theme.palette.grey['600']}
                            sx={{
                                fontSize: '14px',
                                letterSpacing: 0,
                                marginTop: '10px',
                            }}
                        >The promoted event will be shown to users at the top of the nearby feed.</Typography>
                    </Box>
                    <Divider />
                    <Box sx={{
                        padding: '10px 25px 20px'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '10px'
                        }}>
                            <Typography sx={{
                                fontSize: '14px',
                                color: theme.palette.grey['700'],
                                fontWeight: '500',
                            }}>
                                Promote in
                            </Typography>
                            <Controller
                                name="state"
                                control={control}
                                render={({ field, fieldState }) => (
                                    <AutocompleteFormField
                                        field={field}
                                        width={448}
                                        fieldState={fieldState}
                                        label='Choose State'
                                        options={options}
                                        onInputChange={onInputChange}
                                        onClose={() => setInputValue('')}
                                    />
                                )}
                            />
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '10px'
                        }}>
                            <Typography sx={{
                                fontSize: '14px',
                                color: theme.palette.grey['700'],
                                fontWeight: '500',
                            }}>
                                Event
                            </Typography>
                            <Controller
                                name="event"
                                control={control}
                                render={({ field, fieldState }) => (
                                    <AutocompleteFormField
                                        field={field}
                                        width={448}
                                        fieldState={fieldState}
                                        label='Choose event from the list'
                                        options={options}
                                        onInputChange={onInputChange}
                                        onClose={() => setInputValue('')}
                                    />
                                )}
                            />
                        </Box>
                    </Box>
                    <Divider />
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '25px 35px 0',
                        gap: '25px',
                    }}>
                        <Button
                            type="button"
                            variant="contained"
                            sx={{
                                backgroundColor: theme.palette.common['white'],
                                width: '314px',
                                color: theme.palette.common['black'],
                                boxShadow: 'unset',
                                border: `1px solid ${theme.palette.grey['300']}`,
                                fontSize: '16px',
                                '&:hover': {
                                    color: theme.palette.common['white'],
                                }
                            }}
                            onClick={onClose}
                        >
                            Back
                        </Button>
                        <Button
                            type="button"
                            variant="contained"
                            sx={{
                                backgroundColor: theme.palette.common['black'],
                                width: '314px',
                                boxShadow: 'unset',
                                border: `1px solid ${theme.palette.common['black']}`,
                                fontSize: '16px',
                            }}
                            onClick={() => console.log('start')}
                        >
                            Start Promotion
                        </Button>
                    </Box>
                </Box>
            </Box>
        </CustomModal>
    )
}

export default PromoteEventModal;