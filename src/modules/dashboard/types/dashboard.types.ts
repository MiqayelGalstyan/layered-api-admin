export type DataPoint = {
  date: string;
  value: number;
};

export type GroupedData = {
  date: string;
  value: number;
};

export enum XAxisLabel {
  Day = 'Day',
  Month = 'Month',
  Year = 'Year',
}

export const DEFAULT_NUMBER_OF_Y_TICKS = 6;
export const DEFAULT_NUMBER_OF_X_TICKS = 12;
export const REFRESH_INTERVAL_MS = 10000;

export const MAX_DAYS_FOR_DAILY = 30;
export const MAX_MONTHS_FOR_MONTHLY = 12;
