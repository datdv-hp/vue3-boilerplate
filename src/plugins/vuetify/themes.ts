import type { ThemeDefinition } from 'vuetify';

// background: string;
// surface: string;
// primary: string;
// secondary: string;
// success: string;
// warning: string;
// error: string;
// info: string;
// 'on-background': string;
// 'on-surface': string;
// 'on-primary': string;
// 'on-secondary': string;
// 'on-success': string;
// 'on-warning': string;
// 'on-error': string;
// 'on-info': string;
export const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#6D79E8',
    error: '#ED3A3A',
    'on-error': '#ED3A3A',
    'on-surface': '#33303C',
    secondary: '#F2F1FF',
    success: '#439F6E',
    'on-success': '#212121',
    info: '#F3F7FE',
    'on-info': '#212121',
    warning: '#EBBC2E'
  }
};
