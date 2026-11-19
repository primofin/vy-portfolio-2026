'use client';
import { Container, Typography, Box, Button, Stack } from '@mui/material';
import {
  ArrowDownRight,
  Sparkles,
  Layers,
  Code2,
  Github,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { accent, gradient } from '@/theme';
import { GlassCard, GradientText } from '@/components/ui';

const cards = [
  {
    icon: <Sparkles size={26} />,
    title: 'AI-assisted engineering',
    desc: 'Claude Code and GitHub Copilot in my daily workflow.',
    color: accent.violet,
  },
  {
    icon: <Layers size={26} />,
    title: 'Design systems',
    desc: 'Shared Lit web components and Figma-to-code UI.',
    color: accent.blue,
  },
  {
    icon: <Code2 size={26} />,
    title: 'Full-stack & cloud',
    desc: 'React, Node.js, GraphQL, PostgreSQL and AWS.',
    color: accent.mint,
  },
];

const aiTools = ['Claude Code', 'GitHub Copilot'];

const stack = [
  'TypeScript',
  'React',
  'Next.js',
  'Lit',
  'Node.js',
  'Nest.js',
  'GraphQL',
  'PostgreSQL',
  'AWS',
  'Agile',
];

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Container maxWidth='lg' id='home' sx={{ pt: { xs: 12, md: 8 } }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '7fr 5fr' },
          gap: { xs: 6, md: 8 },
          alignItems: 'center',
          minHeight: '80vh',
        }}
      >
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Stack
            direction='row'
            spacing={1}
            alignItems='center'
            sx={{
              mb: 3,
              px: 1.75,
              py: 0.75,
              width: 'fit-content',
              borderRadius: 99,
              border: '1px solid rgba(255,255,255,0.1)',
              bgcolor: 'rgba(255,255,255,0.04)',
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: accent.mint,
                boxShadow: `0 0 12px ${accent.mint}`,
              }}
            />
            <Typography variant='caption' fontWeight={600} color='text.secondary'>
              Open to new opportunities
            </Typography>
          </Stack>

          <Typography
            variant='h1'
            sx={{
              fontSize: { xs: '2.9rem', md: '5rem' },
              mb: 3,
              lineHeight: 1.02,
              letterSpacing: '-0.03em',
            }}
          >
            Software engineer building with <GradientText>AI.</GradientText>
          </Typography>

          <Typography
            sx={{
              mb: 5,
              fontSize: '1.2rem',
              color: 'text.secondary',
              lineHeight: 1.65,
              maxWidth: 560,
            }}
          >
            Hi, I&apos;m Vy. I&apos;ve spent 4+ years building{' '}
            <b style={{ color: '#f1f5f9' }}>frontend</b> and{' '}
            <b style={{ color: '#f1f5f9' }}>full-stack</b> products in
            TypeScript and React, and now pair with{' '}
            <b style={{ color: '#f1f5f9' }}>AI tools</b> to design, build and
            ship faster.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mb={5}>
            <Button
              size='large'
              onClick={() => scrollTo('featured-projects')}
              endIcon={<ArrowDownRight size={18} />}
              sx={{
                py: 1.6,
                px: 4,
                borderRadius: '14px',
                color: '#05060b',
                background: gradient,
                boxShadow: `0 10px 40px ${accent.blue}55`,
                '&:hover': { boxShadow: `0 14px 50px ${accent.cyan}66` },
              }}
            >
              Explore my work
            </Button>
            <Button
              size='large'
              href='https://github.com/primofin'
              target='_blank'
              startIcon={<Github size={18} />}
              sx={{
                py: 1.6,
                px: 3,
                borderRadius: '14px',
                color: 'text.primary',
                border: '1px solid rgba(255,255,255,0.14)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.06)' },
              }}
            >
              GitHub
            </Button>
          </Stack>

          <Stack direction='row' spacing={1} flexWrap='wrap' useFlexGap>
            {aiTools.map((t) => (
              <Stack
                key={t}
                direction='row'
                alignItems='center'
                spacing={0.5}
                sx={{
                  px: 1.25,
                  py: 0.4,
                  borderRadius: 2,
                  color: accent.violet,
                  bgcolor: `${accent.violet}14`,
                  border: `1px solid ${accent.violet}55`,
                }}
              >
                <Sparkles size={12} />
                <Typography variant='caption' fontWeight={600}>
                  {t}
                </Typography>
              </Stack>
            ))}
            {stack.map((t) => (
              <Typography
                key={t}
                variant='caption'
                sx={{
                  px: 1.25,
                  py: 0.4,
                  borderRadius: 2,
                  color: 'text.secondary',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {t}
              </Typography>
            ))}
          </Stack>
        </Box>

        <Stack
          spacing={2.5}
          component={motion.div}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {cards.map((item, i) => (
            <Box
              key={item.title}
              sx={{
                ml: { md: i * 4 },
                animation: `float ${5 + i}s ease-in-out ${i * 0.4}s infinite`,
              }}
            >
              <GlassCard
                glow={item.color}
                sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}
              >
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: '14px',
                    color: item.color,
                    bgcolor: `${item.color}1f`,
                    display: 'flex',
                  }}
                >
                  {item.icon}
                </Box>
                <Box>
                  <Typography fontWeight={700}>{item.title}</Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {item.desc}
                  </Typography>
                </Box>
              </GlassCard>
            </Box>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}
