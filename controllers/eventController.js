const Users = require('../models/Users')
const Eventos = require('../models/Eventos')
const { validationResult } = require('express-validator');

// Trae un evento por ID
const event = async (req, res) => {
   const {id} = req.params;
   try {
      const evento = await Eventos.findById(id).lean();
      // console.log(evento);
      return res.status(200).json(evento);
   } catch (error) {
      console.log(error);
      return res.status(404).json({messageError: error.message});
   }
}

// Valida los campos y devuelve el evento
const createEvent = async (req, res) => {
   const errors = validationResult(req)
   if(!errors.isEmpty()) {
      const validateErrors = errors.array();
      return res.status(404).json({messageError: validateErrors})
   }
   const { organizador, participantes, titulo, descripcion, keywords, tipo, facultad, categoria, fecha, hora, lugar } = req.body;
   try {
      let evento = await Eventos.findOne({ titulo });
      // console.log(evento);
      if (evento) throw new Error('Ya existe este titulo de evento');

      // console.log('Entra aqui')
      evento = new Eventos({ organizador, participantes, titulo, descripcion, keywords, tipo, facultad, categoria, fecha, hora, lugar });
      console.log(evento)
      await evento.save()
      return res.status(200).json({evento});
   } catch (error) {
      // console.log(error.message);
      return res.status(404).json({messageError: error.message});
   }
}

// Agrega una imagen al evento
const addImage = async (req, res) => {
   const { id } = req.params;
   const { filename } = req.file;
   try {
      const evento = await Eventos.findById(id);
      evento.imagen = filename 
      // console.log(evento);
      await evento.save();
      res.status(200).json({addImage: true})
   } catch (error) {
      return res.status(404).json({messageError: error.message});
   }
}

// Valida los campos y modifica el evento
const updateEvent = async (req, res) => {
   const errors = validationResult(req)
   if(!errors.isEmpty()) {
      const validateErrors = errors.array();
      return res.status(404).json({messageError: validateErrors})
   }

   const { id } = req.params;
   const { organizador, participantes, titulo, descripcion, keywords, tipo, facultad, categoria, fecha, hora, lugar } = req.body;

   try {
      const evento = await Eventos.findByIdAndUpdate(id, { organizador, participantes, titulo, descripcion, keywords, tipo, facultad, categoria, fecha, hora, lugar })
      res.status(200).json({evento})
   } catch (error) {
      return res.status(404).json({messageError: error.message});
   }
}

// Elima un evento por ID
const deleteEvent = async (req, res) => {
   const { id } = req.params;
   try {
      await Eventos.findByIdAndDelete(id)
      res.status(200).json({eliminado: true})
   } catch (error) {
      return res.status(404).json({messageError: error.message});
   }
}

module.exports = {
   event,
   createEvent,
   addImage,
   updateEvent,
   deleteEvent
};