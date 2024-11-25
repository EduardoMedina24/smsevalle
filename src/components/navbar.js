// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
return (
    <nav className="navbar">
    <div className="navbar-logo">
        <img src="/assets/logo.png" alt="Logo" />
        <span>Policy Monitoring</span>
    </div>
    <ul className="navbar-menu">
        <li><a href="/">Inicio</a></li>
        <li>
        <a href="/policies">Políticas</a>
        <ul className="submenu">
            <li><a href="/policies/infancia">Infancia</a></li>
            <li><a href="/policies/adolescencia">Adolescencia</a></li>
            <li><a href="/policies/vejez">Vejez</a></li>
            <li><a href="/policies/juventudes">Juventudes</a></li>
        </ul>
        </li>
        <li><a href="/indicators">Indicadores</a></li>
        <li><a href="/reports">Informes</a></li>
        <li><a href="/participation">Participación Ciudadana</a></li>
        <li><a href="/accountability">Rendición de Cuentas</a></li>
    </ul>
    </nav>
);
};

export default Navbar;
