import { ReactNode, useMemo } from 'react';
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
import { Backdrop, Box, CircularProgress, Paper, TableContainer, TablePagination } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface IDataTableProps<T> {
  columns: Array<IColumn<T>>;
  data: Array<T>;
  total: number;
  activePage: number;
  rowsPerPage?: number;
  isLoading?: boolean;
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
  isLoading = false,
}: IDataTableProps<T>): ReactNode => {

  const theme = useTheme();

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
    <>
      {isLoading && (
        <Backdrop
          sx={{
            color: '#fff',
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backdropFilter: 'blur(6px)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
          open
        >
          <CircularProgress sx={{
            color: theme.palette.grey['700'],
          }}
          />
        </Backdrop>
      )}

      <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', padding: 0 }}>
          <TableContainer>
            <TableMain className={containerClassName}>
              <TableHeader columns={columns} onSort={onSort} />
              <TBody>{renderRows}</TBody>
            </TableMain>
            <TablePagination
              rowsPerPage={rowsPerPage}
              page={activePage}
              onPageChange={(_, page) => onPageChange(page)}
              onRowsPerPageChange={(event) => onLimitChange(parseInt(event.target.value, 10))}
              rowsPerPageOptions={rowsPerPageOptions}
              count={total}
              component="div"
            />
          </TableContainer>
        </Paper>
      </Box>
    </>
  );
};

export default DataTable;
