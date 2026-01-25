'use client';

import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Divider,
  Link,
  Stack,
  Chip,
  Button,
  Grid,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Navbar from '@/components/Navbar';

export default function ProfessionalCVPage() {
  const handleDownload = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cv_download', {
        file: 'VyNguyen_BA_Fresher',
      });
    }
    const link = document.createElement('a');
    link.href = '/VyNguyen_CV_BA-fresher.pdf';
    link.download = 'VyNguyen_BA_Fresher_CV.pdf';
    link.click();
  };

  return (
    <>
      <Navbar />
      <Container maxWidth='lg' sx={{ py: { xs: 8, md: 16 } }}>
        {/* Action Bar */}
        <Box sx={{ mb: 3, display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant='contained'
            startIcon={<DownloadIcon />}
            onClick={handleDownload}
            sx={{
              borderRadius: '8px', // Slightly more modern, professional radius
              textTransform: 'none',
              px: 4,
              bgcolor: '#1a237e',
              '&:hover': { bgcolor: '#0d1440' },
            }}
          >
            Download PDF
          </Button>
        </Box>

        <Paper
          elevation={3}
          sx={{
            borderRadius: 2,
            overflow: 'hidden',
            border: '1px solid #e0e0e0',
          }}
        >
          <Grid container>
            {/* MAIN CONTENT */}
            <Grid size={{ xs: 12, md: 8 }} sx={{ p: { xs: 3, md: 6 } }}>
              <Box mb={5}>
                <Typography
                  variant='h3'
                  sx={{ fontWeight: 800, letterSpacing: -1, color: '#1a237e' }}
                >
                  VY NGUYEN
                </Typography>
                <Typography
                  variant='h5'
                  color='primary'
                  sx={{ fontWeight: 500 }}
                >
                  BUSINESS ANALYST FRESHER
                </Typography>
              </Box>

              <Typography
                variant='h6'
                sx={{ fontWeight: 'bold', mb: 1, letterSpacing: 1 }}
              >
                WORK EXPERIENCE
              </Typography>
              <Divider
                sx={{ mb: 3, bgcolor: '#1a237e', height: 2, width: '60px' }}
              />

              {/* Experience: Topcon */}
              <Box mb={4}>
                <Stack
                  direction='row'
                  justifyContent='space-between'
                  alignItems='flex-start'
                >
                  <Box>
                    <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
                      Topcon
                    </Typography>
                    <Typography
                      variant='body2'
                      sx={{ fontWeight: 600, color: 'text.secondary' }}
                    >
                      Junior Software Engineer
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'right' }}>
                    <Typography variant='body2' color='text.secondary'>
                      Espoo, Finland
                    </Typography>
                    <Typography variant='caption' display='block'>
                      Nov 2021 - Present
                    </Typography>
                  </Box>
                </Stack>
                <Box
                  component='ul'
                  sx={{
                    mt: 1,
                    color: 'text.secondary',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                  }}
                >
                  <li>Architect, develop, and test software solutions.</li>
                  <li>
                    Ensure maintainability, scalability, and efficiency of code.
                  </li>
                  <li>Diagnose and enhance software performance.</li>
                  <li>Create detailed technical documentation and reports.</li>
                </Box>
              </Box>

              {/* Experience: Integrify */}
              <Box mb={4}>
                <Stack direction='row' justifyContent='space-between'>
                  <Box>
                    <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
                      Integrify
                    </Typography>
                    <Typography
                      variant='body2'
                      sx={{ fontWeight: 600, color: 'text.secondary' }}
                    >
                      Full Stack Trainee
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'right' }}>
                    <Typography variant='body2' color='text.secondary'>
                      Helsinki, Finland
                    </Typography>
                    <Typography variant='caption' display='block'>
                      Aug 2020 - Oct 2021
                    </Typography>
                  </Box>
                </Stack>
                <Box
                  component='ul'
                  sx={{
                    mt: 1,
                    color: 'text.secondary',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                  }}
                >
                  <li>Front-end development with React.js and Redux.</li>
                  <li>Back-end development with Node.js and Nest.js.</li>
                  <li>Database management with MongoDB and PostgreSQL.</li>
                </Box>
              </Box>
            </Grid>

            {/* SIDEBAR */}
            <Grid
              size={{ xs: 12, md: 4 }}
              sx={{
                bgcolor: '#f8f9fa',
                p: { xs: 3, md: 6 },
                borderLeft: '1px solid #eee',
              }}
            >
              <Stack spacing={4}>
                <Box>
                  <Typography
                    variant='overline'
                    sx={{ fontWeight: 'bold', color: 'primary.main' }}
                  >
                    Contact
                  </Typography>
                  <Stack spacing={1.5} mt={1}>
                    <Typography
                      variant='body2'
                      sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                    >
                      <LocationOnIcon fontSize='small' /> Helsinki, Finland
                    </Typography>
                    <Link
                      href='#'
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        color: 'inherit',
                        textDecoration: 'none',
                        '&:hover': { color: 'primary.main' },
                      }}
                    >
                      <LinkedInIcon fontSize='small' /> LinkedIn
                    </Link>
                    <Link
                      href='#'
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        color: 'inherit',
                        textDecoration: 'none',
                        '&:hover': { color: 'primary.main' },
                      }}
                    >
                      <GitHubIcon fontSize='small' /> GitHub
                    </Link>
                  </Stack>
                </Box>

                <Box>
                  <Typography
                    variant='overline'
                    sx={{ fontWeight: 'bold', color: 'primary.main' }}
                  >
                    Skills
                  </Typography>
                  <Box
                    sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 1 }}
                  >
                    {[
                      'SDLC',
                      'SQL',
                      'Requirement Elicitation',
                      'TypeScript',
                      'React.js',
                      'AWS',
                    ].map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size='small'
                        variant='outlined'
                        sx={{ borderRadius: 1 }}
                      />
                    ))}
                  </Box>
                </Box>

                <Box>
                  <Typography
                    variant='overline'
                    sx={{ fontWeight: 'bold', color: 'primary.main' }}
                  >
                    Education
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{ fontWeight: 'bold', mt: 1 }}
                  >
                    Metropolia University
                  </Typography>
                  <Typography variant='caption' display='block'>
                    B.Eng. Information Technology
                  </Typography>
                  <Typography variant='caption' color='text.secondary'>
                    2018 - 2022
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    variant='overline'
                    sx={{ fontWeight: 'bold', color: 'primary.main' }}
                  >
                    Languages
                  </Typography>
                  <Typography variant='body2'>English - Fluent</Typography>
                  <Typography variant='body2'>
                    Finnish - Intermediate
                  </Typography>
                  <Typography variant='body2'>Vietnamese - Native</Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
