import { differenceInDays, differenceInMonths } from 'date-fns';
import {
  DataPoint,
  DEFAULT_NUMBER_OF_Y_TICKS,
  XAxisLabel,
} from '../types/dashboard.types';

export const transformDataPoints = (
  values: number[],
  labels: string[],
): DataPoint[] => {
  return values.map((value, index) => ({
    date: labels[index],
    value,
  }));
};

export const getMaxYValue = (data: DataPoint[]): number => {
  if (!data || data.length === 0) {
    return 0;
  }
  return Math.max(...data.map(item => item.value));
};

export const getYTicks = (
  maxValue: number,
  maxTicks: number = DEFAULT_NUMBER_OF_Y_TICKS,
): number[] => {
  const interval = Math.ceil(maxValue / maxTicks);
  const ticks = Array.from({ length: maxTicks }, (_, i) => i * interval);

  // Add the maximum value as the last tick, rounded
  const roundedMaxValue = Math.round(maxValue);
  if (ticks[ticks.length - 1] !== roundedMaxValue) {
    ticks.push(roundedMaxValue);
  }

  return ticks;
};

export const getXAxisLabel = (
  startDate: string,
  endDate: string,
): XAxisLabel => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const daysDiff = differenceInDays(end, start);
  const monthsDiff = differenceInMonths(end, start);

  if (daysDiff <= 30) {
    console.log('Returning: Day');
    return XAxisLabel.Day;
  } else if (monthsDiff <= 12) {
    console.log('Returning: Month');
    return XAxisLabel.Month;
  } else {
    console.log('Returning: Year');
    return XAxisLabel.Year;
  }
};
