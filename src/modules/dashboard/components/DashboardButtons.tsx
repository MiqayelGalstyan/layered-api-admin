import React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const DashboardButtons = () => {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <Button
        variant="contained"
        disableElevation
        disableRipple
        sx={{
          backgroundColor: 'grey.400', // Light grey background
          color: 'text.primary', // Ensures the text color is readable
          textTransform: 'none', // Removes uppercase transformation
          '&:hover': {
            backgroundColor: 'grey.400', // Slightly darker on hover
          },
        }}
        onClick={() => console.log('Platform button clicked')}>
        Platform
      </Button>

      <Link
        href="https://dashboard.stripe.com"
        target="_blank"
        underline="none"
        sx={{
          textDecoration: 'none', // Removes underline from the link
        }}>
        <Button
          variant="text"
          sx={{
            color: 'grey.600', // Use theme primary color for text
            textTransform: 'none', // Removes uppercase transformation
          }}>
          Stripe Dashboard
        </Button>
      </Link>
    </Box>
  );
};

export default DashboardButtons;
