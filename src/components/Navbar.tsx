'use client';
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  Container,
  useScrollTrigger,
} from '@mui/material';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AppBar
      position='fixed'
      elevation={trigger ? 4 : 0}
      sx={{
        bgcolor: trigger ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: trigger ? 'blur(10px)' : 'none',
        transition: '0.3s all ease-in-out',
        color: 'text.primary',
        borderBottom: trigger ? '1px solid #eee' : 'none',
      }}
    >
      <Container maxWidth='lg'>
        <Toolbar sx={{ justifyContent: 'space-between', px: '0 !important' }}>
          <Typography
            variant='h6'
            component='div'
            sx={{ fontWeight: 900, cursor: 'pointer', letterSpacing: -0.5 }}
            onClick={() => handleScroll('home')}
          >
            VY<span style={{ color: '#007bff' }}>.</span>PORTFOLIO
          </Typography>

          <Stack direction='row' spacing={1}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                sx={{
                  color: 'text.primary',
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
