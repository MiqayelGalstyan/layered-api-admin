import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import MenuItem, { NavigationItem, MENU_ITEMS } from './MenuItem';
import { PAGE_ROUTES_PRIVATE } from '@app/routes/types';

const navigationItems: NavigationItem[] = [
  { text: MENU_ITEMS.USERS, route: PAGE_ROUTES_PRIVATE.USERS },
  { text: MENU_ITEMS.ROLES, route: PAGE_ROUTES_PRIVATE.ROLES },
];

const Sidebar: React.FC = () => {

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
      </List>
    </Box>
  );
};

export default Sidebar;
