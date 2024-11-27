import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mr: 2,
            backgroundColor: "white", // Color de fondo
            padding: "10px", // Espaciado alrededor del contenido
            borderRadius: "8px", // Bordes redondeados (opcional)
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Sombra (opcional)
          }}
        >
          <img
            src="/img/bloque28.png" // Ruta correcta para la imagen en public/img/
            alt="Logo"
            style={{
              width: 70, // Ajusta el tamaño del logo
              height: "auto", // Mantén la proporción
            }}
          />
        </Box>

        {/* Nombre o título */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          SMSEVALLE
        </Typography>

        {/* Botones */}
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
