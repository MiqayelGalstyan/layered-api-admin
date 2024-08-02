import { TypographyOptions } from '@mui/material/styles/createTypography';

export const typography: TypographyOptions = {
  fontFamily: ['Inter', 'Arial', 'sans-serif'].join(','),

  h1: {
    fontSize: '2.25rem', // 36px
    fontWeight: 600, // SemiBold
  },
  h2: {
    fontSize: '1.875rem', // 30px
    fontWeight: 600, // SemiBold
  },
  h3: {
    fontSize: '1.5rem', // 24px
    fontWeight: 600, // SemiBold
  },
  h4: {
    fontSize: '1.25rem', // 20px
    fontWeight: 600, // SemiBold
  },
  h5: {
    fontSize: '1.125rem', // 18px
    fontWeight: 600, // SemiBold
  },
  h6: {
    fontSize: '1rem', // 16px
    fontWeight: 600, // SemiBold
    lineHeight: '1.5', // 24px
  },
  subtitle1: {
    fontSize: '1rem', // 16px
    fontWeight: 400, // Regular
    lineHeight: '1.5', // 24px
  },
  subtitle2: {
    fontSize: '0.875rem', // 14px
    fontWeight: 400, // Regular
    lineHeight: '1.5', // 21px
  },
  body1: {
    fontSize: '1rem', // 16px
    fontWeight: 400, // Regular
    lineHeight: '1.5', // 24px
    letterSpacing: '0.04em',
  },
  body2: {
    fontSize: '0.875rem', // 14px
    fontWeight: 400, // Regular
    lineHeight: '1.5', // 21px
  },
  caption: {
    fontSize: '0.75rem', // 12px
    fontWeight: 400, // Regular
    lineHeight: '1.4', // Optionally set a line-height
  },
  button: {
    fontSize: '0.875rem', // 14px
    fontWeight: 600,
    textTransform: 'none',
    lineHeight: '1.25', // 20px
  },
};
