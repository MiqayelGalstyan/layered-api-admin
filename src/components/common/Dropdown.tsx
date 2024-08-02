import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SxProps, Theme } from '@mui/material';
import { DropdownItem } from '@modules/events';

interface IDropdownProps {
    value: any;
    options: DropdownItem[];
    onChange: (value: any) => void;
    labelProp: string;
    keyProp: string;
    valueProp: string;
    selectLabel: string;
    sx?: SxProps<Theme>;
    width: number;
}

const Dropdown = ({
    value,
    options,
    onChange,
    valueProp,
    labelProp,
    keyProp,
    selectLabel,
    width,
    sx
}: IDropdownProps) => {

    const handleChange = (event: SelectChangeEvent) => {
        onChange(event.target.value);
    };

    return (
        <Box sx={{ ...sx, width }}>
            <FormControl fullWidth>
                <InputLabel
                    id="dropdown-simple-label"
                    sx={{ top: !value ? "-5px" : 0 }}>
                    {selectLabel}
                </InputLabel>
                <Select
                    labelId="dropdown-simple-label"
                    id="dropdown-simple"
                    value={value || ''}
                    label={selectLabel}
                    onChange={handleChange}
                    fullWidth
                    MenuProps={{
                        PaperProps: {
                            style: {
                                width: `${width}px`,
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0,
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                padding: 0,
                            },
                        },
                    }}
                    sx={{
                        '& .MuiSelect-select.MuiInputBase-input': {
                            minHeight: '40px',
                            paddingTop: '0',
                            paddingBottom: '0',
                            display: 'flex',
                            alignItems: 'center',
                        },
                    }}
                >
                    {options.map((option: any, index) => (
                        <MenuItem key={option[keyProp] || index} value={option[valueProp]} >
                            {option[labelProp]}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default Dropdown;
