const express = require('express');
const { dashboard, misEventos, profile, favorites, home, toggleFavorites, updateUser, filterTo, oldEvents } = require('../controllers/appController')
const { upload } = require('../controllers/uploadController');
const router = express.Router()

// Dashboard Principal, filtra 3 eventos proximos y 3 recientes
router.get('/dashboard', home)

// Trae todos los eventos proximos
router.get('/events', dashboard)

// Trae todos los eventos recientes
router.get('/old-events', oldEvents)

// Trae todos los eventos que coincidan con un solo filtro
router.post('/filters', filterTo)

// Cambiar el evento favorito del usuario
router.post('/toggle-favorite/:eventID', toggleFavorites)

// Trae los eventos favoritos del usuario
router.get('/favorites/:userID', favorites)

// Trae los eventos creados del admin
router.get('/my-events/:adminID', misEventos)

// Perfil del usuario
router.get('/profile/:userID', profile)

// Modifica el usuario segun ID
router.post('/update-profile/:userID', upload.single('imgPerfil'), updateUser)

module.exports = router