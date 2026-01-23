'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1a3a5f' },
    background: { default: '#f4f7f9' },
  },
  typography: {
    fontFamily: 'inherit',
  },
});

export default theme;
