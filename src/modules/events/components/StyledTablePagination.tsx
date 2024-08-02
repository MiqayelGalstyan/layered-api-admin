import React from 'react';
import { TablePagination, TablePaginationOwnProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPagination = styled(TablePagination)(({ theme }) => ({
  '& .MuiTablePagination-toolbar': {
    paddingRight: theme.spacing(2),
  },
  '& .MuiTablePagination-select': {
    minWidth: 'auto',
  },
  '& .MuiTablePagination-selectRoot': {
    marginRight: theme.spacing(2),
  },
  '& .MuiTablePagination-actions': {
    marginLeft: theme.spacing(1),
  },
}));

const StyledTablePagination: React.FC<TablePaginationOwnProps> = props => {
  return (
    <StyledPagination
      slotProps={{
        select: {
          MenuProps: {
            sx: {
              '& .MuiPaper-root': {
                maxHeight: 300,
                width: 100,
                borderRadius: 0,
                padding: 0,
              },
            },
          },
        },
      }}
      {...props}
    />
  );
};

export default StyledTablePagination;