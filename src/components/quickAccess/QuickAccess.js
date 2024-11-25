// src/components/quickAccess/QuickAccess.js
import React from 'react';
import './QuickAccess.css';

const QuickAccess = () => {
const areas = [
    { name: 'Primera Infancia', icon: '👶' },
    { name: 'Adolescencia', icon: '🧒' },
    { name: 'Juventudes', icon: '🧑' },
    { name: 'Vejez', icon: '👴' },
];

const handleAccess = (areaName) => {
    alert(`Accediendo a la sección: ${areaName}`);
};

return (
    <div className="quick-access">
    <h2>Áreas de Monitoreo</h2>
    <div className="icons-container">
        {areas.map((area, index) => (
        <div
            key={index}
            className="icon-card"
            onClick={() => handleAccess(area.name)}
        >
            <span className="icon">{area.icon}</span>
            <p>{area.name}</p>
        </div>
        ))}
    </div>
    </div>
);
};

export default QuickAccess;