import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AccionComunalChart = () => {
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
    // Realizar la solicitud para obtener los datos desde la API de Acción Comunal
    fetch('http://localhost:5000/api/accion-comunal') // Ajusta esta URL según tu API
      .then(response => response.json())
      .then(data => {
        // Asumimos que los datos de la API siguen una estructura similar
        const labels = data.map((_, index) => index + 1); // Números de las metas
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
              text: 'Progreso de las Políticas de Acción Comunal'
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

export default AccionComunalChart;
