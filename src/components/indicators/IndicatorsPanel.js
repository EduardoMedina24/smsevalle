// src/components/indicators/IndicatorsPanel.js
import React from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import './IndicatorsPanel.css';

const data = [
    { name: 'Enero', ejecución: 70, impacto: 80, cobertura: 90 },
    { name: 'Febrero', ejecución: 85, impacto: 75, cobertura: 88 },
    { name: 'Marzo', ejecución: 80, impacto: 85, cobertura: 92 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const IndicatorsPanel = () => {
    return (
        <div className="indicators-panel">
            <h2>Indicadores Clave</h2>

            {/* Gráfico de Barras */}
            <div className="chart-container">
                <h3>Porcentaje de Ejecución</h3>
                <BarChart width={600} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="ejecución" fill="#0088FE" />
                </BarChart>
            </div>

            {/* Gráfico de Líneas */}
            <div className="chart-container">
                <h3>Evolución del Impacto</h3>
                <LineChart width={600} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="impacto" stroke="#00C49F" />
                </LineChart>
            </div>

            {/* Gráfico de Tortas */}
            <div className="chart-container">
                <h3>Cobertura</h3>
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        dataKey="cobertura"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#FFBB28"
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default IndicatorsPanel;
