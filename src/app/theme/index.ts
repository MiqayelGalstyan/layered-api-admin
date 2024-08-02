import { createTheme } from '@mui/material/styles';
import { responsiveFontSizes } from '@app/theme/responsiveFontSizes';
import { palette } from '@app/theme/palette';
import { breakpoints } from '@app/theme/breakpoints';
import { typography } from '@app/theme/typography';
import { mixins } from '@app/theme/mixins';
import { components } from '@app/theme/components';

const spacing = (factor: number) => `${factor * 4}px`;

const theme = createTheme({
  palette,
  spacing: (factor: number) => spacing(factor),
  breakpoints,
  typography,
  mixins,
  components,
});

theme.typography = { ...theme.typography, ...responsiveFontSizes(theme) };
// MuiCssBaseline
theme.components = theme.components || {};
theme.components.MuiCssBaseline = {
  styleOverrides: `
    html {
      height: 100%;
      width: 100%;
       background: ${theme.palette.background.paper};
    }
    body {
      margin: 0;
      padding: 0;
      background: ${theme.palette.background.paper};
      color: ${theme.palette.common.black};
      font-family: ${theme.typography.fontFamily};
      font-size: ${theme.typography.fontSize}px;  // Define base font size if needed
      line-height: 1.6;
      overflow-x: hidden;  // Prevents horizontal scroll
    }
    a {
      color: inherit;
      text-decoration: none;
      cursor: pointer;
    }
    *, *::before, *::after {
      box-sizing: border-box;  // Ensures that padding and border are included in the total dimensions
    }
    #root, .App {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
     @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Inter'), local('Inter-Regular'), url('./assets/fonts/Inter-Regular.ttf') format('truetype');
        }
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: local('Inter'), local('Inter-Medium'), url('./assets/fonts/Inter-Medium.ttf') format('truetype');
        }
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: local('Inter'), local('Inter-SemiBold'), url('./assets/fonts/Inter-SemiBold.ttf') format('truetype');
        }
        
      
        .Toastify__toast--success .Toastify__toast-body {
            flex-direction: column;
            align-items: flex-start;
        }
        
        .Toastify__toast--success .Toastify__toast-body .Toastify__toast-icon {
          width: 48px;
        }
        
  `,
};

export default theme;
