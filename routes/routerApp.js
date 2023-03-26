const express = require('express');
const { dashboard, misEventos, profile, favorites, home, aggFavorites } = require('../controllers/appController')

const router = express.Router()

// Dashboard Principal, filtra 3 eventos proximos y 3 recientes
router.get('/dashboard', home)

// Trae todos los eventos proximos
router.get('/events', dashboard)

// Agrega el evento a favoritos del usuario
router.get('/add-favorite/:idEvent', aggFavorites)

// Trae los eventos favoritos del usuario
router.get('/favorites', favorites)

// Trae los eventos creados del admin
router.get('/my-events', misEventos)

// Perfil del usuario
router.get('/profile', profile)

module.exports = router