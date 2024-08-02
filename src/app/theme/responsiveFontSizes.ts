import { Theme } from '@mui/material/styles';

export const responsiveFontSizes = (theme: Theme) => {
  return {
    ...theme.typography,
    h1: {
      ...theme.typography.h1,
      [theme.breakpoints.down('md')]: {
        fontSize: '2rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.75rem',
      },
    },
    h2: {
      ...theme.typography.h2,
      [theme.breakpoints.down('md')]: {
        fontSize: '1.875rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
      },
    },
    h3: {
      ...theme.typography.h3,
      [theme.breakpoints.down('md')]: {
        fontSize: '1.5rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.25rem',
      },
    },
    h4: {
      ...theme.typography.h4,
      [theme.breakpoints.down('md')]: {
        fontSize: '1.25rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.125rem',
      },
    },
    h5: {
      ...theme.typography.h5,
      [theme.breakpoints.down('md')]: {
        fontSize: '1.125rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
    h6: {
      ...theme.typography.h6,
      [theme.breakpoints.down('md')]: {
        fontSize: '1rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.875rem',
      },
    },
    subtitle1: {
      ...theme.typography.subtitle1,
      [theme.breakpoints.down('md')]: {
        fontSize: '1rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.875rem',
      },
    },
    subtitle2: {
      ...theme.typography.subtitle2,
      [theme.breakpoints.down('md')]: {
        fontSize: '0.875rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.75rem',
      },
    },
    body1: {
      ...theme.typography.body1,
      [theme.breakpoints.down('md')]: {
        fontSize: '0.875rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.75rem',
      },
    },
    body2: {
      ...theme.typography.body2,
      [theme.breakpoints.down('md')]: {
        fontSize: '0.75rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.625rem',
      },
    },
  };
};
