import React from 'react';
import Navbar from './components/Navbar';
import './components/Navbar.css';

const App = () => {
  return (
    <div>
      <Navbar/>
      <header>
        <h1>BIENVENIDOS A SMSEVALLE</h1>
      </header>
      <main>
        <p>Sistema Monitoreo, Seguimiento y Evaluación de las políticas</p>
      </main>
      {/* Agrega otras páginas o componentes aquí */}
    </div>
  );
};

export default App;
