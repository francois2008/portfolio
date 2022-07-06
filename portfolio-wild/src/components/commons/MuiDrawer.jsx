import { Drawer, Box, Typography, IconButton } from '@mui/material';
import { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Header from './Header';

function MuiDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <IconButton
        size='large'
        edge='start'
        color='inherit'
        aria-label='logo'
        onClick={() => setIsDrawerOpen(true)}
      >
        <ArrowForwardIosIcon
          sx={{
            color: 'white',

            fontSize: 60,
          }}
        />
      </IconButton>
      <Drawer
        anchor='left'
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          sx={{ maxHeight: 300 }}
          p={2}
          width='350'
          textAlign='center'
          role='presentation'
        >
          <Typography variant='h6' component='div'>
            <Header />
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}

export default MuiDrawer;
