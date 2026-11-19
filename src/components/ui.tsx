'use client';
import { ReactNode } from 'react';
import { Box, Typography, alpha } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { gradient } from '@/theme';

/** Fade-up on scroll. */
export function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Glassmorphism card with an accent glow on hover. */
export function GlassCard({
  children,
  glow = '#4f8cff',
  sx,
}: {
  children: ReactNode;
  glow?: string;
  sx?: SxProps<Theme>;
}) {
  return (
    <Box
      sx={[
        {
          p: 3,
          borderRadius: '24px',
          border: '1px solid rgba(255,255,255,0.08)',
          background:
            'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.015))',
          backdropFilter: 'blur(14px)',
          transition: 'all .35s cubic-bezier(.22,1,.36,1)',
          '&:hover': {
            transform: 'translateY(-6px)',
            borderColor: alpha(glow, 0.55),
            boxShadow: `0 20px 60px ${alpha(glow, 0.22)}`,
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Box>
  );
}

export function GradientText({ children }: { children: ReactNode }) {
  return (
    <Box
      component='span'
      sx={{
        background: gradient,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {children}
    </Box>
  );
}

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: ReactNode;
}) {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography
        sx={{
          color: 'secondary.main',
          fontFamily: 'var(--font-display)',
          letterSpacing: 3,
          fontSize: 13,
          fontWeight: 700,
          textTransform: 'uppercase',
          mb: 1.5,
        }}
      >
        / {eyebrow}
      </Typography>
      <Typography
        variant='h2'
        sx={{ fontSize: { xs: '2.2rem', md: '3.2rem' }, lineHeight: 1.1 }}
      >
        {title}
      </Typography>
    </Box>
  );
}
