import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          SMSEVALLE
        </Typography>
        <Box>
          <Button color="inherit">Inicio</Button>
          <Button color="inherit">Políticas</Button>
          <Button color="inherit">Indicadores</Button>
          <Button color="inherit">Informes</Button>
          <Button color="inherit">Participación</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
