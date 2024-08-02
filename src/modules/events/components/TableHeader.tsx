import React from 'react';
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  styled,
} from '@mui/material';
import { EventsSortFields, SortOrder } from '../types/sort.types';

interface HeadCell {
  id: EventsSortFields | 'actions';
  label: string;
  width: string;
}

interface UserTableHeaderProps {
  order: SortOrder;
  orderBy?: EventsSortFields;
  onRequestSort: (property: EventsSortFields) => void;
}

const headCells: HeadCell[] = [
  { id: EventsSortFields.Name, label: 'Sponsored Event', width: '195.5px' },
  { id: EventsSortFields.Status, label: 'Status', width: '195.5px' },
  {
    id: EventsSortFields.Location,
    label: 'Location',
    width: '122px',
  },
  { id: EventsSortFields.Started, label: 'Started', width: '133px' },
  { id: EventsSortFields.Impression, label: 'Impression', width: '184px' },
  {
    id: EventsSortFields.Tap,
    label: 'Tap',
    width: '150px',
  },
  { id: EventsSortFields.Conversion, label: 'Conversion', width: '116px' },
];

const TableHeader: React.FC<UserTableHeaderProps> = ({
  order,
  orderBy,
  onRequestSort,
}) => {
  const createSortHandler =
    (property: EventsSortFields) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            sortDirection={
              orderBy === headCell.id
                ? order === SortOrder.ASC
                  ? 'asc'
                  : 'desc'
                : false
            }
            sx={{ width: headCell.width, minWidth: headCell.width }}>
            {headCell.id === 'actions' ? (
              headCell.label
            ) : (
              <StyledTableSortLabel
                active={orderBy === headCell.id}
                direction={
                  orderBy === headCell.id
                    ? order === SortOrder.ASC
                      ? 'asc'
                      : 'desc'
                    : 'desc'
                }
                onClick={createSortHandler(headCell.id as EventsSortFields)}>
                {headCell.label}
              </StyledTableSortLabel>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

const StyledTableSortLabel = styled(TableSortLabel)(({ theme }) => ({
  '& .MuiTableSortLabel-icon': {
    opacity: 1,
  },
}));

export default TableHeader;
