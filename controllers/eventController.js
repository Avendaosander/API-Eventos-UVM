const Users = require('../models/Users')
const Eventos = require('../models/Eventos')
const { uploadImage, deleteImage } = require('../utils/cloudinary');
var fs = require('fs-extra');

// Trae un evento por ID
const event = async (req, res) => {
   try {
      const {eventID} = req.params;
      const evento = await Eventos.findById(eventID).lean();
      if(!evento) return res.status(404).json({messageError: 'Evento no encontrado'})
      // console.log(evento);
      return res.status(200).json({evento});
   } catch (error) {
      // console.log(error);
      return res.status(500).json({messageError: error.message});
   }
}

// Valida los campos y devuelve el evento
const createEvent = async (req, res) => {
   try {
      if (!req.file) return res.status(404).json({messageError: 'Debes agregar una imagen del evento'})
      const { path } = req.file;
      const { userID } = req.params

      const { organizador, participantes, titulo, descripcion, keywords, tipo, facultad, categoria, fecha, hora, lugar } = req.body;
      let evento = await Eventos.findOne({ titulo });
      // console.log(evento);
      if (evento) return res.status(404).json({messageError: 'Ya existe este titulo de evento'});

      evento = new Eventos({ organizador, participantes, titulo, descripcion, keywords, tipo, facultad, categoria, fecha, hora, lugar, createdBy: userID });
      // console.log(evento)
      if (path) {
         const result = await uploadImage(path)
         await fs.unlink(path)
         evento.imagen = {public_id: result.public_id, secure_url: result.secure_url}
         console.log({addImage: true});
      }
      await evento.save()
      return res.status(200).json({evento});
   } catch (error) {
      // console.log(error.message);
      return res.status(500).json({messageError: error.message});
   }
}

// Valida los campos y modifica el evento
const updateEvent = async (req, res) => {
   try {
      let path;
      if (!!req.file) {
         // console.log(`Se guardara el archivo: ${req.file.path}`);
         path = req.file.path;
      }
   
      const { eventID } = req.params;
      const update = req.body;

      if (path !== undefined) {
         let evento = await Eventos.findById(eventID)
         await deleteImage(evento.imagen.public_id)
         const result = await uploadImage(path)
         await fs.unlink(path)
         update.imagen = {public_id: result.public_id, secure_url: result.secure_url}
         evento = await Eventos.findByIdAndUpdate(eventID, update, {new: true})
         // console.log(evento);
         return res.status(200).json({evento})
      }
      const evento = await Eventos.findByIdAndUpdate(eventID, update, {new: true})
      return res.status(200).json({evento})
   } catch (error) {
      return res.status(500).json({messageError: error.message});
   }
}

// Elima un evento por ID
const deleteEvent = async (req, res) => {
   try {
      const { eventID } = req.params;
      const evento = await Eventos.findByIdAndDelete(eventID)

      if (!evento) return res.status(404).json({messageError: 'Este evento no existe'})

      await deleteImage(evento.imagen.public_id)
      await Users.updateMany({}, {$pull: {favorites: {$in: [eventID]}}}, { multi: true })
      await Users.updateMany({}, {$pull: {confirmEvent: {$in: [eventID]}}}, { multi: true })

      res.status(200).json({eliminado: true})
   } catch (error) {
      return res.status(404).json({messageError: error.message});
   }
}

module.exports = {
   event,
   createEvent,
   updateEvent,
   deleteEvent
};