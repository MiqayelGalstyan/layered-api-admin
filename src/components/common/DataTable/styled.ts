import { styled } from '@mui/system';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/material';

const DataTableContainer = styled(Table)(({ theme }) => ({
  width: '100%',
  borderCollapse: 'collapse',
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('lg')]: {
    width: 991,
  },
  [theme.breakpoints.down('md')]: {
    width: 850,
  },
  [theme.breakpoints.down('sm')]: {
    width: 800,
  },
  [theme.breakpoints.down('xs')]: {
    width: '100%',
  },
}));

const DataTableHeader = styled(TableRow)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[300]}`,
  borderCollapse: 'collapse',
}));

const DataTableRow = styled(TableRow)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[300]}`,
  borderTop: 'unset',
  borderCollapse: 'collapse',
}));

const CellWrapper = styled(TableCell)<{ cellWidth?: number }>(({ theme, cellWidth }) => ({
  borderCollapse: 'collapse',
  borderStyle: 'solid',
  borderColor: theme.palette.grey[300],
  borderWidth: '1px',
  width: cellWidth ? `${cellWidth}px` : 'auto',
  padding: 0,
}));

const DataTableCell = styled(Box)<{
  tableHeader?: boolean;
  flexRow?: boolean;
  flexJustify?: string;
  columnPadding?: string;
}>(({ tableHeader, flexRow, flexJustify, columnPadding }) => ({
  padding: columnPadding ? columnPadding : tableHeader ? '10px' : '20px',
  display: flexRow ? 'flex' : 'block',
  justifyContent: flexJustify || 'flex-start',
  alignItems: 'center',
  minHeight: '58px',
  backgroundColor: tableHeader ? '#F5F5F5' : 'transparent',
}));

const SortableIconsContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '35px',
  gap: '6px',
  marginLeft: '5px',
});

const SortableButton = styled('button')({
  background: 'none',
  border: 'none',
  width: '24px',
  height: '100%',
  cursor: 'pointer',
  padding: 0,
  transition: '0.2s',
});

const DataTableCellText = styled(Typography)({
  display: 'inline-block',
});

const TableHeaderText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const NotFoundText = styled(Typography)({
  marginTop: '20px',
});

const THead = styled(TableHead)({
  width: '100%',
});

const TBody = styled(TableBody)({
  width: '100%',
});

export {
  DataTableContainer,
  DataTableHeader,
  DataTableRow,
  CellWrapper,
  DataTableCell,
  SortableIconsContainer,
  SortableButton,
  DataTableCellText,
  TableHeaderText,
  NotFoundText,
  TBody,
  THead,
};
