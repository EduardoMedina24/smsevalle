import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';

const QuickAccess = () => {
  const areas = [
    { name: 'Primera Infancia', icon: '👶' },
    { name: 'Adolescencia', icon: '🧒' },
    { name: 'Juventudes', icon: '🧑' },
    { name: 'Vejez', icon: '👴' },
  ];

  const handleAccess = (areaName) => {
    alert(`Accediendo a la sección: ${areaName}`);
  };

  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>
        Áreas de Monitoreo
      </Typography>
      <Grid container spacing={2}>
        {areas.map((area, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                textAlign: 'center',
                cursor: 'pointer',
                '&:hover': {
                  boxShadow: 6,
                },
              }}
              onClick={() => handleAccess(area.name)}
            >
              <CardContent>
                <Typography variant="h3">{area.icon}</Typography>
                <Typography variant="h6">{area.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default QuickAccess;
