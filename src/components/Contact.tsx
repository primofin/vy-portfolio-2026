import { Box, Typography, Container, Button } from '@mui/material';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <Container maxWidth='lg' sx={{ textAlign: 'center' }}>
      <Typography variant='h3' fontWeight='800' mb={2}>
        Let&apos;s Connect
      </Typography>
      <Typography variant='body1' color='text.secondary' mb={4}>
        Available for system consulting or technical analysis roles.
      </Typography>
      <Button
        variant='contained'
        size='large'
        href='mailto:your.email@example.com'
        startIcon={<Mail />}
        sx={{ borderRadius: 50, px: 6, py: 2 }}
      >
        Send a Message
      </Button>
    </Container>
  );
}
