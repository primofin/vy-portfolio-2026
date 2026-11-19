'use client';
import { Box, Typography, Container, Button, Stack } from '@mui/material';
import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react';
import { accent, gradient } from '@/theme';
import { GradientText, Reveal } from '@/components/ui';

const EMAIL = 'vy.primofin@gmail.com';
const ZALO = 'https://zalo.me/0934877906';

export default function Contact() {
  return (
    <Container maxWidth='md'>
      <Reveal>
        <Box
          sx={{
            textAlign: 'center',
            p: { xs: 4, md: 8 },
            borderRadius: '36px',
            border: '1px solid rgba(255,255,255,0.1)',
            background: `radial-gradient(circle at 50% 0%, ${accent.blue}33, transparent 65%), rgba(255,255,255,0.03)`,
            backdropFilter: 'blur(14px)',
          }}
        >
          <Typography
            variant='h2'
            sx={{ fontSize: { xs: '2.3rem', md: '3.4rem' }, mb: 2 }}
          >
            Let&apos;s <GradientText>connect</GradientText>
          </Typography>
          <Typography color='text.secondary' mb={5} fontSize='1.1rem'>
            Open to software engineering roles.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent='center'
          >
            <Button
              size='large'
              href={`mailto:${EMAIL}`}
              startIcon={<Mail size={18} />}
              sx={{
                px: 5,
                py: 1.6,
                borderRadius: 99,
                color: '#05060b',
                background: gradient,
                boxShadow: `0 10px 40px ${accent.blue}55`,
              }}
            >
              Send a message
            </Button>
            <Button
              size='large'
              href={ZALO}
              target='_blank'
              rel='noopener'
              startIcon={<MessageCircle size={18} />}
              sx={{
                px: 4,
                borderRadius: 99,
                color: 'text.primary',
                border: '1px solid rgba(255,255,255,0.14)',
              }}
            >
              Zalo
            </Button>
            <Button
              size='large'
              href='https://www.linkedin.com/in/vynguyenfin/'
              target='_blank'
              rel='noopener'
              startIcon={<Linkedin size={18} />}
              sx={{
                px: 4,
                borderRadius: 99,
                color: 'text.primary',
                border: '1px solid rgba(255,255,255,0.14)',
              }}
            >
              LinkedIn
            </Button>
            <Button
              size='large'
              href='https://github.com/primofin'
              target='_blank'
              startIcon={<Github size={18} />}
              sx={{
                px: 4,
                borderRadius: 99,
                color: 'text.primary',
                border: '1px solid rgba(255,255,255,0.14)',
              }}
            >
              GitHub
            </Button>
          </Stack>
        </Box>
      </Reveal>
      <Typography
        variant='caption'
        color='text.secondary'
        sx={{ display: 'block', textAlign: 'center', mt: 8 }}
      >
        © {new Date().getFullYear()} Vy Nguyen
      </Typography>
    </Container>
  );
}
