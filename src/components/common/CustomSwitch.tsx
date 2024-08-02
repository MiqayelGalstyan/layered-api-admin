import { alpha, styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const StyledSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: theme.palette.common.black,
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.black, theme.palette.action.hoverOpacity),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: theme.palette.common.black,
    },
}));

const label = { inputProps: { 'aria-label': 'Color switch' } };

const CustomSwitch = () => {
    return (
        <StyledSwitch {...label} defaultChecked />
    );
}

export default CustomSwitch;