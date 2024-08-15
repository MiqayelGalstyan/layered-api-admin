import React from 'react';

import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from '@modules/auth/helpers/login.helper';
import { LoginRequest } from '@modules/auth/types';
import { useAuth } from '@modules/auth';
import { useNavigate } from 'react-router-dom';
import { PAGE_ROUTES_PRIVATE } from '@app/routes/types';
import useToast from '@app/hooks/useToast';
import { useTheme } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormTextField from '@components/common/FormTextField';

const LoginContainer: React.FC = () => {
  const theme = useTheme();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginRequest>({
    defaultValues: {
      email: '',
      password: '',
      isRemembered: false,
    },
    resolver: yupResolver(LoginSchema),
  });

  const { login } = useAuth();

  const navigate = useNavigate();
  const toast = useToast();

  const onSubmit: SubmitHandler<LoginRequest> = async data => {
    try {
      await login(data);
      navigate(PAGE_ROUTES_PRIVATE.USERS);
      toast.success('Login successful!');
    } catch (error) {
      toast.error('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: `100vh`,
      }}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: 360,
        }}>
        <Typography variant="h2" sx={{
          marginTop: '25px',
        }}>
          Login
        </Typography>
        <Stack gap="20px" mt="25px">
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <FormTextField
                field={field}
                fieldState={fieldState}
                label="Email or username"
                placeholder="Your Email or username"
                sx={{
                  borderRadius: 8,
                }}
                inputProps={{
                  style: {
                    padding: '12.5px 14px',
                  }
                }}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <FormTextField
                field={field}
                fieldState={fieldState}
                label="Password"
                type="password"
                placeholder="Your Password"
                sx={{
                  borderRadius: 8,
                }}
                inputProps={{
                  style: {
                    padding: '12.5px 14px',
                  }
                }}
              />
            )}
          />
        </Stack>
        <Stack>
          <Controller
            name="isRemembered"
            control={control}
            render={({ field }) => (
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      {...field}
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                  }
                  label="Remember"
                />
              </FormGroup>
            )}
          />
        </Stack>
        <Stack gap={'24px'} mt="10px">
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: theme.palette.common['black'],
            }}
            disabled={isSubmitting}>
            Log In
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default LoginContainer;
