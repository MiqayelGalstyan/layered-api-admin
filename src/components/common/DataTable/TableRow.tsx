
import { IColumn } from '@app/types/table.types';
import { TableCell } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface ITableRowProps<T> {
  columns: Array<IColumn<T>>;
  row: T;
}

const TableRow = <T,>({ columns, row }: ITableRowProps<T>) => {
  const theme = useTheme();

  const typedRow = row as Record<IColumn<T>['fieldName'], string>;

  return (
    <>
      {columns.length > 0 &&
        columns.map((column: IColumn<T>, index: number) => {
          return (
            <TableCell
              key={index}
              sx={{
                width: column.columnWidth,
                border: `1px solid ${theme.palette.grey[300]}`,
                paddingTop: '25px',
                paddingBottom: '25px',
              }}
              className={column.className}
              size="small">
              {column?.render
                ? column.render(row, index)
                : typedRow[column.fieldName]}
            </TableCell>
          )
        })}
    </>
  );
};

export default TableRow;
