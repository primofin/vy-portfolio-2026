'use client';
import { Container, Typography, Box, Stack } from '@mui/material';
import { accent } from '@/theme';
import type { CmsExperience, CmsStack } from '@/lib/contentful';
import { GlassCard, GradientText, Reveal } from '@/components/ui';

const palette = [accent.blue, accent.violet, accent.mint, accent.cyan];

const fallbackStacks: CmsStack[] = [
  { title: 'Frontend', items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Redux', 'Lit', 'Material-UI', 'Tailwind', 'SCSS', 'HTML5', 'CSS', 'Accessibility', 'Jest'] },
  { title: 'Backend', items: ['Node.js', 'Nest.js', 'Express.js', 'GraphQL', 'REST API', 'PostgreSQL', 'MongoDB', 'MySQL', 'MariaDB'] },
  { title: 'DevOps & AI tools', items: ['Docker', 'AWS', 'GitHub Actions', 'Netlify', 'Claude Code', 'GitHub Copilot'] },
];

const analystGroup = {
    title: 'Business & product',
    color: accent.violet,
    items: ['Agile/Scrum', 'Requirements Elicitation', 'BPMN', 'Jira', 'Confluence', 'Figma', 'Draw.io', 'Visily'],
};

const fallbackExperience: CmsExperience[] = [
  { role: 'Software Engineer', org: 'Topcon', when: 'Nov 2021 – Sep 2026' },
  { role: 'Full Stack Trainee', org: 'Integrify', when: 'Aug 2020 – Oct 2021' },
];

export default function About({
  experience: cmsExperience,
  stacks,
}: {
  experience?: CmsExperience[] | null;
  stacks?: CmsStack[] | null;
}) {
  const experience = cmsExperience?.length ? cmsExperience : fallbackExperience;
  const groups = [
    ...(stacks?.length ? stacks : fallbackStacks).map((s, i) => ({
      ...s,
      color: palette[i % palette.length],
    })),
    analystGroup,
  ];
  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 3,
        }}
      >
        <Reveal>
          <GlassCard glow={accent.cyan} sx={{ height: '100%', p: 4 }}>
            <Typography variant='h4' mb={2} sx={{ fontSize: '1.8rem' }}>
              Work <GradientText>experience</GradientText>
            </Typography>
            <Typography color='text.secondary' mb={4} lineHeight={1.75}>
              Shipping frontend and full-stack features in cross-functional
              teams, from requirements to production.
            </Typography>
            <Stack spacing={2.5}>
              {experience.map((e) => (
                <Box
                  key={e.org}
                  sx={{ pl: 2, borderLeft: `2px solid ${accent.cyan}66` }}
                >
                  <Typography fontWeight={700}>{e.role}</Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {e.org} · {e.when}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </GlassCard>
        </Reveal>

        <Stack spacing={3}>
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={0.1 * (i + 1)}>
              <GlassCard glow={g.color} sx={{ p: 4 }}>
                <Typography fontWeight={700} mb={2}>
                  {g.title}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {g.items.map((s) => (
                    <Typography
                      key={s}
                      variant='body2'
                      sx={{
                        px: 1.5,
                        py: 0.6,
                        borderRadius: 99,
                        color: g.color,
                        bgcolor: `${g.color}14`,
                        border: `1px solid ${g.color}40`,
                        fontWeight: 600,
                      }}
                    >
                      {s}
                    </Typography>
                  ))}
                </Box>
              </GlassCard>
            </Reveal>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}
