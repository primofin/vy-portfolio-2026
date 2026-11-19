'use client';
import { createTheme } from '@mui/material/styles';

export const accent = {
  blue: '#4f8cff',
  cyan: '#22d3ee',
  violet: '#a78bfa',
  mint: '#2dd4bf',
};

export const gradient = `linear-gradient(120deg, ${accent.blue} 0%, ${accent.cyan} 50%, ${accent.violet} 100%)`;

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: accent.blue },
    secondary: { main: accent.cyan },
    background: { default: '#07080f', paper: '#0d0f1a' },
    text: { primary: '#f1f5f9', secondary: '#94a3b8' },
    divider: 'rgba(255,255,255,0.08)',
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: 'var(--font-inter), Inter, Arial, sans-serif',
    h1: { fontFamily: 'var(--font-display), sans-serif', fontWeight: 700 },
    h2: { fontFamily: 'var(--font-display), sans-serif', fontWeight: 700 },
    h3: { fontFamily: 'var(--font-display), sans-serif', fontWeight: 700 },
    h4: { fontFamily: 'var(--font-display), sans-serif', fontWeight: 700 },
    h6: { fontSize: '1.1rem', fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
});

export default theme;
