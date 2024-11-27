import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import InfanciaChart from "../components/charts/InfanciaChart.js";

const InfanciaPage = () => {
  const [metas, setMetas] = useState([]);

  useEffect(() => {
    // Obtener las metas de infancia desde la API o datos estáticos
    fetch("http://localhost:5000/api/infancia") // Asume que este es el endpoint correcto para infancia
      .then((response) => response.json())
      .then((data) => {
        setMetas(data); // Asumimos que 'data' contiene las metas de infancia
      })
      .catch((error) => console.error("Error al obtener los datos:", error));
  }, []);

  return (
    <div>
      <h2>Progreso de las Políticas de Infancia</h2>
      <InfanciaChart />

      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h5" gutterBottom>
          Metas de la Política de Infancia
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
                    {meta.lineaEstrategica} {/* Línea estratégica */}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {meta.meta} {/* Descripción de la meta */}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Valor Esperado: {meta.valorEsperado} {/* Valor esperado */}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Valor Alcanzado: {meta.valorAlcanzado}{" "}
                    {/* Valor alcanzado */}
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

export default InfanciaPage;
