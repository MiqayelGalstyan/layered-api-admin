import React, { FC } from 'react';
import {
    Stack,
    InputLabel,
    TextField,
    InputAdornment,
    TextFieldProps,
    SxProps,
    Typography,
    AutocompleteInputChangeReason,
} from '@mui/material';
import InfoIcon from '@assets/icons/info.icon.svg?react';
import { ControllerFieldState, FieldValues } from 'react-hook-form';
import { Theme } from '@mui/material/styles';
import MUIAutocomplete from '@components/common/Autocomplete';
import { AutocompleteItem } from '../types/event.types';

interface AutocompleteFieldProps {
    field: FieldValues;
    fieldState: ControllerFieldState;
    label: string;
    options: AutocompleteItem[];
    onInputChange: (value: string, reason: AutocompleteInputChangeReason) => void;
    onClose: () => void;
    width: number;
}

const AutocompleteFormField: FC<AutocompleteFieldProps> = ({
    field,
    fieldState,
    label,
    onClose,
    onInputChange,
    options,
    width,
}) => {
    return (
        <>
            <MUIAutocomplete
                width={width}
                options={options}
                value={field.value}
                withIcon={false}
                onChange={(newVal) => field.onChange(newVal)}
                onInputChange={onInputChange}
                label={label}
                onClose={onClose}
            />
            {fieldState.error && (
                <Typography color='red'>{fieldState.error.message || ''}</Typography>
            )}
        </>
    )
};

export default AutocompleteFormField;
