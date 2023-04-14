const express = require('express');
const { event, createEvent, updateEvent, deleteEvent, toggleAsist } = require('../controllers/eventController')
const { upload } = require('../controllers/uploadController');

const router = express.Router()

// Muestra un evento por id
router.get('/event/:eventID', event)

// Cambia asistencia a un evento
router.post('/toggle-asist/:userID', toggleAsist)

// Crea un evento
router.post('/create-event/:userID', upload.single('imagen'), createEvent)

// Modifica un evento
router.post('/update-event/:eventID', upload.single('imagen'), updateEvent)

// Elimina un evento
router.post('/delete-event/:eventID', deleteEvent)

module.exports = router