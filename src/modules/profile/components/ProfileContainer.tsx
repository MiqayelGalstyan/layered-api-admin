import { Box, Typography } from '@mui/material';

const ProfileContainer = () => {
    return (
        <>
            <Box sx={{
                paddingLeft: '50px',
                paddingRight: '50px',
                marginTop: '35px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '10px',
            }}>
                <Typography sx={{ fontWeight: '600', fontSize: 30, letterSpacing: 0 }}>
                    Profile
                </Typography>
            </Box>
        </>
    )
}

export default ProfileContainer;