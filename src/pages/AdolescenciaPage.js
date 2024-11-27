import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import AdolescenciaChart from "../components/charts/AdolescenciaChart";

const AdolescenciaPage = () => {
  const [metas, setMetas] = useState([]);

  useEffect(() => {
    // Obtener las metas desde la API o datos estáticos
    fetch("http://localhost:5000/api/juventud")
      .then((response) => response.json())
      .then((data) => {
        setMetas(data); // Asumimos que 'data' contiene las metas
      })
      .catch((error) => console.error("Error al obtener los datos:", error));
  }, []);

  return (
    <div>
      <h2>Progreso de las Políticas de Juventudes</h2>
      <AdolescenciaChart />

      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h5" gutterBottom>
          Metas de la Política de Adolescencia
        </Typography>
        <Grid container spacing={2}>
          {metas.map((meta, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  cursor: "pointer",
                  "&:hover": { boxShadow: 6 },
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {meta.lineaEstrategica} {/* Mostrar la línea estratégica */}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {meta.meta} {/* Descripción de la meta */}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Valor Esperado: {meta.valorEsperado}{" "}
                    {/* Muestra el valor esperado */}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Valor Alcanzado: {meta.valorAlcanzado}{" "}
                    {/* Muestra el valor alcanzado */}
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

export default AdolescenciaPage;
