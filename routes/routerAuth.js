const express = require('express');
const { register, login, registerAdmin } = require('../controllers/authController');
const { isAutheticated, verifyAdmin } = require('../middlewares/isAuthenticated');

const router = express.Router()

// Registrar Administrador
router.post('/register-admin/:adminID', isAutheticated, verifyAdmin, registerAdmin)

// Registrar Usuario
router.post('/register', register)

// Iniciar Sesion
router.post('/login', login)

module.exports = router