import React from 'react';
import {
  subDays,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
} from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Box, List, ListItem, ListItemText } from '@mui/material';

const predefinedRanges = [
  { label: 'Today', range: { startDate: new Date(), endDate: new Date() } },
  {
    label: 'Yesterday',
    range: {
      startDate: subDays(new Date(), 1),
      endDate: subDays(new Date(), 1),
    },
  },
  {
    label: 'This week',
    range: {
      startDate: startOfWeek(new Date()),
      endDate: endOfWeek(new Date()),
    },
  },
  {
    label: 'Last week',
    range: {
      startDate: startOfWeek(subDays(new Date(), 7)),
      endDate: endOfWeek(subDays(new Date(), 7)),
    },
  },
  {
    label: 'This month',
    range: {
      startDate: startOfMonth(new Date()),
      endDate: endOfMonth(new Date()),
    },
  },
  {
    label: 'Last month',
    range: {
      startDate: startOfMonth(subDays(new Date(), 30)),
      endDate: endOfMonth(subDays(new Date(), 30)),
    },
  },
  {
    label: 'This year',
    range: {
      startDate: startOfYear(new Date()),
      endDate: endOfYear(new Date()),
    },
  },
  {
    label: 'Last year',
    range: {
      startDate: startOfYear(subDays(new Date(), 365)),
      endDate: endOfYear(subDays(new Date(), 365)),
    },
  },
  { label: 'All time', range: { startDate: new Date(0), endDate: new Date() } },
];

interface PredefinedRangesListProps {
  setPredefinedRange: (range: { startDate: Date; endDate: Date }) => void;
}

const PredefinedRangesList: React.FC<PredefinedRangesListProps> = ({
  setPredefinedRange,
}) => (
  <Box p={2}>
    <List>
      {predefinedRanges.map(item => (
        <ListItem
          key={item.label}
          onClick={() => setPredefinedRange(item.range)}>
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </List>
  </Box>
);

export default PredefinedRangesList;