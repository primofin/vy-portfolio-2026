'use client';
import {
  Container,
  Typography,
  Grid,
  Card,
  Chip,
  Box,
  Stack,
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  Tooltip,
} from 'recharts';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';

const data = [
  { name: 'Trước tối ưu', value: 45, color: '#ff4d4f' },
  { name: 'Sau tối ưu', value: 12, color: '#52c41a' },
];

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <Container maxWidth='lg' sx={{ py: 8 }}>
        <Typography variant='h3' fontWeight='900' textAlign='center' mb={6}>
          Dự án Tiêu biểu
        </Typography>

        <Card
          sx={{
            borderRadius: 6,
            boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
            border: 'none',
          }}
        >
          <Grid container>
            <Grid size={{ xs: 12, md: 7 }} sx={{ p: { xs: 3, md: 6 } }}>
              <Chip label='FINTECH' color='primary' sx={{ mb: 2 }} />
              <Typography variant='h4' fontWeight='800' mb={4}>
                Số hóa quy trình duyệt vay
              </Typography>

              <Stack spacing={4}>
                <Box display='flex' gap={2}>
                  <Target color='#ff4d4f' />
                  <Box>
                    <Typography fontWeight='bold'>Bài toán</Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Quy trình thủ công gây trễ 45 phút/hồ sơ, tỷ lệ khách hàng
                      rời bỏ cao.
                    </Typography>
                  </Box>
                </Box>
                <Box display='flex' gap={2}>
                  <Lightbulb color='#1a3a5f' />
                  <Box>
                    <Typography fontWeight='bold'>Giải pháp</Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Thiết kế hệ thống tự động chấm điểm tín dụng (Credit
                      Scoring engine).
                    </Typography>
                  </Box>
                </Box>
                <Box display='flex' gap={2}>
                  <TrendingUp color='#52c41a' />
                  <Box>
                    <Typography fontWeight='bold' color='success.main'>
                      Kết quả
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Giảm thời gian duyệt xuống còn 12 phút. Tăng 18% doanh thu
                      tháng.
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Grid>
            <Grid
              size={{ xs: 12, md: 5 }} // Chuyển xs và md vào object size
              sx={{
                bgcolor: '#fafafa',
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography variant='subtitle2' textAlign='center' mb={2}>
                Hiệu quả thời gian (Phút)
              </Typography>
              <Box height={250}>
                <ResponsiveContainer width='100%' height='100%'>
                  <BarChart data={data}>
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey='value' barSize={50} radius={[8, 8, 0, 0]}>
                      {data.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
}
