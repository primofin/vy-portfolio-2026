'use client';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Stack,
} from '@mui/material';
import Link from 'next/link';

export default function Navbar() {
  return (
    <AppBar
      position='sticky'
      elevation={0}
      sx={{
        bgcolor: 'white',
        borderBottom: '1px solid #eee',
        color: '#1a3a5f',
      }}
    >
      <Container maxWidth='lg'>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant='h6' fontWeight='900' sx={{ letterSpacing: 1 }}>
            BA.PORTFOLIO
          </Typography>
          <Stack direction='row' spacing={1}>
            <Button component={Link} href='/' color='inherit'>
              Home
            </Button>
            <Button component={Link} href='/portfolio' color='inherit'>
              Case Studies
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
