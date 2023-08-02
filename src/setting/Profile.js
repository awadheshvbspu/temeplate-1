import React from 'react';
import { Typography, Box, Avatar, Grid, Button, Paper } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
}));    

export default function Profile() {
  return (
    <StyledPaper elevation={3}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Avatar sx={{ width: 150, height: 150 }} src="/path/to/avatar.jpg" alt="Avatar" />
        <Box sx={{ ml: 3 }}>
          <Typography variant="h4" gutterBottom>
            John Doe
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Email: john.doe@example.com
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Location: New York, USA
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Occupation: Software Engineer
          </Typography>
        </Box>
      </Box>
      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu est sed lectus
        hendrerit ullamcorper. Duis vel scelerisque lectus, id scelerisque eros. Nulla ac justo
        nec arcu luctus sagittis.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button variant="contained" color="primary">
          Edit Profile
        </Button>
      </Box>
    </StyledPaper>
  );
}
