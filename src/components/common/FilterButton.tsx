import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import theme from '@app/theme';
import FilterLinesSvg from '@assets/icons/filter-lines.svg?react';

interface FilterButtonProps extends ButtonProps {
  handleFilterClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  handleFilterClick,
  ...props
}) => (
  <Button
    {...props}
    sx={{
      color: theme.palette.grey[700],
      width: '103px',
      minWidth: '103px',
      display: 'flex',
      alignItems: 'center',
      '.MuiButton-startIcon': {
        marginRight: 0,
      },
      ...props.sx,
    }}
    variant="outlined"
    startIcon={<FilterLinesSvg style={{ width: '20px', height: '20px' }} />}
    onClick={handleFilterClick}>
    Filters
  </Button>
);

export default FilterButton;
