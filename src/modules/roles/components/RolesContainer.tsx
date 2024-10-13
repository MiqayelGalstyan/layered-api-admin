import DataTable from '@components/common/DataTable';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { rolesColumns } from '../data/columns';
import { useAppSelector } from '@app/store/hook';
import { Role } from '@app/types/role.types';
import { RoleTableEnum } from '../types/roles.enum';
import { IRole } from '../types/role.interface';
import DeleteIcon from '@mui/icons-material/Delete';
import { useGetRolesQuery } from '../api/role.api';


const RolesContainer = () => {

    const { data, isLoading, refetch } = useGetRolesQuery({ page: 1, limit: 10 });

    const user = useAppSelector(({ auth }) => auth.user);


    const onModalOpen = (id: number) => {

    }


    const columns = [
        ...rolesColumns,
        {
            fieldName: RoleTableEnum.ACTIONS,
            title: 'Actions',
            sortable: false,
            render: (row: IRole) => {
                if (user?.roleId === Role.SUPER_ADMIN) {
                    return (
                        <Button onClick={() => onModalOpen(row.id)}><DeleteIcon color='error' /></Button>
                    )
                }
                return null;
            }
        }
    ];



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
                        Roles
                    </Typography>
                    <DataTable
                        columns={columns}
                        data={data?.items || []}
                        activePage={0}
                        total={data?.totalCount || 0}
                        isLoading={false}
                        onPageChange={() => console.log('fdsfd')}
                        onLimitChange={() => console.log('qqqqq')} />
                </Box>
            </Box>
        </>
    )
}

export default RolesContainer;