import TopIcon from '@mui/icons-material/North';
import {
  CellWrapper,
  DataTableCell,
  DataTableHeader,
  SortableButton,
  SortableIconsContainer,
  TableHeaderText,
  THead,
} from './styled';
import { IColumn, SortDirectionType } from '@app/types/table.types';
import { useState } from 'react';

interface ITableHeaderProps<T> {
  columns: Array<IColumn<T>>;
  onSort?: (column: IColumn<T>) => void;
}

const TableHeader = <T,>({ columns, onSort }: ITableHeaderProps<T>) => {
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
            <CellWrapper
              key={index}
              cellWidth={column.columnWidth}
              className={column.className}
            >
              <DataTableCell
                flexRow
                columnPadding={column.padding}
                tableHeader
                flexJustify={column.flexJustify}
              >
                <TableHeaderText>{column.title}</TableHeaderText>
                {column.sortable && (
                  <SortableIconsContainer>
                    <SortableButton
                      onClick={() => handleSort(column)}
                      style={{
                        transform: sortDirection[column.fieldName] === SortDirectionType.ASC ? 'none' : 'rotate(180deg)',
                      }}
                    >
                      <TopIcon />
                    </SortableButton>
                  </SortableIconsContainer>
                )}
              </DataTableCell>
            </CellWrapper>
          ))}
      </DataTableHeader>
    </THead>
  );
};

export default TableHeader;
