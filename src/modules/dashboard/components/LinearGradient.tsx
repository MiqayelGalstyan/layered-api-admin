// LinearGradient.tsx
import React from 'react';

interface LinearGradientProps {
  id: string;
  stopColorStart: string;
  stopColorEnd: string;
  stopOpacityStart: number;
  stopOpacityEnd: number;
}

const LinearGradient: React.FC<LinearGradientProps> = ({
  id,
  stopColorStart,
  stopColorEnd,
  stopOpacityStart,
  stopOpacityEnd,
}) => (
  <defs>
    <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
      <stop offset="10%" stopColor={stopColorStart} stopOpacity={stopOpacityStart} />
      <stop offset="90%" stopColor={stopColorEnd} stopOpacity={stopOpacityEnd} />
    </linearGradient>
  </defs>
);

export default LinearGradient;
