// src/components/dashboard/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
return (
    <div className="dashboard">
    <header className="header">
        <div className="logo">
        <img src="logo.png" alt="Logo" />
        <h1>Sistema de Monitoreo de Políticas Públicas</h1>
        </div>
        <nav>
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/monitor">Monitoreo de Políticas</Link></li>
            <li><Link to="/reports">Informes</Link></li>
            <li><Link to="/participation">Participación Ciudadana</Link></li>
        </ul>
        </nav>
    </header>

      {/* Aquí puedes agregar el contenido del Dashboard */}
    <div className="content">
        <h2>Bienvenido al Dashboard</h2>
        <p>Visualiza los indicadores clave y más detalles sobre las políticas públicas.</p>
    </div>
    </div>
);
};

export default Dashboard;