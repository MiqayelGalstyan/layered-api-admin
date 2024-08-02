import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './helper';
import { Box, CircularProgress } from '@mui/material';

const AppRoutes: React.FC = () => {
  const element = useRoutes(routes);
  return (
    <Suspense
      fallback={
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh">
          <CircularProgress />
        </Box>
      }
      >
      {element}
    </Suspense>
  );
};

export default AppRoutes;
