const express = require('express');
const AccionComunal = require('../models/AccionComunal');

const router = express.Router();

// Obtener todos los documentos
router.get('/', async (req, res) => {
  try {
    const datos = await AccionComunal.find();
    res.json(datos);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener los datos', error: err });
  }
});

// Crear un nuevo documento
router.post('/', async (req, res) => {
  const nuevoDato = new AccionComunal(req.body);
  try {
    const datoGuardado = await nuevoDato.save();
    res.status(201).json(datoGuardado);
  } catch (err) {
    res.status(400).json({ message: 'Error al guardar el dato', error: err });
  }
});

// Actualizar un documento por ID
router.put('/:id', async (req, res) => {
  try {
    const datoActualizado = await AccionComunal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(datoActualizado);
  } catch (err) {
    res.status(400).json({ message: 'Error al actualizar el dato', error: err });
  }
});

// Eliminar un documento por ID
router.delete('/:id', async (req, res) => {
  try {
    await AccionComunal.findByIdAndDelete(req.params.id);
    res.json({ message: 'Dato eliminado con éxito' });
  } catch (err) {
    res.status(500).json({ message: 'Error al eliminar el dato', error: err });
  }
});

module.exports = router;
