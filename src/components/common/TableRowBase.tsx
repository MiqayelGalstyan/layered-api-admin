import React from 'react';
import { TableRow, TableCell, SelectChangeEvent } from '@mui/material';
import { styled } from '@mui/material/styles';
import useToast from '@app/hooks/useToast';
import { EventStatusType, IEvent } from '@modules/events';

interface TableRowBaseProps {
  event: IEvent;
  onUpdateStatus: (id: number, status: EventStatusType) => void;
  displayColumns: Array<{
    key: string;
    label: string;
    customRender?: (event: IEvent) => React.ReactNode;
  }>;
}

const TableRowBase: React.FC<TableRowBaseProps> = ({
  event,
  onUpdateStatus,
  displayColumns,
}) => {
  const { success, error } = useToast();

  const handleStatusChange = (event: SelectChangeEvent<EventStatusType>) => {
    onUpdateStatus(1, event.target.value as EventStatusType);
  };

  return (
    <>
      <StyledTableRow>
        {displayColumns.map(column => (
          <TableCell
            key={column.key}
            sx={{
              padding: '0 16px',
              height: '72px',
            }}
            width={150}
            size="small">
            {column.customRender
              ? column.customRender(event)
              : (event[column.key as keyof IEvent] as React.ReactNode)}
          </TableCell>
        ))}
      </StyledTableRow>
    </>
  );
};

const StyledTableRow = styled(TableRow)({
  height: '72px',
});

const ActionsSell = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '5px',
  '>svg': {
    cursor: 'pointer',
  },
});

export default TableRowBase;
