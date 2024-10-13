import {
  DataTableHeader,
  THead,
} from './styled';
import { IColumn, SortDirectionType } from '@app/types/table.types';
import { useState } from 'react';
import {
  TableCell,
  TableSortLabel,
  styled,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface ITableHeaderProps<T> {
  columns: Array<IColumn<T>>;
  onSort?: (column: IColumn<T>) => void;
}

const TableHeader = <T,>({ columns, onSort }: ITableHeaderProps<T>) => {
  const theme = useTheme();

  const [sortDirection, setSortDirection] = useState<{ [key: string]: SortDirectionType }>({});

  const handleSort = (column: IColumn<T>) => {
    const currentDirection = sortDirection[column.fieldName];
    const newDirection = currentDirection === SortDirectionType.ASC ? SortDirectionType.DESC : SortDirectionType.ASC;
    setSortDirection({ ...sortDirection, [column.fieldName]: newDirection });
    onSort?.(column);
  };


  return (
    <THead>
      <DataTableHeader>
        {columns.length > 0 &&
          columns.map((column: IColumn<T>, index: number) => (
            <TableCell
              key={index}
              sortDirection={
                column.sortable
                  ? sortDirection[column.fieldName] === SortDirectionType.ASC
                    ? 'asc'
                    : 'desc'
                  : undefined
              }
              sx={{
                width: column.columnWidth,
                minWidth: column.columnWidth,
                border: `1px solid ${theme.palette.grey[300]}`
              }}>
              <StyledTableSortLabel
                hideSortIcon={!column.sortable}
                active={column.sortable}
                direction={
                  column.sortable
                    ? sortDirection[column.fieldName] === SortDirectionType.ASC
                      ? 'asc'
                      : 'desc'
                    : undefined
                }
                onClick={() => handleSort(column)}>
                {column.title}
              </StyledTableSortLabel>
            </TableCell>
          ))}
      </DataTableHeader>
    </THead>
  );
};

const StyledTableSortLabel = styled(TableSortLabel)(({ theme }) => ({
  '& .MuiTableSortLabel-icon': {
    opacity: 1,
  },
}));

export default TableHeader;
