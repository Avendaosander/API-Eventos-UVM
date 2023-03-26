const express = require('express');
const { body } = require('express-validator')
const { event, createEvent, updateEvent, deleteEvent, addImage } = require('../controllers/eventController')
const { upload } = require('../controllers/uploadController');

const router = express.Router()

// Muestra un evento por id
router.get('/event/:id', event)

// Crea un evento
router.post('/create-event',[
   body("organizador", "Ingrese el encargado del evento")
      .trim()
      .notEmpty()
      .custom( value => {
         if (/^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ\s]+$/g.test(value)) {
            return true
         } else {
            throw new Error('El nombre del profesor no es valido, ingrese solo letras')
         }
      })
      .isLength({ min: 2 })
      .escape(),
   body("participantes", "Ingrese los participantes del evento")
      .trim()
      .notEmpty()
      .custom( value => {
         if (/^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ\s]+$/g.test(value)) {
            return true
         } else {
            throw new Error('El nombre del participante no es valido, ingrese solo letras')
         }
      })
      .isLength({ min: 2 })
      .escape(),
   body("titulo", "Ingrese un titulo con minimo 15 caracteres")
      .trim()
      .notEmpty()
      .isLength({ min: 15 })
      .escape(),
   body("descripcion", "Ingrese una descripcion con minimo 20 caracteres")
      .trim()
      .notEmpty()
      .isLength({ min: 20 })
      .escape(),
   body("keywords", "Ingrese al meno una palabra clave")
      .trim()
      .notEmpty()
      .escape(),
   body("tipo", "Ingrese un tipo disponible")
      .trim()
      .notEmpty()
      .escape(),
   body("facultad", "Ingrese una facultad")
      .trim()
      .notEmpty()
      .escape(),
   body("categoria", "Ingrese una categoria disponible")
      .trim()
      .notEmpty()
      .escape(),
   body("fecha", "Ingrese una fecha disponible")
      .trim()
      .isDate()
      .notEmpty(),
      // .escape(),
   body("hora", "Ingrese una hora disponible")
      .trim()
      // .isDate()
      .notEmpty()
      .escape(),
   body("lugar", "Ingrese un lugar disponible")
      .trim()
      .notEmpty()
      .escape(),
], createEvent)

// Agrega una imagen al evento
router.post('/add-image/:id', upload.single('imagen'), addImage)

// Modifica un evento
router.post('/update-event/:id',[
   body("profesor", "Ingrese el encargado del evento")
      .trim()
      .notEmpty()
      .custom( value => {
         if (/^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ\s]+$/g.test(value)) {
            return true
         } else {
            throw new Error('El nombre del profesor no es valido, ingrese solo letras')
         }
      })
      .isLength({ min: 2 })
      .escape(),
   body("descripcion", "Ingrese una descripcion con minimo 20 caracteres")
      .trim()
      .notEmpty()
      .isLength({ min: 20 })
      .escape(),
   body("tipo", "Ingrese un tipo disponible")
      .trim()
      .notEmpty()
      .escape(),
   body("categoria", "Ingrese una categoria disponible")
      .trim()
      .notEmpty()
      .escape(),
   body("fecha", "Ingrese una fecha disponible")
      .trim()
      .isDate()
      .notEmpty()
      .escape(),
   body("lugar", "Ingrese un lugar disponible")
      .trim()
      .notEmpty()
      .escape(),
], updateEvent)

// Elimina un evento
router.get('/delete-event/:id', deleteEvent)

module.exports = router