
const express = require('express');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();


router.get('/protegido', verifyToken, (req, res) => {
  
  res.json({ message: '¡Acceso a ruta protegida permitido!', user: req.user });
});

module.exports = router;
