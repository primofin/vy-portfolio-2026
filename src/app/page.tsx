'use client';
import { Box } from '@mui/material';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';

export default function SPAHome() {
  return (
    <Box component='main'>
      <Navbar />
      <Box
        id='home'
        sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}
      >
        <Hero />
      </Box>

      <Box id='about' sx={{ py: 10, bgcolor: '#fafafa' }}>
        <About />
      </Box>

      <Box id='portfolio' sx={{ py: 10 }}>
        <Portfolio />
      </Box>

      <Box id='contact' sx={{ py: 10, bgcolor: '#fafafa' }}>
        <Contact />
      </Box>
    </Box>
  );
}
