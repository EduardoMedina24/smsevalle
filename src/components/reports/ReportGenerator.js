import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import './ReportGenerator.css';

const ReportGenerator = () => {
  const [reportData, setReportData] = useState([
    { id: 1, policy: 'Política de Infancia', indicator: '80%', impact: 'Alta' },
    { id: 2, policy: 'Política de Juventud', indicator: '60%', impact: 'Media' },
    { id: 3, policy: 'Política de Vejez', indicator: '90%', impact: 'Muy Alta' },
  ]);

  const handleGenerateReport = () => {
    const input = document.getElementById('report-content');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 10, 10, 190, 160);
      pdf.save('reporte.pdf');
    });
  };

  return (
    <div className="report-generator">
      <h2>Generación de Informes</h2>
      <div id="report-content" className="report-content">
        <h3>Datos del Informe</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Política</th>
              <th>Indicador</th>
              <th>Impacto</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.policy}</td>
                <td>{data.indicator}</td>
                <td>{data.impact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={handleGenerateReport} className="generate-button">
        Generar Informe PDF
      </button>
    </div>
  );
};

export default ReportGenerator;
