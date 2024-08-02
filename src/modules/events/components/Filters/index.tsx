import React from 'react';
import Popover from '@mui/material/Popover';

interface FiltersProps {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
}

const Filters: React.FC<FiltersProps> = ({
  anchorEl,
  handleClose,
}) => {

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Popover
      slotProps={{
        paper: {
          style: {
            borderRadius: '8px',
            padding: '20px 0 16px 0',
            width: '210px',
          },
        },
      }}
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}>
    </Popover>
  );
};

export default Filters;
