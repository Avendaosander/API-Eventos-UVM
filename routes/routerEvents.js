const express = require('express');
// const { body } = require('express-validator')
const { event, createEvent, updateEvent, deleteEvent } = require('../controllers/eventController')
const { upload } = require('../controllers/uploadController');

const router = express.Router()

// Muestra un evento por id
router.get('/event/:eventID', event)

// Crea un evento
router.post('/create-event/:userID', upload.single('imagen'), createEvent)

// Modifica un evento
router.post('/update-event/:eventID', upload.single('imagen'), updateEvent)

// Elimina un evento
router.get('/delete-event/:eventID', deleteEvent)

module.exports = router