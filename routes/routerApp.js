const express = require('express');
const { dashboard, misEventos, profile, favorites, home, toggleFavorites, updateUser, filterTo, oldEvents } = require('../controllers/appController')
const { upload } = require('../controllers/uploadController');
const router = express.Router()
const { isAutheticated, verifyAdmin, checkedUser } = require('../middlewares/isAuthenticated');

// Dashboard Principal, filtra 3 eventos proximos y 3 recientes
router.get('/dashboard', isAutheticated, home)

// Trae todos los eventos proximos
router.get('/events', isAutheticated, dashboard)

// Trae todos los eventos recientes
router.get('/old-events', isAutheticated, oldEvents)

// Trae todos los eventos que coincidan con un solo filtro
router.post('/filters', isAutheticated, filterTo)

// Cambiar el evento favorito del usuario
router.post('/toggle-favorite/:eventID', isAutheticated, toggleFavorites)

// Trae los eventos favoritos del usuario
router.get('/favorites/:userID', isAutheticated, favorites)

// Trae los eventos creados del admin
router.get('/my-events/:adminID', isAutheticated, verifyAdmin, misEventos)

// Perfil del usuario
router.get('/profile/:userID', isAutheticated, profile)

// Modifica el usuario segun ID
router.post('/update-profile/:userID', isAutheticated, checkedUser, upload.single('imgPerfil'), updateUser)

module.exports = router