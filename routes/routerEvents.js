const express = require('express');
const { event, createEvent, updateEvent, deleteEvent, toggleAsist } = require('../controllers/eventController')
const { upload } = require('../controllers/uploadController');
const { isAutheticated, verifyAdmin } = require('../middlewares/isAuthenticated');

const router = express.Router()

// Muestra un evento por id
router.get('/event/:eventID', isAutheticated, event)

// Cambia asistencia a un evento
router.post('/toggle-asist/:userID', isAutheticated, toggleAsist)

// Crea un evento
router.post('/create-event/:userID', isAutheticated, verifyAdmin, upload.single('imagen'), createEvent)

// Modifica un evento
router.post('/update-event/:eventID', isAutheticated, verifyAdmin, upload.single('imagen'), updateEvent)

// Elimina un evento
router.post('/delete-event/:eventID', isAutheticated, verifyAdmin, deleteEvent)

module.exports = router