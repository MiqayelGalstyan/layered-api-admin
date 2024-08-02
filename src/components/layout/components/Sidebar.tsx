import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import MenuItem, { NavigationItem, MENU_ITEMS } from './MenuItem';
import { PAGE_ROUTES_PRIVATE } from '@app/routes/types';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import UserBadge from '@components/layout/components/UserBadge';
import SettingsIcon from '@assets/icons/settings.icon.svg?react';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const navigationItems: NavigationItem[] = [
  { text: MENU_ITEMS.USERS, route: PAGE_ROUTES_PRIVATE.EVENTS },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <List
        sx={{
          paddingTop: '24px',
          paddingBottom: 0,
          gap: '4px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <Stack gap={'4px'}>
          {navigationItems.map(item => (
            <MenuItem key={item.text} icon={item.text} {...item} />
          ))}
        </Stack>
        <Stack>
          <ListItem
            sx={{
              paddingLeft: '16px',
              paddingBottom: '24px',

              '.MuiListItemButton-root': {
                '&:hover': {
                  backgroundColor: 'transparent',
                },

                '.MuiListItemIcon-root': {
                  minWidth: '36px',
                },
              },
            }}
            disablePadding>
            <ListItemButton
              sx={{
                margin: 0,
                maxWidth: '248px',
                background: theme.palette.grey[400],
              }}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText
                primary="Settings"
                onClick={() => navigate(PAGE_ROUTES_PRIVATE.EVENTS)}
                sx={{
                  borderRadius: '6px',
                  padding: '0',
                  margin: '0',
                  '.MuiListItemText-primary': {
                    ...theme.typography.h6,
                  },
                }}
              />
            </ListItemButton>
          </ListItem>

          <Divider sx={{ marginX: 6 }} />

          <UserBadge />
        </Stack>
      </List>
    </Box>
  );
};

export default Sidebar;
