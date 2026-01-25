'use client';
import { Box, Typography, Container, Paper } from '@mui/material';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { subject: 'System Design', A: 90, fullMark: 100 },
  { subject: 'Development', A: 95, fullMark: 100 },
  { subject: 'Data Analysis', A: 80, fullMark: 100 },
  { subject: 'Agile/Scrum', A: 85, fullMark: 100 },
  { subject: 'Requirement Elicitation', A: 75, fullMark: 100 },
  { subject: 'UI/UX Logic', A: 70, fullMark: 100 },
];

export default function SkillsMatrix() {
  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 6,
          alignItems: 'center',
          py: 5,
        }}
      >
        <Box>
          <Typography variant='h4' fontWeight='900' gutterBottom>
            The T-Shaped Skillset
          </Typography>
          <Typography variant='body1' color='text.secondary' paragraph>
            My background as a developer provides the **Technical Depth**
            required to build systems, while my analysis toolkit provides the
            **Business Breadth** required to ensure those systems solve the
            right problems.
          </Typography>
          <Typography variant='body2' color='primary' fontWeight='bold'>
            Key Competencies:
          </Typography>
          <ul style={{ paddingLeft: '20px', color: '#666' }}>
            <li>Full SDLC Ownership (Discovery to Deployment)</li>
            <li>Translating Stakeholder needs into Technical Specs</li>
            <li>Database Schema & API Design</li>
          </ul>
        </Box>

        <Paper elevation={0} sx={{ p: 2, bgcolor: 'transparent', height: 400 }}>
          <ResponsiveContainer width='100%' height='100%'>
            <RadarChart cx='50%' cy='50%' outerRadius='80%' data={data}>
              <PolarGrid stroke='#e0e0e0' />
              <PolarAngleAxis
                dataKey='subject'
                tick={{ fontSize: 12, fill: '#666' }}
              />
              <Radar
                name='Proficiency'
                dataKey='A'
                stroke='#007bff'
                fill='#007bff'
                fillOpacity={0.5}
              />
            </RadarChart>
          </ResponsiveContainer>
        </Paper>
      </Box>
    </Container>
  );
}
