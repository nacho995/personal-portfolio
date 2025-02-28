const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Configuración de CORS
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  optionsSuccessStatus: 200,
  credentials: true
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.error('Error conectando a MongoDB:', error));

// Rutas API
app.use('/ratings', require('./routes/ratingRoutes'));

// Manejar rutas del frontend en producción
app.get('*', (req, res) => {
  res.status(404).json({ message: 'API endpoint not found' });
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
  console.log('CORS habilitado para:', process.env.FRONTEND_URL);
}); 