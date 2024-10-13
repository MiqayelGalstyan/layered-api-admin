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
import CreateUserModal from './CreateUserModal';


const UsersContainer = () => {

    const { data, isLoading, refetch } = useGetUsersQuery({ page: 1, limit: 10 });
    const [removeUser, { isLoading: isUserDeleteLoading }] = useRemoveUserMutation();

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
    const [selectedUserId, setSelectedUserId] = useState<number | undefined>();

    const [createUserModalOpen, setCreateUserModalOpen] = useState<boolean>(false);

    const user = useAppSelector(({ auth }) => auth.user);

    const toast = useToast();

    const onDeleteModalOpen = (id: number) => {
        setIsDeleteModalOpen(true);
        setSelectedUserId(id);
    }

    const onDeleteModalClose = () => {
        setIsDeleteModalOpen(false);
        setSelectedUserId(undefined);
    }


    const onCreateUserModalOpen = () => {
        setCreateUserModalOpen(true);
    }

    const onCreateUserModalClose = () => {
        setCreateUserModalOpen(false);
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
                            <Button onClick={() => onDeleteModalOpen(row.id)}><DeleteIcon color='error' /></Button>
                        )
                    }
                    return null;
                }
            }
        ] : []),
    ];



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
            onDeleteModalClose();
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
                {user?.roleId === Role.SUPER_ADMIN && (
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                        <Button variant="contained" onClick={onCreateUserModalOpen}>Create New User</Button>
                    </Box>
                )}
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
                onClose={onDeleteModalClose}
                open={isDeleteModalOpen}
                onSubmit={onDeleteUser}
            />
            <CreateUserModal
                open={createUserModalOpen}
                onClose={onCreateUserModalClose}
            />
        </>
    )
}

export default UsersContainer;