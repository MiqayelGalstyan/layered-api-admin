import { ReactNode, useMemo } from 'react';
import {
  CellWrapper,
  DataTableContainer,
  DataTableRow,
  NotFoundText,
  TBody,
} from './styled';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import { IColumn } from '@app/types/table.types';

interface IDataTableProps<T> {
  columns: Array<IColumn<T>>;
  data: Array<T>;
  onSort?: (column: IColumn<T>) => void;
  containerClassName?: string;
}

const DataTable = <T,>({
  columns,
  data,
  onSort,
  containerClassName,
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
        <CellWrapper
        >
          <NotFoundText>Not Found</NotFoundText>
        </CellWrapper>
      </DataTableRow>
    );
  }, [data, columns]);

  return (
    <DataTableContainer className={containerClassName}>
      <TableHeader columns={columns} onSort={onSort} />
      <TBody>{renderRows}</TBody>
    </DataTableContainer>
  );
};

export default DataTable;
