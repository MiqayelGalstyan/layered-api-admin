import { FC } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AnalyticsIcon from '@assets/icons/analytics.icon.svg?react';
import UsersIcon from '@assets/icons/users.icon.svg?react';
import LayersIcon from '@assets/icons/layers.icon.svg?react';
import CheckboxLayersIcon from '@assets/icons/checkbox-layeers.icon.svg?react';
import { Link, useLocation } from 'react-router-dom';
import { PAGE_ROUTES_PRIVATE } from '@app/routes/types';
import { Typography } from '@mui/material';
import theme from '@app/theme';

export enum MENU_ITEMS {
  DASHBOARD = 'Dashboard',
  USERS = 'Users',
}

export interface NavigationItem {
  text: MENU_ITEMS;
  route: PAGE_ROUTES_PRIVATE;
}

interface MenuItemProps extends NavigationItem {
  icon?: keyof IconMapType;
}

type IconType =
  | typeof AnalyticsIcon
  | typeof UsersIcon
  | typeof LayersIcon
  | typeof CheckboxLayersIcon;
type IconMapType = Record<string, IconType>;

const MenuItem: FC<MenuItemProps> = ({ text, route, icon }) => {
  const icons: IconMapType = {
    [MENU_ITEMS.DASHBOARD]: AnalyticsIcon,
    [MENU_ITEMS.USERS]: UsersIcon,
  };
  const IconComponent = icon ? icons[icon] : null;

  const { pathname } = useLocation();
  const isActive = pathname === route;

  return (
    <ListItem disablePadding sx={{ paddingLeft: '16px' }}>
      <ListItemButton
        component={Link}
        to={route}
        sx={{
          paddingLeft: '12px',
          background: isActive ? theme.palette.grey['400'] : 'transparent',
        }}>
        {IconComponent && (
          <ListItemIcon sx={{ minWidth: '36px' }}>
            <IconComponent />
          </ListItemIcon>
        )}
        <ListItemText
          sx={{ my: 0 }}
          primary={<Typography variant="h6">{text}</Typography>}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default MenuItem;
