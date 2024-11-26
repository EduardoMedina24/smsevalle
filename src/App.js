import React from 'react';
import { CssBaseline, Typography, Container } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbars/Navbar';
import QuickAccess from './components/quickAccess/QuickAccess';
import InfanciaPage from './pages/InfanciaPage'; // Página para mostrar la InfanciaChart
import ReportGenerator from './components/reports/ReportGenerator';

const App = () => {
  return (
    <Router>
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
          <Routes>
            <Route path="/" element={<QuickAccess />} />
            <Route path="/infancia" element={<InfanciaPage />} /> {/* Corregido */}
          </Routes>
          <ReportGenerator />
        </main>
      </Container>
    </Router>
  );
};

export default App;
