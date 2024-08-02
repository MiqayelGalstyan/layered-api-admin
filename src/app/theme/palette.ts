import { PaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    blue: {
      50: string;
      700: string;
    };
    green: {
      50: string;
      700: string;
      900: string;
    };
  }
  interface PaletteOptions {
    blue?: {
      50?: string;
      700?: string;
    };
    green?: {
      50?: string;
      700?: string;
      900?: string;
    };
  }
}

export enum colors {
  black = '#000000',
  white = '#ffffff',
  gray900 = '#101828',
  gray800 = '#1D2939',
  gray700 = '#344054',
  gray600 = '#475467',
  gray500 = '#667085',
  gray400 = '#F9FAFB',
  gray300 = '#D0D5DD',
  gray200 = '#EAECF0',
  gray100 = '#F2F4F7',
  primary800 = '#53389E',
  primary700 = '#6941C6',
  primary600 = '#7F56D9',
  primary300 = '#D6BBFB',
  primary200 = '#E9D7FE',
  primary100 = 'rgba(244, 235, 255, 1)',
  primary50 = '#F9F5FF',
  orange = '#F79009',
  blue50 = '#EFF8FF',
  blue700 = '#175CD3',
  success700 = 'rgba(2, 122, 72, 1)',
  success50 = 'rgba(236, 253, 243, 1)',
  error700 = 'rgba(180, 35, 24, 1)',
  error500 = 'rgba(240, 68, 56, 1)',
  error50 = 'rgba(254, 243, 242, 1)',
  green700 = '#12B76A',
  green900 = '#027A48',
  green50 = '#ECFDF3',
}

export const palette: PaletteOptions = {
  primary: {
    main: colors.black,
    dark: colors.black,
    light: colors.black,
  },
  secondary: {
    main: colors.orange,
  },
  error: {
    main: colors.error500,
    light: colors.error50,
    dark: colors.error700,
  },
  success: {
    main: colors.success700,
    light: colors.success50,
  },
  background: {
    default: colors.gray100,
    paper: colors.white,
  },
  text: {
    primary: colors.gray900,
    secondary: colors.gray800,
  },
  blue: {
    50: colors.blue50,
    700: colors.blue700,
  },
  green: {
    50: colors.green50,
    700: colors.green700,
    900: colors.green900,
  },
  grey: {
    100: colors.gray100,
    200: colors.gray200,
    300: colors.gray300,
    400: colors.gray400,
    500: colors.gray500,
    600: colors.gray600,
    700: colors.gray700,
    800: colors.gray800,
    900: colors.gray900,
  },
};
