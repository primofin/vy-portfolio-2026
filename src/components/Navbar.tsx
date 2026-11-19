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
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const scrollItems = [
  { label: 'About', id: 'about' },
  { label: 'Featured Projects', id: 'featured-projects' },
  { label: 'Contact', id: 'contact' },
];

const pageItems: { label: string; path: string }[] = [];

export default function Navbar() {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });
  const pathname = usePathname();
  const router = useRouter();

  // State to track which section is currently in view
  const [activeSection, setActiveSection] = useState('');

  // Scroll Spy Logic
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection(''); // Reset if not on home page
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of the viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Observe each section
    scrollItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  const handleNavClick = (id: string) => {
    if (pathname !== '/') {
      router.push(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <AppBar
      position='fixed'
      elevation={0}
      sx={{
        bgcolor:
          trigger || pathname !== '/'
            ? 'rgba(7, 8, 15, 0.7)'
            : 'transparent',
        backdropFilter: trigger || pathname !== '/' ? 'blur(16px)' : 'none',
        transition: '0.3s all ease-in-out',
        color: 'text.primary',
        borderBottom:
          trigger || pathname !== '/'
            ? '1px solid rgba(255,255,255,0.08)'
            : 'none',
      }}
    >
      <Container maxWidth='lg'>
        <Toolbar sx={{ justifyContent: 'space-between', px: '0 !important' }}>
          <Typography
            variant='h6'
            component={Link}
            href='/'
            sx={{
              fontWeight: 900,
              textDecoration: 'none',
              color: 'inherit',
              letterSpacing: -0.5,
            }}
          >
            VY<span style={{ color: '#22d3ee' }}>.</span>PORTFOLIO
          </Typography>

          <Stack direction='row' spacing={1} alignItems='center'>
            {/* Internal SPA Links with Highlight Logic */}
            {scrollItems.map((item) => {
              const isActive = activeSection === item.id && pathname === '/';
              return (
                <Button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  sx={{
                    color: isActive ? 'secondary.main' : 'text.primary',
                    textTransform: 'none',
                    fontWeight: 600,
                    display: { xs: 'none', md: 'inline-flex' },
                    position: 'relative',
                    transition: 'color 0.3s ease',
                    // Underline indicator
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 6,
                      left: '15%',
                      width: isActive ? '70%' : '0%',
                      height: '2px',
                      bgcolor: 'secondary.main',
                      transition: 'width 0.3s ease',
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}

            {/* Standalone Page Links */}
            {pageItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                href={item.path}
                sx={{
                  color:
                    pathname === item.path ? 'secondary.main' : 'text.primary',
                  textTransform: 'none',
                  fontWeight: 600,
                }}
              >
                {item.label}
              </Button>
            ))}

            <Button
              component={Link}
              href='/resume'
              variant='contained'
              size='small'
              sx={{
                ml: 1,
                borderRadius: '8px',
                textTransform: 'none',
                fontWeight: 'bold',
                boxShadow: 'none',
                background: 'linear-gradient(120deg,#4f8cff,#22d3ee)',
                color: '#05060b',
              }}
            >
              View Resume
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
