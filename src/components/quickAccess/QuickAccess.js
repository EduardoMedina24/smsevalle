// src/components/quickAccess/QuickAccess.js
import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const QuickAccess = () => {
  const areas = [
    { name: 'Primera Infancia', icon: '👶', link: '/infancia' },
    { name: 'Adolescencia', icon: '🧒' },
    { name: 'Juventudes', icon: '🧑' },
    { name: 'Vejez', icon: '👴' },
  ];

  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>
        Áreas de Monitoreo
      </Typography>
      <Grid container spacing={2}>
        {areas.map((area, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Link to={area.link} style={{ textDecoration: 'none' }}>  {/* Envolvemos el Card con Link */}
              <Card
                sx={{
                  textAlign: 'center',
                  cursor: 'pointer',
                  '&:hover': {
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h3">{area.icon}</Typography>
                  <Typography variant="h6">{area.name}</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default QuickAccess;
