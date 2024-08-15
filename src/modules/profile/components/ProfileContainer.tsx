import { Box, Button, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IEditProfilePayload } from '../types';
import { EditProfileSchema } from '../helpers/edit-profile.helper';
import FormTextField from '@components/common/FormTextField';
import { useAppSelector } from '@app/store/hook';
import { useEffect } from 'react';
import FileUpload from '@components/common/FileUpload';
import { useUpdateProfileMutation } from '..';
import { useAppDispatch } from '@app/store';
import { setUser } from '@modules/auth';
import useToast from '@app/hooks/useToast';

const ProfileContainer = () => {

    const theme = useTheme();

    const user = useAppSelector(({ auth }) => auth.user);

    const toast = useToast();

    const [updateProfile] = useUpdateProfileMutation();

    const dispatch = useAppDispatch();

    const {
        control,
        handleSubmit,
        reset,
        setValue,
        watch,
        formState: { isSubmitting, errors },
    } = useForm<IEditProfilePayload>({
        defaultValues: {
            email: user?.email,
            firstName: user?.firstName,
            lastName: user?.lastName,
            imagePath: user?.imagePath,
        },
        resolver: yupResolver(EditProfileSchema),
    });

    useEffect(() => {
        if (user) {
            reset({
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                imagePath: user.imagePath
            });
        }
    }, [user]);


    const onSubmit = async (data: IEditProfilePayload) => {
        try {
            const userData = await updateProfile({ ...data, imagePath: data.imagePath || '' }).unwrap();
            dispatch(setUser({ ...userData, imagePath: data.imagePath || '' }));
            toast.success('Profile updated successfully!!');
        } catch (error) {
            console.log(error, 'error')
        }
    }

    const onImageChange = (value: string | null) => {
        setValue('imagePath', value || '');
    }

    return (
        <>
            <Box sx={{
                paddingLeft: '50px',
                paddingRight: '50px',
                marginTop: '35px',
                marginBottom: '30px',
            }}
                component="form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Typography sx={{ fontWeight: '600', fontSize: 30, letterSpacing: 0 }}>
                    Profile
                </Typography>
                <Stack gap="40px" mt="25px" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Stack gap="20px" sx={{ flex: 2 }}>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field, fieldState }) => (
                                <FormTextField
                                    field={field}
                                    fieldState={fieldState}
                                    label="Email"
                                    placeholder="Email"
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
                            name="firstName"
                            control={control}
                            render={({ field, fieldState }) => (
                                <FormTextField
                                    field={field}
                                    fieldState={fieldState}
                                    label="First Name"
                                    placeholder="First Name"
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
                            name="lastName"
                            control={control}
                            render={({ field, fieldState }) => (
                                <FormTextField
                                    field={field}
                                    fieldState={fieldState}
                                    label="Last Name"
                                    placeholder="Last Name"
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
                    <Box sx={{ flex: 1 }}>
                        <FileUpload
                            imagePath={watch('imagePath')}
                            onChange={onImageChange} />
                    </Box>
                </Stack>
                <Stack gap={'24px'} mt="10px" sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    textAlign: 'center',
                    margin: '30px auto 0'
                }}>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            backgroundColor: theme.palette.common['black'],
                            width: 350,
                        }}
                        disabled={isSubmitting}
                    >
                        Update Profile
                    </Button>
                </Stack>
            </Box>
        </>
    )
}

export default ProfileContainer;