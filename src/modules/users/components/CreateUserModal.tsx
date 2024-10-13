import CustomModal from "@components/common/Modal";
import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import { useTheme } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { NewUserSchema } from "../helpers/createUser.helper";
import { RegisterUserRequest } from "../types/new-user.type";

interface ICreateUserModal {
    open: boolean;
    onClose: () => void;
}


const CreateUserModal: FC<ICreateUserModal> = ({ open, onClose }) => {

    const theme = useTheme();


    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<RegisterUserRequest>({
        defaultValues: {
            email: '',
            password: '',
            isRemembered: false,
        },
        resolver: yupResolver(NewUserSchema),
    });

    return (
        <CustomModal
            open={open}
            onClose={onClose}
        >
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
                    width: 550,
                    margin: '0 auto',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    paddingTop: '20px',
                    paddingBottom: '20px',
                }}>
                    <Typography variant='h3'
                        color={theme.palette.grey['900']}
                        sx={{
                            fontSize: '20px',
                            letterSpacing: 0,
                            marginTop: '10px',
                        }}>Create New User</Typography>
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
                            onClick={() => console.log('submit')}
                        >
                            Create
                        </Button>
                    </Box>
                </Box>
            </Box>
        </CustomModal>
    )
}

export default CreateUserModal;