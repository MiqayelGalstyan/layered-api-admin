import React, { FC } from 'react';
import {
    Stack,
    InputLabel,
    TextField,
    InputAdornment,
    TextFieldProps,
    SxProps,
} from '@mui/material';
import InfoIcon from '@assets/icons/info.icon.svg?react';
import { ControllerFieldState, FieldValues } from 'react-hook-form';
import { Theme } from '@mui/material/styles';

const ErrorAdornment: FC = () => (
    <InputAdornment sx={{ cursor: 'pointer' }} position="end">
        <InfoIcon color="error" />
    </InputAdornment>
);

interface FormTextFieldProps {
    field: FieldValues;
    fieldState: ControllerFieldState;
    label: string;
    type?: string;
    stackSx?: SxProps<Theme>;
}

const FormTextField: FC<FormTextFieldProps & TextFieldProps> = ({
    field,
    fieldState,
    label,
    type = 'text',
    stackSx,
    ...restProps
}) => (
    <Stack gap="6px" sx={{ ...stackSx }}>
        <InputLabel color='secondary'>{label}</InputLabel>
        <TextField
            {...field}
            type={type}
            sx={{ width: '100%' }}
            variant="outlined"
            error={!!fieldState.error}
            helperText={fieldState?.error ? fieldState.error.message : null}
            InputLabelProps={{
                shrink: false,
            }}
            InputProps={{
                endAdornment: fieldState?.error ? <ErrorAdornment /> : null,
            }}
            {...restProps}
        />
    </Stack>
);

export default FormTextField;
