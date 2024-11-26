const express = require('express'); // Framework para manejar HTTP
const mongoose = require('mongoose'); // Librería para conectar con MongoDB
const cors = require('cors'); // Middleware para habilitar CORS
const dotenv = require('dotenv'); // Para manejar variables de entorno

dotenv.config(); // Carga las variables desde el archivo .env

const app = express(); // Inicializa la aplicación Express

// Middleware para manejar JSON y CORS
app.use(express.json());
app.use(cors());

// Conectar a MongoDB usando la URI del archivo .env
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Importar rutas
const accionComunalRouter = require('./routes/accionComunal'); // Ruta para Acción Comunal
const juventudRouter = require('./routes/juventud');           // Ruta para Juventud
const infanciaRouter = require('./routes/infancia');           // Ruta para Infancia
const envejecimientoRouter = require('./routes/envejecimiento'); // Ruta para Envejecimiento

// Asociar rutas con sus endpoints
app.use('/api/accion-comunal', accionComunalRouter);
app.use('/api/juventud', juventudRouter);
app.use('/api/infancia', infanciaRouter);
app.use('/api/envejecimiento', envejecimientoRouter);

// Configuración del puerto
const PORT = process.env.PORT || 5000; // Toma el puerto de .env o usa 5000 por defecto

// Inicia el servidor
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
