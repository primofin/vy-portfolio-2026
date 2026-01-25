'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e', // Professional Navy Blue used in headers
    },
    secondary: {
      main: '#455a64', // Slate gray for subheaders
    },
    background: {
      default: '#f4f7f9',
    },
  },
  typography: {
    fontFamily: '__Roboto_54321, Roboto, Arial, sans-serif',
    h3: {
      fontWeight: 800,
    },
    h6: {
      fontSize: '1.1rem',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
  },
});

export default theme;
