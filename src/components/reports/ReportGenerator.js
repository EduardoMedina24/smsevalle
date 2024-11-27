import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
} from '@mui/material';

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
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>
        Generación de Informes
      </Typography>
      <Paper id="report-content" sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h6">Datos del Informe</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Política</TableCell>
                <TableCell>Indicador</TableCell>
                <TableCell>Impacto</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reportData.map((data) => (
                <TableRow key={data.id}>
                  <TableCell>{data.id}</TableCell>
                  <TableCell>{data.policy}</TableCell>
                  <TableCell>{data.indicator}</TableCell>
                  <TableCell>{data.impact}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGenerateReport}
      >
        Generar Informe PDF
      </Button>
    </Box>
  );
};

export default ReportGenerator;
