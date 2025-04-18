// routes/protegido.js (nuevo archivo para la ruta protegida)
const express = require('express');
const authenticate = require('../middleware/authMiddleware'); // Importa el middleware

const router = express.Router();

// Ruta protegida
router.get('/protegido', authenticate, (req, res) => {
  // Esta ruta ahora está protegida por el middleware
  res.json({ message: '¡Acceso a ruta protegida permitido!', user: req.user });
});

module.exports = router;
