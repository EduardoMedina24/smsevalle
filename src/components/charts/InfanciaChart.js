// src/components/charts/InfanciaChart.js
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const InfanciaChart = ({ data }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Valor Esperado',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Valor Alcanzado',
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      }
    ]
  });

  useEffect(() => {
    if (data.length > 0) {
      const labels = data.map(item => item.meta);
      const valorEsperado = data.map(item => item.valorEsperado);
      const valorAlcanzado = data.map(item => item.valorAlcanzado);

      setChartData({
        labels,
        datasets: [
          {
            label: 'Valor Esperado',
            data: valorEsperado,
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
          {
            label: 'Valor Alcanzado',
            data: valorAlcanzado,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          }
        ]
      });
    }
  }, [data]);

  return (
    <div>
     
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Progreso de las Políticas de Primera Infancia'
            },
            legend: {
              position: 'top',
            },
          },
        }}
      />
    </div>
  );
};

export default InfanciaChart;
