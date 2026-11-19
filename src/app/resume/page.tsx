'use client';

import React from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import {
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import { accent, gradient } from '@/theme';
import { GlassCard, GradientText, Reveal } from '@/components/ui';

const CV_FILE = '/NguyenThanhVy_CV.pdf';

const contacts = [
  { icon: <MapPin size={16} />, label: 'Ho Chi Minh, Vietnam' },
  {
    icon: <Mail size={16} />,
    label: 'vy.primofin@gmail.com',
    href: 'mailto:vy.primofin@gmail.com',
  },
  {
    icon: <MessageCircle size={16} />,
    label: 'Zalo 0934 877 906',
    href: 'https://zalo.me/0934877906',
  },
  {
    icon: <Github size={16} />,
    label: 'GitHub',
    href: 'https://github.com/primofin',
  },
  {
    icon: <Linkedin size={16} />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vynguyenfin/',
  },
];

const experience = [
  {
    company: 'Topcon',
    role: 'Software Engineer',
    place: 'Espoo, Finland',
    when: 'Nov 2021 – Sep 2026',
    color: accent.blue,
    points: [
      'Worked in a team of around 10 designers, senior developers and developers to deliver frontend applications for multiple user roles.',
      'Built frontend features in TypeScript and React, and shared UI components with Lit web components for a design system used across teams.',
      'Implemented interactive map views with OpenLayers and real-time data streaming with Socket.IO.',
      'Handled authentication and authorization flows, form validation and input sanitization, and i18n localization.',
      'Implemented Figma designs as responsive components with consistent visuals across platforms.',
      'Gathered and clarified business and technical requirements with stakeholders.',
    ],
  },
  {
    company: 'Integrify',
    role: 'Full Stack Trainee',
    place: 'Helsinki, Finland',
    when: 'Aug 2020 – Oct 2021',
    color: accent.violet,
    points: [
      'Front-end development with JavaScript, TypeScript, React.js and Redux.',
      'Back-end development with Node.js, Nest.js and Express.js, with MongoDB and PostgreSQL databases.',
      'Sole developer of the company website in React, integrated with Contentful for no-code content updates.',
      'Implemented image optimization and integrated Google Analytics for the marketing team.',
    ],
  },
];

const skills = [
  {
    title: 'Frontend',
    color: accent.blue,
    items: ['TypeScript', 'React', 'Next.js', 'Redux', 'Lit', 'Material-UI', 'Tailwind', 'SCSS', 'Jest'],
  },
  {
    title: 'Backend',
    color: accent.cyan,
    items: ['Node.js', 'Nest.js', 'Express.js', 'GraphQL', 'REST', 'PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    title: 'DevOps & cloud',
    color: accent.mint,
    items: ['AWS', 'Docker', 'GitHub Actions', 'Netlify'],
  },
  {
    title: 'Product & tools',
    color: accent.violet,
    items: ['Agile/Scrum', 'Jira', 'Confluence', 'Figma', 'BPMN', 'Claude Code', 'GitHub Copilot'],
  },
];

const projects = [
  {
    name: 'Amour E-Commerce',
    stack: 'MERN, TypeScript, Redux, Google OAuth 2.0, Passport.js',
  },
  {
    name: 'Trello Clone',
    stack: 'TypeScript, React, GraphQL, styled-components',
  },
];

const label = {
  color: 'secondary.main',
  fontFamily: 'var(--font-display)',
  letterSpacing: 3,
  fontSize: 12,
  fontWeight: 700,
  textTransform: 'uppercase',
  mb: 2,
} as const;

const noLift = { '&:hover': { transform: 'none' } } as const;

function Chip({ text, color }: { text: string; color: string }) {
  return (
    <Typography
      variant='caption'
      sx={{
        px: 1.25,
        py: 0.4,
        borderRadius: 99,
        fontWeight: 600,
        color,
        bgcolor: `${color}14`,
        border: `1px solid ${color}40`,
      }}
    >
      {text}
    </Typography>
  );
}

export default function ResumePage() {
  const handleDownload = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cv_download', { file: 'NguyenThanhVy_CV' });
    }
    const link = document.createElement('a');
    link.href = CV_FILE;
    link.download = 'NguyenThanhVy_CV.pdf';
    link.click();
  };

  return (
    <>
      <div className='ambient' aria-hidden />
      <Navbar />
      <Container maxWidth='lg' sx={{ pt: { xs: 12, md: 16 }, pb: 10 }}>
        {/* Header */}
        <Reveal>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent='space-between'
            alignItems={{ xs: 'flex-start', md: 'flex-end' }}
            spacing={3}
            sx={{ mb: 6 }}
          >
            <Box>
              <Typography sx={label}>/ Resume</Typography>
              <Typography
                variant='h1'
                sx={{ fontSize: { xs: '2.8rem', md: '4.5rem' }, lineHeight: 1.05 }}
              >
                Nguyen Thanh <GradientText>Vy</GradientText>
              </Typography>
              <Typography
                sx={{ mt: 1.5, fontSize: '1.3rem', color: 'text.secondary' }}
              >
                Software Engineer · 4+ years in frontend &amp; full-stack
              </Typography>
            </Box>
            <Button
              size='large'
              onClick={handleDownload}
              startIcon={<Download size={18} />}
              sx={{
                py: 1.5,
                px: 4,
                borderRadius: '14px',
                color: '#05060b',
                background: gradient,
                boxShadow: `0 10px 40px ${accent.blue}55`,
                '&:hover': { boxShadow: `0 14px 50px ${accent.cyan}66` },
              }}
            >
              Download PDF
            </Button>
          </Stack>

          <Stack direction='row' flexWrap='wrap' useFlexGap spacing={1.5} sx={{ mb: 8 }}>
            {contacts.map((c) => (
              <Stack
                key={c.label}
                component={c.href ? 'a' : 'div'}
                {...(c.href
                  ? { href: c.href, target: c.href.startsWith('http') ? '_blank' : undefined, rel: 'noopener' }
                  : {})}
                direction='row'
                alignItems='center'
                spacing={1}
                sx={{
                  px: 2,
                  py: 0.9,
                  borderRadius: 99,
                  fontSize: 14,
                  color: 'text.secondary',
                  textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.1)',
                  bgcolor: 'rgba(255,255,255,0.04)',
                  transition: 'all .25s',
                  ...(c.href && {
                    '&:hover': { color: 'text.primary', borderColor: accent.cyan },
                  }),
                }}
              >
                {c.icon}
                <span>{c.label}</span>
              </Stack>
            ))}
          </Stack>
        </Reveal>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '7fr 5fr' },
            gap: 3,
            alignItems: 'start',
          }}
        >
          {/* Experience timeline */}
          <Stack spacing={3}>
            <Typography sx={{ ...label, mb: 0 }}>Work experience</Typography>
            {experience.map((e, i) => (
              <Reveal key={e.company} delay={i * 0.1}>
                <GlassCard glow={e.color} sx={{ p: { xs: 3, md: 4 }, ...noLift }}>
                  <Stack
                    direction='row'
                    justifyContent='space-between'
                    alignItems='flex-start'
                    flexWrap='wrap'
                    useFlexGap
                    spacing={1}
                    sx={{ mb: 2 }}
                  >
                    <Box>
                      <Typography variant='h5' fontWeight={700}>
                        {e.role}
                      </Typography>
                      <Typography sx={{ color: e.color, fontWeight: 600 }}>
                        {e.company} · {e.place}
                      </Typography>
                    </Box>
                    <Chip text={e.when} color={e.color} />
                  </Stack>
                  <Box
                    component='ul'
                    sx={{
                      m: 0,
                      pl: 2.5,
                      color: 'text.secondary',
                      lineHeight: 1.7,
                      '& li': { mb: 1 },
                      '& li::marker': { color: e.color },
                    }}
                  >
                    {e.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </Box>
                </GlassCard>
              </Reveal>
            ))}

            <Typography sx={{ ...label, mb: 0, mt: 2 }}>Projects</Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: 3,
              }}
            >
              {projects.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.1}>
                  <GlassCard glow={accent.mint} sx={{ height: '100%', ...noLift }}>
                    <Typography fontWeight={700} mb={0.5}>
                      {p.name}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {p.stack}
                    </Typography>
                  </GlassCard>
                </Reveal>
              ))}
            </Box>
          </Stack>

          {/* Sidebar */}
          <Stack spacing={3}>
            <Typography sx={{ ...label, mb: 0 }}>Skills</Typography>
            {skills.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.08}>
                <GlassCard glow={g.color} sx={noLift}>
                  <Typography fontWeight={700} mb={1.5}>
                    {g.title}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {g.items.map((s) => (
                      <Chip key={s} text={s} color={g.color} />
                    ))}
                  </Box>
                </GlassCard>
              </Reveal>
            ))}

            <Reveal>
              <GlassCard glow={accent.cyan} sx={noLift}>
                <Typography sx={label}>Education &amp; certs</Typography>
                <Typography fontWeight={700}>
                  Metropolia University of Applied Sciences
                </Typography>
                <Typography variant='body2' color='text.secondary' mb={2}>
                  B.Eng. Information Technology · 2018 – 2022
                </Typography>
                <Typography fontWeight={700}>
                  AWS Certified Cloud Practitioner
                </Typography>
                <Typography variant='body2' color='text.secondary' mb={2}>
                  2021 – 2024
                </Typography>
                <Typography fontWeight={700}>GMAT 645</Typography>
                <Typography variant='body2' color='text.secondary'>
                  November 2025
                </Typography>
              </GlassCard>
            </Reveal>

            <Reveal>
              <GlassCard glow={accent.violet} sx={noLift}>
                <Typography sx={label}>Languages</Typography>
                <Typography variant='body2' color='text.secondary' lineHeight={1.9}>
                  English – Fluent
                  <br />
                  Finnish – Intermediate
                  <br />
                  Vietnamese – Native
                </Typography>
              </GlassCard>
            </Reveal>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
