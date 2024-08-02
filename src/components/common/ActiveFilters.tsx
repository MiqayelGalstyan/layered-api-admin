import React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import theme from '@app/theme';

interface ActiveFiltersProps {
  filters: { [key: string]: string };
  onRemoveFilter: (key: string) => void;
}

const ActiveFilters: React.FC<ActiveFiltersProps> = ({
  filters,
  onRemoveFilter,
}) => {
  const filterKeys = Object.keys(filters);

  return (
    <Box display="flex" alignItems="center" gap={2} my={2}>
      {filterKeys.length > 0 && (
        <Typography variant="body2" color="textSecondary">
          Filters:
        </Typography>
      )}
      {filterKeys.map(key => (
        <Chip
          key={key}
          label={`${filters[key]}`}
          onDelete={() => onRemoveFilter(key)}
          sx={{
            backgroundColor: theme.palette.blue[50],
            color: theme.palette.blue[700],
            '& .MuiChip-deleteIcon': {
              color: '#2E90FA',
            },
          }}
        />
      ))}
    </Box>
  );
};

export default ActiveFilters;
