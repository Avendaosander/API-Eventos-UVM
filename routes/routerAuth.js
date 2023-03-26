const express = require('express');
const { body } = require('express-validator')
const { home, register, login, logout } = require('../controllers/authController')

const router = express.Router()

// Ruta Raiz
router.get('/', home)

// Registrar Usuario
router.post('/register',[
   body("email", "Ingrese un email válido")
      .trim()
      .isEmail(),
   body("password", "Contraseña debe tener 6 o más carácteres")
      .trim()
      .isLength({ min: 6 })
      .escape()
      .custom((value, { req }) => {
         if (value !== req.body.repeatPassword) {
            throw new Error("Contraseñas no coinciden");
         } else {
            return value;
         }
      }),
   body("rol", "Rol Invalido")
      .notEmpty()
      .custom((value, { req }) => {
         if(value !== "admin" || value !== "user") throw new Error("El rol debe ser admin o user")
      })
], register)

// Iniciar Sesion
router.post('/login',[
   body("email", "Ingrese un email válido")
      .trim()
      .isEmail(),
   body("password", "Contraseña debe tener 6 o más carácteres")
      .trim()
      .isLength({ min: 6 })
      .escape()
], login)

// Cerrar Sesion
router.get('/logout', logout)

module.exports = router