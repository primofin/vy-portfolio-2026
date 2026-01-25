'use client';
import {
  Container,
  Typography,
  Box,
  Button,
  Stack,
  Paper,
} from '@mui/material';
import { ChevronRight, Cpu, Code2, Database } from 'lucide-react';

export default function Hero() {
  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '7fr 5fr' },
          gap: 8,
          alignItems: 'center',
      }}
      >
        <Box>
          <Typography
            variant='overline'
            color='primary'
            fontWeight='bold'
            sx={{ letterSpacing: 1.5 }}
          >
            IT Systems & Solutions Specialist
          </Typography>
          <Typography
            variant='h1'
            fontWeight='900'
            sx={{
              fontSize: { xs: '2.5rem', md: '4.2rem' },
              mb: 3,
              lineHeight: 1.1,
            }}
          >
            Solving Business{' '}
            <span style={{ color: '#007bff' }}>Complexity</span> through
            Engineering.
          </Typography>
          <Typography
            variant='body1'
            color='text.secondary'
            sx={{ mb: 4, fontSize: '1.2rem', maxWidth: '540px' }}
          >
            A developer-turned-analyst specializing in bridging high-level
            requirements with scalable technical architecture.
          </Typography>
          <Button
            variant='contained'
            size='large'
            sx={{ py: 2, px: 4, borderRadius: 2, fontWeight: 'bold' }}
            endIcon={<ChevronRight />}
          >
            View Case Studies
          </Button>
        </Box>

        <Stack spacing={2}>
          {[
            {
              icon: <Cpu color='#007bff' />,
              title: 'System Design',
              desc: 'Architecture & Logic',
            },
            {
              icon: <Code2 color='#007bff' />,
              title: 'Solution Delivery',
              desc: 'Full-stack Implementation',
            },
            {
              icon: <Database color='#007bff' />,
              title: 'Data Analysis',
              desc: 'SQL & Process Modeling',
            },
          ].map((item, i) => (
            <Paper
              key={i}
              elevation={0}
              sx={{
                p: 3,
                border: '1px solid #eee',
                borderRadius: 4,
                display: 'flex',
                gap: 2,
                ml: i === 1 ? { md: 6 } : 0,
              }}
            >
              {item.icon}
              <Box>
                <Typography fontWeight='bold'>{item.title}</Typography>
                <Typography variant='body2' color='text.secondary'>
                  {item.desc}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}
