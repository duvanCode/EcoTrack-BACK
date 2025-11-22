require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');

const authRoutes = require('./routes/authRoutes');
const wasteRoutes = require('./routes/wasteRoutes');
const tipRoutes = require('./routes/tipRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conectar a la base de datos
connectDB();

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/waste', wasteRoutes);
app.use('/api/tips', tipRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'EcoTrack API funcionando' });
});

module.exports = app;