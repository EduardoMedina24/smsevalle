import React from 'react';
import Navbar from './components/Navbars/Navbar';
import './components/Navbars/Navbar.css';

import QuickAccess from './components/quickAccess/QuickAccess';
import IndicatorsChart from './components/charts/IndicatorsChart';
import ReportGenerator from './components/reports/ReportGenerator';

const App = () => {
  return (
    <div>
    <Navbar />
      <header>
        <h1>BIENVENIDOS A SMSEVALLE</h1>
      </header>
      <main>
        <p>Sistema Monitoreo, Seguimiento y Evaluación de las políticas</p>
        <QuickAccess />
        
        <IndicatorsChart />
        <ReportGenerator />
      </main>
      
    </div>
  );
};

export default App;
