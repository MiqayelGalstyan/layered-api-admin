import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { AutocompleteInputChangeReason } from '@mui/material/Autocomplete';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import { AutocompleteItem } from '@modules/events';
import { styled } from '@mui/material/styles';
import { Box, InputAdornment } from '@mui/material';
import MapIcon from '@assets/icons/map-icon.svg';


const CustomPopper = styled(Popper)({
    '& .MuiAutocomplete-paper': {
        borderRadius: 0,
        padding: 0,
    },
    '& .MuiAutocomplete-listbox': {
        padding: 0,
        '& .MuiAutocomplete-option': {
            minHeight: '40px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: 0,
        },
    },
});


const CustomPaper = styled(Paper)(({ theme }) => ({
    '& .MuiAutocomplete-listbox': {
        padding: 0,
        '& .MuiAutocomplete-option': {
            minHeight: '40px',
            display: 'flex',
            alignItems: 'center',
        },
    },
}));


interface IAutocompleteProps {
    options: AutocompleteItem[];
    width?: number;
    value: AutocompleteItem | null;
    onChange: (value: AutocompleteItem | null) => void;
    onInputChange?: (value: string, reason: AutocompleteInputChangeReason) => void;
    label: string;
    onClose: () => void;
    withIcon?: boolean;
}

const MUIAutocomplete: React.FC<IAutocompleteProps> = ({ options,
    width = 300,
    value,
    onChange,
    label,
    onInputChange,
    onClose,
    withIcon = true,
}) => {



    return (
        <>
            <Box sx={{ position: 'relative' }}>
                {withIcon && !value && (
                    <Box sx={{ position: 'absolute', top: '9px', left: '9px' }}>
                        <img src={MapIcon} />
                    </Box>
                )}
                <Autocomplete
                    disablePortal
                    id="autocomplete-box"
                    options={options}
                    getOptionLabel={(option) => option.name || ''}
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    value={value}
                    onChange={(event: any, newValue: AutocompleteItem | null) => {
                        onChange(newValue);
                    }}
                    fullWidth
                    onInputChange={(event, newInputValue, reason) => {
                        onInputChange?.(newInputValue, reason);
                    }}
                    onClose={onClose}
                    PaperComponent={(props) => <CustomPaper {...props} />}
                    PopperComponent={CustomPopper}
                    sx={{
                        ...(!value ? {
                            '& .MuiInputBase-root.Mui-focused': {
                                '& input': {
                                    paddingLeft: '30px',
                                }
                            }
                        } : {}),
                        '& .MuiAutocomplete-inputRoot': {
                            minHeight: '40px',
                            paddingTop: '0',
                            paddingBottom: '0',
                            display: 'flex',
                            alignItems: 'center',
                        },
                        '.MuiFormLabel-root.MuiInputLabel-root': {
                            top: value ? '0' : '-5px',
                            paddingLeft: withIcon ? value ? '0' : '25px' : '0',
                        },
                        '.MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
                            paddingLeft: '0',
                        },
                        width,
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            InputProps={{
                                ...params.InputProps,
                                ...(value && withIcon ? {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <img src={MapIcon} />
                                        </InputAdornment>
                                    )
                                } : {}),
                            }}
                            label={label}
                        />)}
                />
            </Box>
        </>
    )
}

export default MUIAutocomplete;