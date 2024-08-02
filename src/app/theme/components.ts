import { Components } from '@mui/material';
import { Theme } from '@mui/material/styles';

const commonButtonStyles = {
  borderRadius: '8px',
  padding: '10px 18px',
  gap: '8px',
  border: '1px solid transparent',
  opacity: 1,
};

export const components: Components<Omit<Theme, 'components'>> | undefined = {
  MuiPaper: {
    styleOverrides: {
      root: {
        width: '100%',
        height: 'auto',
        padding: '32px 0px 48px 0px',
        borderRadius: '40px 0px 0px 0px',
        background: '#FFFFFF',
        border: '1px solid #EAECF0',
        boxShadow:
          '0px 1px 2px rgba(16, 24, 40, 0.06), 0px 1px 3px rgba(16, 24, 40, 0.1)',
        opacity: 1,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        ...commonButtonStyles,
        fontSize: '1rem',
        lineHeight: '24px',
        fontWeight: 600,
        textTransform: 'none',
      },
      contained: {
        padding: '9px 16px',
      },
      outlined: {
        borderColor: '#000',
        color: '#000',
        '&:hover': {
          borderColor: '#000',
        },
      },
      text: {
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12,
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiInputBase-root': {
          '& input': {
            color: 'black',
            '&::placeholder': {
              color: 'rgba(0, 0, 0, 0.6)',
              opacity: 1,
            },
          },
          '& fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.23)',
          },
          '&:hover fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.42)',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#000',
          },
          '&.Mui-error fieldset': {
            borderColor: '#F04438',
          },
        },
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        // Style overrides for the label
        fontSize: '0.875rem',
        color: '#344054',
        '&.Mui-focused': {
          color: '#000',
        },
        '&.Mui-error': {
          color: '#F04438',
        },
      },
    },
  },
  MuiInput: {
    styleOverrides: {
      root: {
        // Style overrides for the input root
        '&:hover:not(.Mui-disabled):before': {
          borderBottom: '1px solid rgba(0, 0, 0, 0.42)', // Hover underline color
        },
        '&.Mui-focused:before': {
          borderBottom: `2px solid #000`, // Focus underline color
        },
        '&.Mui-error:after': {
          borderBottomColor: '#F04438', // Error underline color
        },
      },
      underline: {
        '&:before': {
          borderBottom: '1px solid rgba(0, 0, 0, 0.42)', // Default underline color
        },
        '&:after': {
          // Underline color when input is focused
          borderBottom: `2px solid #000`,
        },
      },
      input: {
        '&::placeholder': {
          color: 'rgba(0, 0, 0, 0.6)',
          opacity: 1, // Ensure placeholders have correct opacity
        },
        color: 'black', // Text color
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        // Style overrides for helper text
        '&.Mui-error': {
          color: '#F04438', // Error state color for helper text
          marginLeft: 0,
          fontSize: '0.875rem',
          fontWeight: '400',
          lineHeight: '20px',
          textAlign: 'left',
          letterSpacing: '0.04em',
        },
      },
    },
  },
};
