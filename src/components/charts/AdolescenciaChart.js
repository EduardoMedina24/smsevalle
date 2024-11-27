import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdolescenciaChart = () => {
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
    // Realizar la solicitud para obtener los datos de adolescencia desde la API
    fetch('http://localhost:5000/api/juventud')
      .then(response => response.json())
      .then(data => {
        const labels = data.map((_, index) => index + 1); // Solo el número de la meta
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
      })
      .catch(error => console.error('Error al obtener los datos:', error));
  }, []);

  return (
    <div>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Progreso de las Políticas de Adolescencia'
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

export default AdolescenciaChart;
