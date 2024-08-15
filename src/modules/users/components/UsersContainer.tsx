import DataTable from '@components/common/DataTable';
import { Box, Button, Typography } from '@mui/material';
import { usersColumns } from '../data/columns';
import { useGetUsersQuery, useRemoveUserMutation } from '../api/user.api';
import { IUser, UserTableEnum } from '../types/user.interface';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import DeleteUserModal from './DeleteUserModal';
import useToast from '@app/hooks/useToast';
import { useAppSelector } from '@app/store/hook';
import { Role } from '@app/types/role.types';
import { RequestError } from '@app/types/error';


const UsersContainer = () => {

    const { data, isLoading, refetch } = useGetUsersQuery({ page: 1, limit: 10 });
    const [removeUser, { isLoading: isUserDeleteLoading }] = useRemoveUserMutation();

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedUserId, setSelectedUserId] = useState<number | undefined>();

    const user = useAppSelector(({ auth }) => auth.user);

    const toast = useToast();

    const onModalOpen = (id: number) => {
        setIsModalOpen(true);
        setSelectedUserId(id);
    }


    const columns = [
        ...usersColumns,
        ...(user?.roleId === Role.SUPER_ADMIN ? [
            {
                fieldName: UserTableEnum.ACTIONS,
                title: 'Actions',
                sortable: false,
                render: (row: IUser) => {
                    if (user.id !== row.id) {
                        return (
                            <Button onClick={() => onModalOpen(row.id)}><DeleteIcon color='error' /></Button>
                        )
                    }
                    return null;
                }
            }
        ] : []),
    ];

    const onModalClose = () => {
        setIsModalOpen(false);
        setSelectedUserId(undefined);
    }

    const onDeleteUser = async () => {
        if (!selectedUserId) {
            return;
        }
        try {
            const isDeleted = await removeUser(selectedUserId).unwrap();
            if (isDeleted) {
                refetch();
                toast.success('Successfully deleted');
            }
        } catch (error) {
            const errorMessage = error as RequestError;
            toast.error(errorMessage.data);
        } finally {
            onModalClose();
        }
    }


    return (
        <>
            <Box sx={{
                paddingLeft: '50px',
                paddingRight: '50px',
                marginTop: '35px',
                marginBottom: '10px',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}>
                    <Typography sx={{ fontWeight: '600', fontSize: 30, letterSpacing: 0, mb: 5 }}>
                        Users
                    </Typography>
                    <DataTable
                        columns={columns}
                        data={data?.items || []}
                        activePage={0}
                        total={data?.totalCount || 0}
                        isLoading={isLoading || isUserDeleteLoading}
                        onPageChange={() => console.log('fdsfd')}
                        onLimitChange={() => console.log('qqqqq')} />
                </Box>
            </Box>
            <DeleteUserModal
                onClose={onModalClose}
                open={isModalOpen}
                onSubmit={onDeleteUser} />
        </>
    )
}

export default UsersContainer;