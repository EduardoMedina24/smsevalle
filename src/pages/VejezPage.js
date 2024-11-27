import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import VejezChart from "../components/charts/VejezChart.js";

const VejezPage = () => {
  const [metas, setMetas] = useState([]);

  useEffect(() => {
    // Obtener las metas de vejez desde la API o datos estáticos
    fetch("http://localhost:5000/api/envejecimiento") // Asume que este es el endpoint correcto para vejez
      .then((response) => response.json())
      .then((data) => {
        setMetas(data); // Asumimos que 'data' contiene las metas de vejez
      })
      .catch((error) => console.error("Error al obtener los datos:", error));
  }, []);

  return (
    <div>
      <h1>Políticas de Vejez</h1>
      <VejezChart />

      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h5" gutterBottom>
          Metas de la Política de Vejez
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

export default VejezPage;
