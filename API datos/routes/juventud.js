const express = require('express');
const Juventud = require('../models/juventud');

const router = express.Router();

// Configurar las rutas igual que en accionComunal.js, adaptando al modelo Juventud
// Ejemplo:
router.get('/', async (req, res) => {
  try {
    const datos = await Juventud.find();
    res.json(datos);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener los datos', error: err });
  }
});

// Agrega las rutas POST, PUT, DELETE como en accionComunal.js

module.exports = router;

