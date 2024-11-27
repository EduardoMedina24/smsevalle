// src/pages/InfanciaPage.js
import React from 'react';
import InfanciaChart from '../components/charts/InfanciaChart';

const InfanciaPage = () => {
  const dataInfancia = [
    { meta: 'Meta 1', valorEsperado: 80, valorAlcanzado: 60 },
    { meta: 'Meta 2', valorEsperado: 90, valorAlcanzado: 85 },
    { meta: 'Meta 3', valorEsperado: 70, valorAlcanzado: 50 },
  ];

  return (
    <div>
      <h2>Dashboard de Primera Infancia</h2>
      <InfanciaChart data={dataInfancia} />
    </div>
  );
};

export default InfanciaPage;
