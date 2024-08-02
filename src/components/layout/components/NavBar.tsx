import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { DRAWER_WIDTH } from '@constants/drawer';
import { PAGE_ROUTES_PRIVATE } from '@app/routes/types';
import { useLocation } from 'react-router-dom';

interface AppBarProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

export enum APP_BAR_TITLES {
  DASHBOARD = 'Dashboard',
  EVENTS = 'Events',
  TRANSACTIONS = 'Transactions',
  STRIPE_ACCOUNTS = 'Stripe Accounts',
  SETTINGS = 'Settings',
}

const NavBar: React.FC<AppBarProps> = ({ mobileOpen, handleDrawerToggle }) => {
  const theme = useTheme();
  const { pathname } = useLocation();

  const getTitle = () => {
    switch (pathname) {
      case PAGE_ROUTES_PRIVATE.EVENTS:
        return APP_BAR_TITLES.EVENTS;
      default:
        return '';
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        width: mobileOpen ? '100%' : `calc(100% - ${DRAWER_WIDTH}px)`,
        ml: mobileOpen ? `${DRAWER_WIDTH}px` : 0,
        height: 'auto',
        maxWidth: `calc(100vw - ${mobileOpen ? '0px' : `${DRAWER_WIDTH}px`})`,
        borderRadius: '0',
        backgroundColor: theme.palette.background.paper,
        padding: 0,
        boxShadow: 0,
        borderBottom: 0,
        '.MuiToolbar-root': {
          alignItems: 'flex-end',
        },
      }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}>
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h2"
          noWrap
          sx={{ color: theme.palette.common.black }}>
          {getTitle()}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
