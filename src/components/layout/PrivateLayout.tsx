import { useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import { useAppSelector } from '@app/store/hook';
import { PAGE_ROUTES_PRIVATE, PAGE_ROUTES_PUBLIC } from '@app/routes/types';
import { setUser, useAuth } from '@modules/auth';
import { Button, Drawer, SvgIcon, Typography } from '@mui/material';
import CustomModal from '@components/common/Modal';
import LogoutIcon from '@assets/icons/logout-icon.svg?react';
import Sidebar from './components/Sidebar';
import { DRAWER_WIDTH } from '@constants/drawer';
import { useLazyGetProfileQuery } from '@modules/profile';
import { useAppDispatch } from '@app/store';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const PrivateLayout = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const dispatch = useAppDispatch();

  const isAuthenticated = useAppSelector(({ auth }) => auth.isAuthenticated);
  const { logout } = useAuth();

  const navigate = useNavigate();

  const [getProfile] = useLazyGetProfileQuery();


  const fetchUser = async () => {
    try {
      const userProfileData = await getProfile().unwrap();
      dispatch(setUser(userProfileData));
      console.log('User profile fetched successfully');
    } catch (error) {
      console.error('Fetching user profile failed:', error);
    }
  };


  useEffect(() => {
    fetchUser();
  }, []);


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const onClose = () => {
    setOpen(false);
  }

  const onOpen = () => {
    setOpen(true);
  }

  const navigateToProfile = () => {
    navigate(PAGE_ROUTES_PRIVATE.PROFILE);
  }

  if (!isAuthenticated) {
    return <Navigate to={PAGE_ROUTES_PUBLIC.LOGIN} />;
  }

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            borderRadius: 0,
            paddingBottom: 0,
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
              borderRadius: 0,
              paddingBottom: '32px',
            },
          }}>
          <Sidebar />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
              borderRadius: 0,
              paddingBottom: '32px',
            },
          }}
          open>
          <Sidebar />
        </Drawer>
        <Box
          component="main"
          sx={{
            ...theme.mixins.toolbar,
            flex: 1,
            width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
            ml: { sm: `${DRAWER_WIDTH}px` },
          }}>
          <Toolbar sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: theme.palette.common.black,
            paddingRight: '50px!important',
            maxWidth: '100%',
          }}>
            <Button onClick={navigateToProfile}>
              <AccountBoxIcon fill='white' sx={{
                fill: 'white'
              }} />
            </Button>
            <Typography
              sx={{
                color: theme.palette.common.white,
                fontSize: 14,
                fontWeight: '600',
                cursor: 'pointer',
                letterSpacing: 0
              }}
              onClick={onOpen}
            >
              Log out
            </Typography>
          </Toolbar>
          <Outlet />
        </Box>
      </Box>
      <CustomModal open={open} onClose={onClose}>
        <Box sx={{
          display: 'flex',
          height: '100%',
          margin: '0 auto',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Box sx={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            width: 460,
            height: 214,
            margin: '0 auto',
            backgroundColor: 'white',
            borderRadius: '12px',
            paddingTop: '20px',
            paddingBottom: '20px',
          }}>
            <SvgIcon
              component={LogoutIcon}
              inheritViewBox
              fill='#FEE4E2'
              width={56}
              height={56}
              style={{ fontSize: '3.5rem', fill: '#FEE4E2' }}
            />
            <Typography variant='h3'
              color={theme.palette.grey['900']}
              sx={{
                fontSize: '20px',
                letterSpacing: 0,
                marginTop: '10px',
              }}>Would you like to log out?</Typography>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '25px 3% 0',
            }}>
              <Button
                type="button"
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.common['white'],
                  width: '204px',
                  color: theme.palette.common['black'],
                  boxShadow: 'unset',
                  border: `1px solid ${theme.palette.grey['300']}`,
                  fontSize: '16px',
                  '&:hover': {
                    color: theme.palette.common['white'],
                  }
                }}
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                type="button"
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.common['black'],
                  width: '204px',
                  boxShadow: 'unset',
                  border: `1px solid ${theme.palette.common['black']}`,
                  fontSize: '16px',
                }}
                onClick={logout}
              >
                Log Out
              </Button>
            </Box>
          </Box>
        </Box>
      </CustomModal>
    </>
  );
};

export default PrivateLayout;
