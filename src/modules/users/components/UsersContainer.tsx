import DataTable from '@components/common/DataTable';
import { Box, Typography } from '@mui/material';
import { usersColumns } from '../data/columns';
import { useGetUsersQuery } from '../api/user.api';


const UsersContainer = () => {

    const { data } = useGetUsersQuery({ page: 1, limit: 10 })


    if (!data) {
        return null;
    }


    return (
        <>
            <Box sx={{
                paddingLeft: '50px',
                paddingRight: '50px',
                marginTop: '35px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                marginBottom: '10px',
            }}>
                <Typography sx={{ fontWeight: '600', fontSize: 30, letterSpacing: 0, mb: 5 }}>
                    Users
                </Typography>
                <DataTable
                    columns={usersColumns}
                    data={data.items}
                    activePage={0}
                    total={data.totalCount}
                    onPageChange={() => console.log('fdsfd')}
                    onLimitChange={() => console.log('qqqqq')} />
            </Box>
        </>
    )
}

export default UsersContainer;