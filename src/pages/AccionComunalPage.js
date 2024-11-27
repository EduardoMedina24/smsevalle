import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import AccionComunalChart from "../components/charts/AccionComunalchar";
// Asegúrate de tener este componente

const AccionComunalPage = () => {
  const [metas, setMetas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/accion-comunal")
      .then((response) => response.json())
      .then((data) => {
        setMetas(data);
      })
      .catch((error) => console.error("Error al obtener los datos:", error));
  }, []);

  return (
    <div>
      <h1>Acción Comunal</h1>
      <AccionComunalChart />

      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h5" gutterBottom>
          Metas de la Política de Acción Comunal
        </Typography>
        <Grid container spacing={2}>
          {metas.map((meta, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  cursor: "pointer",
                  borderRadius: 2, // Esquinas redondeadas
                  boxShadow: 3, // Sombra inicial
                  transition: "all 0.3s ease",
                  padding: 2,
                  backgroundColor: index % 2 === 0 ? "#FFDDC1" : "#B2EBF2", // Fondo alternado colorido
                  "&:hover": {
                    boxShadow: 6, // Sombra más fuerte al hacer hover
                    transform: "translateY(-5px)", // Elevación de la tarjeta
                    backgroundColor: index % 2 === 0 ? "#FFABAB" : "#80DEEA", // Cambio de color al hacer hover
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    {meta.lineaEstrategica}
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ color: "#5D4037" }}
                  >
                    {meta.meta}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Valor Esperado: <strong>{meta.valorEsperado}</strong>
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Valor Alcanzado: <strong>{meta.valorAlcanzado}</strong>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default AccionComunalPage;
