'use client';
import { Box } from '@mui/material';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import MyStory from '@/components/MyStory';
import type { CmsData } from '@/lib/contentful';

export default function Home({ cms }: { cms: CmsData }) {
  return (
    <Box component='main'>
      <div className='ambient' aria-hidden />
      <Navbar />
      <Box id='home'>
        <Hero />
      </Box>

      <Box id='about' sx={{ pt: 12, pb: 6 }}>
        <MyStory />
        <About experience={cms.experience} stacks={cms.stacks} />
      </Box>

      <Box id='featured-projects' sx={{ py: 12 }}>
        <Portfolio cmsProjects={cms.projects} />
      </Box>

      <Box id='contact' sx={{ pt: 8, pb: 6 }}>
        <Contact />
      </Box>
    </Box>
  );
}
