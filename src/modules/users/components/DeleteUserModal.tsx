import CustomModal from "@components/common/Modal";
import { Box, Button, SvgIcon, Typography } from "@mui/material";
import { FC } from "react";
import LogoutIcon from '@assets/icons/logout-icon.svg?react';
import { useTheme } from '@mui/material/styles';

interface IDeleteUserModal {
    open: boolean;
    onClose: () => void;
    onSubmit: () => void;
}


const DeleteUserModal: FC<IDeleteUserModal> = ({ open, onClose, onSubmit }) => {

    const theme = useTheme();

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
                        }}>Do you want to delete user?</Typography>
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
                            onClick={onSubmit}
                        >
                            Delete
                        </Button>
                    </Box>
                </Box>
            </Box>
        </CustomModal>
    )
}

export default DeleteUserModal;