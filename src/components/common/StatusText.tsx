import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

interface StatusTextProps extends BoxProps {
  text?: string;
  showDot?: boolean;
  dotColor?: string;
  children?: React.ReactNode;
  padding?: string;
}

const StatusText: React.FC<StatusTextProps> = ({
  text,
  children,
  dotColor = 'transparent',
  showDot = true,
  padding = '2px 10px',
  ...restProps
}) => (
  <StatusTextContainer padding={padding} {...restProps}>
    {showDot && <Dot bgcolor={dotColor} />}
    {text || children}
  </StatusTextContainer>
);

const StatusTextContainer = styled(Box, {
  shouldForwardProp: prop => prop !== 'padding',
})<{ padding: string }>(({ theme, padding }) => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '12px',
  height: '24px',
  fontWeight: 'bold',
  fontSize: '14px',
  padding,
  width: 'max-content',
  ...theme.typography.caption,
}));

const Dot = styled(Box)(() => ({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  marginRight: '8px',
}));

export default StatusText;
