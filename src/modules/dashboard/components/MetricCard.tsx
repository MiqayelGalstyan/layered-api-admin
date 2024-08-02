// MetricCard.tsx
import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Box, BoxProps } from '@mui/material';
import theme from '@app/theme';

interface MetricCardProps extends BoxProps {
  maxWidth?: string;
  height?: string;
  title: string;
  value: string | number;
  active?: boolean;
  onClick?: () => void;
}

const MetricCard: React.FC<MetricCardProps> = ({
  maxWidth,
  height = '124px',
  title,
  value,
  active,
  onClick,
}) => (
  <StyledCard
    sx={{
      maxWidth,
      height,
      backgroundColor: active
        ? theme.palette.grey[100]
        : theme.palette.background.paper,
    }}
    onClick={onClick}>
    <Typography color="textSecondary">{title}</Typography>
    <Typography variant="h1" component="p">
      {value}
    </Typography>
  </StyledCard>
);

const StyledCard = styled(Box)<{ active?: boolean }>(({ theme }) => ({
  width: '100%',
  borderRadius: '12px',
  border: `1px solid ${theme.palette.grey[200]}`,
  padding: `16px 24px`,
  cursor: 'pointer',

  [theme.breakpoints.down('lg')]: {
    padding: '8px 12px',
  },
}));

export default MetricCard;
