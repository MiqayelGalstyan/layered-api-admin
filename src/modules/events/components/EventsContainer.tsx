import React, { useState } from 'react';
import EventsTable from './EventsTable';
import { Box, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PromoteEventModal from './PromoteEventModal';

const EventsContainer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const theme = useTheme();

  const onModalOpen = () => {
    setModalOpen(prevState => !prevState);
  }


  const onModalClose = () => {
    setModalOpen(false);
  }

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
          Sponsored Events
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: theme.palette.common['black'],
            fontWeight: '600',
          }}
          onClick={onModalOpen}
        >
          Promote Event
        </Button>
      </Box>
      <EventsTable />
      <PromoteEventModal onClose={onModalClose} open={modalOpen} />
    </>
  );
};

export default EventsContainer;