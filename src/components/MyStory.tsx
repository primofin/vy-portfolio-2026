'use client';
import { Box, Typography, Container, Stack } from '@mui/material';
import { GraduationCap, Layers, Rocket } from 'lucide-react';
import { accent } from '@/theme';
import { GlassCard, GradientText, Reveal, SectionHeading } from '@/components/ui';

const milestones = [
  {
    icon: <GraduationCap size={22} />,
    title: 'Integrify · 2020–2021',
    desc: 'Full Stack Trainee building React, Node.js and Nest.js projects and running the company website with Contentful.',
    color: accent.blue,
  },
  {
    icon: <Layers size={22} />,
    title: 'Topcon · 2021–2026',
    desc: 'Frontend features in React and TypeScript, plus Lit components for a design system shared across teams.',
    color: accent.violet,
  },
  {
    icon: <Rocket size={22} />,
    title: 'Next',
    desc: 'Looking for my next software engineering role.',
    color: accent.cyan,
  },
];

export default function MyStory() {
  return (
    <Container maxWidth='lg' sx={{ pb: 10 }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 5, md: 8 },
          alignItems: 'start',
        }}
      >
        <Reveal>
          <SectionHeading
            eyebrow='About'
            title={
              <>
                My <GradientText>journey</GradientText>
              </>
            }
          />
          <Typography color='text.secondary' sx={{ fontSize: '1.1rem', lineHeight: 1.75 }}>
            Software engineer with over 4 years of experience across
            frontend and full-stack work. B.Eng. in Information Technology from
            Metropolia University of Applied Sciences, AWS Certified Cloud
            Practitioner.
          </Typography>
        </Reveal>

        <Stack spacing={2.5} sx={{ position: 'relative' }}>
          {milestones.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.12}>
              <GlassCard
                glow={m.color}
                sx={{ display: 'flex', gap: 2.5, alignItems: 'center' }}
              >
                <Box
                  sx={{
                    color: m.color,
                    p: 1.4,
                    borderRadius: '12px',
                    bgcolor: `${m.color}1f`,
                    display: 'flex',
                  }}
                >
                  {m.icon}
                </Box>
                <Box>
                  <Typography fontWeight={700}>{m.title}</Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {m.desc}
                  </Typography>
                </Box>
              </GlassCard>
            </Reveal>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}
