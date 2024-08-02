import React from 'react';
import { Select, MenuItem, styled, alpha } from '@mui/material';
import TableRowBase from '@components/common/TableRowBase';
import theme from '@app/theme';
import StatusText from '@components/common/StatusText';
import { format } from 'date-fns';
import { EventStatusType, IEvent } from '../types/event.types';
import { EventsSortFields } from '../types/sort.types';

interface EventTableRowProps {
  event: IEvent;
  onUpdateStatus: (id: number, status: EventStatusType) => void;
}

const TableRow: React.FC<EventTableRowProps> = ({
  event,
  onUpdateStatus,
}) => {
  const displayColumns = [
    { key: EventsSortFields.Name, label: 'Sponsored Event' },
    { key: EventsSortFields.Location, label: 'Location' },
    {
      key: EventsSortFields.Started,
      label: 'Registered',
      customRender: (event: IEvent) =>
        format(new Date(event.started), 'dd MMM yyyy'),
    },
    {
      key: EventsSortFields.Status,
      label: 'Account type',
      customRender: (event: IEvent) => (
        <StatusText
          showDot={false}
          sx={{
            bgcolor: theme.palette.blue[50],
            color: theme.palette.success.dark,
            fontSize: '0.875rem',
          }}
          text="Receiver"
        />
      ),
    },
    {
      key: EventsSortFields.Status,
      label: 'Status',
      customRender: (user: IEvent) => (
        <CustomSelect
          value={user.status}
          onChange={event =>
            onUpdateStatus(user.id, event.target.value as EventStatusType)
          }
          MenuProps={{
            PaperProps: {
              sx: {
                boxShadow: `0px 1px 2px 0px ${alpha(theme.palette.grey[900], 0.1)}`,
                borderRadius: '8px',
                border: `1px solid ${theme.palette.grey[300]}`,
                width: '152px',
                padding: 0,
              },
            },
          }}>
          <CustomMenuItem value={EventStatusType.ACTIVE}>Active</CustomMenuItem>
          <CustomMenuItem value={EventStatusType.STOPPED}>
            Stopped
          </CustomMenuItem>
        </CustomSelect>
      ),
    },
  ];

  return (
    <TableRowBase
      event={event}
      onUpdateStatus={onUpdateStatus}
      displayColumns={displayColumns}
    />
  );
};

const CustomSelect = styled(Select)(({ theme }) => ({
  boxShadow: `0px 1px 2px 0px ${alpha(theme.palette.grey[900], 0.05)}`,
  border: `1px solid ${theme.palette.grey[300]}`,
  width: '152px',

  height: '40px',
  padding: '10px 14px',
  gap: '0px',
  borderRadius: '8px',
  '& .MuiSelect-select': {
    display: 'flex',
    justifyContent: 'space-between',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
}));

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: '14px',
  color: theme.palette.grey[700],
  padding: '10px 14px',
  '&.Mui-selected': {
    backgroundColor: theme.palette.grey[100],
    '&:hover': {
      backgroundColor: theme.palette.grey[100],
    },
  },
  '&:hover': {
    backgroundColor: theme.palette.grey[400],
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#EDEFF1',
  },
  '&.Mui-active': {
    backgroundColor: '#E0E4E7',
  },
  '&.Mui-selected.Mui-focusVisible': {
    backgroundColor: '#D9E0E5',
  },
}));

export default TableRow;
