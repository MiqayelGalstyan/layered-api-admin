import React from 'react';
import { AppBar, Toolbar, Box, SvgIcon } from '@mui/material';
import LogoImage from '@assets/images/logo.image.svg?react';

const AuthNavbar = () => {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{
        width: '100%',
        minWidth: '100%',
        height: 58.54,
        padding: 0,
        background: '#fff',
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'unset',
        border: 'unset',
      }}>
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          gap: 0,
          opacity: 1,
        }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SvgIcon
            component={LogoImage}
            inheritViewBox
            sx={{ width: 162, height: 22 }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AuthNavbar;
