'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Chip,
} from '@mui/material';

const requirements = [
  {
    id: 'REQ-001',
    story:
      'As a user, I want to see my credit score instantly so I know if I qualify for a loan.',
    functional:
      'The system shall integrate with the Credit Bureau API to fetch real-time data.',
    priority: 'Critical',
  },
  {
    id: 'REQ-002',
    story:
      'As a bank admin, I want to set automated approval thresholds to reduce manual work.',
    functional:
      'Admin portal must include a configuration module for risk-score weighting.',
    priority: 'High',
  },
];

export default function RequirementMatrix() {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant='h6' fontWeight='bold' gutterBottom>
        Business Requirements Documentation (Snippet)
      </Typography>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{ border: '1px solid #eee', borderRadius: 2 }}
      >
        <Table size='small'>
          <TableHead sx={{ bgcolor: '#f4f7f9' }}>
            <TableRow>
              <TableCell>
                <b>ID</b>
              </TableCell>
              <TableCell>
                <b>User Story</b>
              </TableCell>
              <TableCell>
                <b>Functional Requirement</b>
              </TableCell>
              <TableCell>
                <b>Priority</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requirements.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell sx={{ maxWidth: 300 }}>{row.story}</TableCell>
                <TableCell sx={{ maxWidth: 300 }}>{row.functional}</TableCell>
                <TableCell>
                  <Chip
                    label={row.priority}
                    size='small'
                    color={row.priority === 'Critical' ? 'error' : 'primary'}
                    variant='outlined'
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
