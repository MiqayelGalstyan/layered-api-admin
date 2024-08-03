import React, { useState } from 'react';
import Box from '@mui/material/Box';
import theme from '@app/theme';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ExitToIcon from '@assets/icons/exit-to.icon.svg?react';
import { useAppSelector } from '@app/store/hook';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@modules/auth';
import { PAGE_ROUTES_PUBLIC } from '@app/routes/types';

const UserBadge = () => {
  const user = useAppSelector(({ auth }) => auth.user);
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    setIsModalOpen(true);
  };

  const handleConfirmLogout = () => {
    logout();
    navigate(PAGE_ROUTES_PUBLIC.LOGIN);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(2),
        width: '100%',
        paddingTop: '24px',
        paddingBottom: '0',
        pl: 6,
      }}>
      <Avatar
        sx={{ width: 40, height: 40, marginRight: 2 }}
        src={user?.ImagePath}
      />
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'space-between',
          minWidth: 0,
        }}>
        <Box sx={{ minWidth: 0 }}>
          <Typography variant="subtitle1" noWrap>
            {user?.FirstName}
          </Typography>
          <Typography variant="body2" noWrap color="text.secondary">
            {user?.Email}
          </Typography>
        </Box>
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleLogout}
          sx={{
            padding: '8px',
            marginRight: '8px',
            flexShrink: 0,
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}>
          <ExitToIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default UserBadge;
