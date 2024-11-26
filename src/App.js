import React from 'react';
import { CssBaseline, Typography, Container } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbars/Navbar';
import QuickAccess from './components/quickAccess/QuickAccess';
import InfanciaPage from './pages/InfanciaPage';
import AccionComunalPage from './pages/AccionComunalPage';
import VejezPage from './pages/VejezPage';

import AdolescenciaPage from './pages/AdolescenciaPage'; // Nueva página
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
            <Route path="/infancia" element={<InfanciaPage />} />
            <Route path="/adolescencia" element={< AdolescenciaPage/>} />
            <Route path="/vejez" element={< VejezPage/>} />
            <Route path="/accioncomunal" element={<AccionComunalPage />} /> 
          </Routes>
         
        </main>
      </Container>
    </Router>
  );
};

export default App;
