'use client';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { ExternalLink, Github } from 'lucide-react';
import { accent } from '@/theme';
import type { CmsProject } from '@/lib/contentful';
import { GlassCard, GradientText, Reveal, SectionHeading } from '@/components/ui';

type Project = {
  name: string;
  desc: string;
  tech: string[];
  live?: string;
  repo?: string;
  img?: string;
  color: string;
};

const fallbackProjects: Project[] = [
  {
    name: 'Trello Clone',
    desc: 'A Trello clone built in a pair as a challenge: UI, extra features and board logic with drag-and-drop.',
    tech: ['TypeScript', 'React', 'GraphQL', 'RestDB', 'styled-components', 'react-beautiful-dnd'],
    live: 'https://trello-clone-side-project.herokuapp.com/',
    repo: 'https://github.com/trello-clone/trello-clone-client',
    img: 'https://i.imgur.com/D8bywz1.gif',
    color: accent.blue,
  },
  {
    name: 'Amour E-commerce',
    desc: 'Full-stack CRUD shop with auth, local storage and Redux state. Front end and back end built solo.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'TypeScript', 'Redux', 'Google OAuth 2.0', 'Passport.js'],
    live: 'https://ecommerce-app-client.herokuapp.com/',
    repo: 'https://github.com/vynmetropolia/ecommerce-app-client',
    img: 'https://i.imgur.com/GgXtf1z.gif',
    color: accent.violet,
  },
  {
    name: 'Cloudhome',
    desc: 'Hybrid mobile app that helps travelers find affordable places to stay. Team project covering UI, validation and performance.',
    tech: ['React Native', 'NativeBase', 'Expo', 'JavaScript'],
    live: 'https://expo.io/@vynmetropolia/projects/cloud-home',
    repo: 'https://github.com/dendimaniac/airbnb-clone',
    img: 'https://i.imgur.com/dBnWMhi.gif',
    color: accent.mint,
  },
];

const palette = [accent.blue, accent.violet, accent.mint, accent.cyan];

export default function ProjectShowcase({ cmsProjects }: { cmsProjects?: CmsProject[] | null }) {
  const projects: Project[] = cmsProjects?.length
    ? cmsProjects.map((p, i) => ({ ...p, color: palette[i % palette.length] }))
    : fallbackProjects;
  return (
    <Container maxWidth='lg' id='portfolio'>
      <Reveal>
        <SectionHeading
          eyebrow='Selected work'
          title={
            <>
              Things I&apos;ve <GradientText>designed &amp; built</GradientText>
            </>
          }
        />
      </Reveal>

      {/* Project grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 3,
        }}
      >
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <GlassCard
              glow={p.color}
              sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 3.5 }}
            >
              {p.img ? (
                <Box
                  sx={{
                    position: 'relative',
                    aspectRatio: '16 / 10',
                    mb: 3,
                    borderRadius: '14px',
                    overflow: 'hidden',
                    border: `1px solid ${p.color}40`,
                    background: `radial-gradient(circle at 50% 0%, ${p.color}26, #0b0d17 70%)`,
                    boxShadow: `0 12px 40px ${p.color}1f`,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={`${p.name} demo`}
                    loading='lazy'
                    onLoad={(e) => {
                      const el = e.currentTarget;
                      // Phone-sized recordings are shown whole, desktop ones fill the frame.
                      el.style.objectFit =
                        el.naturalHeight > el.naturalWidth ? 'contain' : 'cover';
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      display: 'block',
                    }}
                  />
                </Box>
              ) : (
                <Box
                  sx={{
                    width: 44,
                    height: 4,
                    borderRadius: 4,
                    bgcolor: p.color,
                    boxShadow: `0 0 18px ${p.color}`,
                    mb: 3,
                  }}
                />
              )}
              <Typography variant='h5' fontWeight={700} mb={1.5}>
                {p.name}
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                lineHeight={1.7}
                mb={3}
              >
                {p.desc}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 3, flexGrow: 1, alignContent: 'flex-start' }}>
                {p.tech.map((t) => (
                  <Typography
                    key={t}
                    variant='caption'
                    sx={{
                      px: 1,
                      py: 0.3,
                      borderRadius: 1.5,
                      bgcolor: 'rgba(255,255,255,0.05)',
                      color: 'text.secondary',
                    }}
                  >
                    {t}
                  </Typography>
                ))}
              </Box>
              <Stack direction='row' spacing={1}>
                {p.live && (
                  <Button
                    size='small'
                    href={p.live}
                    target='_blank'
                    rel='noopener'
                    startIcon={<ExternalLink size={15} />}
                    sx={{ color: p.color }}
                  >
                    Live
                  </Button>
                )}
                {p.repo && (
                  <Button
                    size='small'
                    href={p.repo}
                    target='_blank'
                    rel='noopener'
                    startIcon={<Github size={15} />}
                    sx={{ color: 'text.secondary' }}
                  >
                    Code
                  </Button>
                )}
              </Stack>
            </GlassCard>
          </Reveal>
        ))}
      </Box>
    </Container>
  );
}
