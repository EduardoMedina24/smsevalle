const mongoose = require('mongoose');

const JuventudSchema = new mongoose.Schema({
  lineaEstrategica: { type: String, required: true },
  meta: { type: String, required: true },
  valorEsperado: { type: Number, required: true },
  valorAlcanzado: { type: Number, required: true }
});

module.exports = mongoose.model('Juventud', JuventudSchema);