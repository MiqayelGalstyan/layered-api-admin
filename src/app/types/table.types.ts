import { ReactNode } from 'react';

export interface IColumn<T> {
    fieldName: string;
    title: string;
    sortable?: boolean;
    render?: (row: T, index: number) => ReactNode;
    columnWidth?: number;
    flexRow?: boolean;
    flexJustify?: string;
    padding?: string;
    className?: string;
}

export enum SortDirectionType {
    ASC = 'ASC',
    DESC = 'DESC',
};
