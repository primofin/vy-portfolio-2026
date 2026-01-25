import { Container, Typography, Box, Card, Chip, Stack } from '@mui/material';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';

export default function Portfolio() {
  return (
    <Container maxWidth='lg'>
      <Typography variant='h3' fontWeight='900' textAlign='center' mb={8}>
        Case Studies
      </Typography>

      <Card
        sx={{
          p: { xs: 3, md: 6 },
          borderRadius: 6,
          boxShadow: '0 20px 60px rgba(0,0,0,0.05)',
          border: '1px solid #f0f0f0',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '6fr 6fr' },
            gap: 6,
          }}
        >
          <Box>
            <Chip
              label='FINTECH SOLUTION'
              color='primary'
              sx={{ mb: 2, fontWeight: 'bold' }}
            />
            <Typography variant='h4' fontWeight='800' mb={3}>
              Loan Approval Automation
            </Typography>
            <Stack spacing={4}>
              <Box display='flex' gap={2}>
                <Target color='#ff4d4f' />
                <Box>
                  <Typography fontWeight='bold'>
                    The Business Problem
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Manual underwriting took 45+ mins, causing a 20% lead
                    abandonment rate.
                  </Typography>
                </Box>
              </Box>
              <Box display='flex' gap={2}>
                <Lightbulb color='#1a3a5f' />
                <Box>
                  <Typography fontWeight='bold'>
                    The Engineering Solution
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Architected a Credit Scoring Engine with automated API
                    integrations for instant verification.
                  </Typography>
                </Box>
              </Box>
              <Box display='flex' gap={2}>
                <TrendingUp color='#52c41a' />
                <Box>
                  <Typography fontWeight='bold'>Key Impact</Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Reduced processing time by 73%. Increased monthly
                    disbursement volume by 18%.
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>
          <Box
            sx={{
              bgcolor: '#f4f7f9',
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 4,
            }}
          >
            <Typography color='text.secondary' fontStyle='italic'>
              [Insert Logic Flow or Data Visualization Chart Here]
            </Typography>
          </Box>
        </Box>
      </Card>
    </Container>
  );
}
