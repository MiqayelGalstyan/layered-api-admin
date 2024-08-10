import { ChangeEvent, ReactNode, useMemo } from 'react';
import {
  CellWrapper,
  TableMain,
  DataTableRow,
  NotFoundText,
  TBody,
} from './styled';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import { IColumn } from '@app/types/table.types';
import { Box, Container, Paper, TableContainer, TablePagination } from '@mui/material';

interface IDataTableProps<T> {
  columns: Array<IColumn<T>>;
  data: Array<T>;
  total: number;
  activePage: number;
  rowsPerPage?: number;
  onPageChange: (page: number) => void;
  onLimitChange: (limit: number) => void;
  onSort?: (column: IColumn<T>) => void;
  containerClassName?: string;
}

const rowsPerPageOptions = [10, 20, 50];

const DataTable = <T,>({
  columns,
  data,
  onSort,
  containerClassName,
  activePage,
  total,
  rowsPerPage = rowsPerPageOptions[0],
  onPageChange,
  onLimitChange,
}: IDataTableProps<T>): ReactNode => {

  const renderRows = useMemo((): ReactNode => {
    return data.length > 0 ? (
      data.map((row: T, index: number) => (
        <DataTableRow key={index}>
          <TableRow columns={columns} row={row} />
        </DataTableRow>
      ))
    ) : (
      <DataTableRow>
        <CellWrapper>
          <NotFoundText>Not Found</NotFoundText>
        </CellWrapper>
      </DataTableRow>
    );
  }, [data, columns]);

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', padding: 0 }}>
        <TableContainer>
          <TableMain className={containerClassName}>
            <TableHeader columns={columns} onSort={onSort} />
            <TBody>{renderRows}</TBody>
          </TableMain>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={total}
          rowsPerPage={rowsPerPage}
          page={activePage}
          onPageChange={(_, page) => onPageChange(page)}
          onRowsPerPageChange={(event) => onLimitChange(parseInt(event.target.value, 10))}
        />
      </Paper>
    </Box>
  );
};

export default DataTable;
