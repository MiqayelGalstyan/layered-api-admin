import React, { useState } from 'react';
import styled from '@emotion/styled';
import MetricCard from './MetricCard';
import theme from '@app/theme';
import { Box } from '@mui/material';

interface MetricCardContainerProps {
  metrics: { title: string; value: string | number }[];
  activeMetric: number | null;
  onCardClick: (index: number) => void;
}

const MetricCardContainer: React.FC<MetricCardContainerProps> = ({
  metrics,
  activeMetric,
  onCardClick,
}) => {
  return (
    <Container>
      {metrics.map(({ title, value }, index) => (
        <MetricCard
          key={title}
          title={title}
          value={value}
          maxWidth={'190px'}
          active={index === activeMetric}
          onClick={() => onCardClick(index)}
        />
      ))}
    </Container>
  );
};

const Container = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '24px 0',
  gap: 10,

  [theme.breakpoints.down('md')]: {
    flexWrap: 'wrap',
    padding: '16px 0',
  },
});

export default MetricCardContainer;
