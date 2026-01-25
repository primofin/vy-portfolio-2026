import { Container, Typography, Box, Chip, Stack } from '@mui/material';

export default function About() {
  const tech = ['Next.js', 'React', 'TypeScript', 'Node.js', 'SQL'];
  const analyst = [
    'BPMN 2.0',
    'User Stories',
    'UML',
    'Gap Analysis',
    'Agile/Scrum',
  ];

  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 10,
        }}
      >
        <Box>
          <Typography variant='h3' fontWeight='900' gutterBottom>
            The Hybrid Advantage
          </Typography>
          <Typography
            variant='body1'
            color='text.secondary'
            sx={{ mb: 3, fontSize: '1.1rem' }}
          >
            My background as a developer allows me to communicate effectively
            with engineering teams while my focus on analysis ensures business
            stakeholders get the value they need.
          </Typography>
        </Box>
        <Box>
          <Typography variant='subtitle1' fontWeight='bold' mb={2}>
            Technical Stack
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
            {tech.map((s) => (
              <Chip key={s} label={s} color='primary' variant='outlined' />
            ))}
          </Box>
          <Typography variant='subtitle1' fontWeight='bold' mb={2}>
            Analyst Toolkit
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {analyst.map((s) => (
              <Chip key={s} label={s} sx={{ bgcolor: '#e3f2fd' }} />
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
