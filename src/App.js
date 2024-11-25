import React from 'react';
import { CssBaseline, Typography, Container } from '@mui/material';
import Navbar from './components/Navbars/Navbar';
import QuickAccess from './components/quickAccess/QuickAccess';
import IndicatorsChart from './components/charts/IndicatorsChart';
import ReportGenerator from './components/reports/ReportGenerator';

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Container>
        <header style={{ textAlign: 'center', margin: '20px 0' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            BIENVENIDOS A SMSEVALLE
          </Typography>
          <Typography variant="subtitle1">
            Sistema Monitoreo, Seguimiento y Evaluación de las políticas
          </Typography>
        </header>
        <main>
          <QuickAccess />
          <IndicatorsChart />
          <ReportGenerator />
        </main>
      </Container>
    </div>
  );
};

export default App;
