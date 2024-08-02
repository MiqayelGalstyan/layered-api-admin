import React from 'react';
import { Box, Typography } from '@mui/material';
import SuccessIcon from '@assets/icons/success.icon.svg?react';

interface CustomSuccessToastProps {
  message: string;
}

const CustomSuccessToast: React.FC<CustomSuccessToastProps> = ({ message }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: '#E6F7E9',
          marginRight: '16px',
        }}>
        <SuccessIcon
          style={{ width: '24px', height: '24px', color: '#28A745' }}
        />
      </Box>
      <Box>
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          {message}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Your team member is invited via email.
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomSuccessToast;
