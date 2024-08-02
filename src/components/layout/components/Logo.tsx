import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Logo = () => {
  return (
    <Box sx={{ display: 'flex', paddingLeft: '30px', alignItems: 'center' }}>
      <Typography
        variant="caption"
        sx={{ height: '22px', display: 'flex', alignItems: 'flex-end' }}>
        Admin
      </Typography>
    </Box>
  );
};

export default Logo;
