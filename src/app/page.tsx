'use client';
import {
  Container,
  Typography,
  Box,
  Button,
  Stack,
  Grid,
  Paper,
} from '@mui/material';
import { ChevronRight, Database, Users, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Box sx={{ bgcolor: 'white', pt: { xs: 8, md: 15 }, pb: 10 }}>
        <Container maxWidth='lg'>
          <Grid container spacing={6} alignItems='center'>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant='overline' color='primary' fontWeight='bold'>
                Professional Business Analyst
              </Typography>
              <Typography
                variant='h1'
                fontWeight='900'
                sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, mb: 3 }}
              >
                Kết nối <span style={{ color: '#007bff' }}>Dữ liệu</span> với
                Giải pháp thực tế.
              </Typography>
              <Typography
                variant='body1'
                color='text.secondary'
                sx={{ mb: 4, fontSize: '1.1rem' }}
              >
                Tôi giúp doanh nghiệp tối ưu hóa quy trình thông qua phân tích
                nghiệp vụ chuyên sâu và tư duy hệ thống hiện đại.
              </Typography>
              <Stack direction='row' spacing={2}>
                <Button
                  component={Link}
                  href='/portfolio'
                  variant='contained'
                  endIcon={<ChevronRight />}
                  sx={{ px: 4, py: 1.5, borderRadius: 2 }}
                >
                  Xem Case Studies
                </Button>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack spacing={2}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    border: '1px solid #eee',
                    borderRadius: 4,
                    display: 'flex',
                    gap: 2,
                  }}
                >
                  <LayoutDashboard color='#1a3a5f' />
                  <Box>
                    <Typography fontWeight='bold'>BPMN & UML</Typography>
                    <Typography variant='body2'>
                      Thiết kế luồng nghiệp vụ
                    </Typography>
                  </Box>
                </Paper>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    border: '1px solid #eee',
                    borderRadius: 4,
                    ml: { md: 4 },
                    display: 'flex',
                    gap: 2,
                  }}
                >
                  <Database color='#1a3a5f' />
                  <Box>
                    <Typography fontWeight='bold'>SQL Analysis</Typography>
                    <Typography variant='body2'>
                      Trích xuất & Xử lý dữ liệu
                    </Typography>
                  </Box>
                </Paper>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
