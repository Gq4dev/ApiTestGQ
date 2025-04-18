// index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const protegidoRoutes = require('./routes/protegido');

const app = express();

app.use(express.json()); // Para poder manejar JSON en el cuerpo de las solicitudes
app.use('/api/auth', authRoutes);
app.use('/api', protegidoRoutes);

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch((err) => {
    console.error('❌ Error de conexión a MongoDB:', err);
    process.exit(1);
  });

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
