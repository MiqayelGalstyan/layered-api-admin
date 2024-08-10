
import { IColumn } from '@app/types/table.types';
import { CellWrapper, DataTableCell, DataTableCellText } from './styled';

interface ITableRowProps<T> {
  columns: Array<IColumn<T>>;
  row: T;
}

const TableRow = <T,>({ columns, row }: ITableRowProps<T>) => {
  const typedRow = row as Record<IColumn<T>['fieldName'], string>;

  return (
    <>
      {columns.length > 0 &&
        columns.map((column: IColumn<T>, index: number) => {
          if (column?.render) {
            return (
              <CellWrapper
                key={index}
                width={column.columnWidth}
                className={column.className}
              >
                <DataTableCell
                  padding={column.padding}
                  $flexRow={column.flexRow}
                >
                  {column?.render(row, index)}
                </DataTableCell>
              </CellWrapper>
            );
          }

          return (
            <CellWrapper
              key={index}
              width={column.columnWidth}
              className={column.className}
            >
              <DataTableCell
                padding={column.padding}
                $flexRow={column.flexRow}
              >
                <DataTableCellText>
                  {typedRow[column.fieldName]}
                </DataTableCellText>
              </DataTableCell>
            </CellWrapper>
          );
        })}
    </>
  );
};

export default TableRow;
