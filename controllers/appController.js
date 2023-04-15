const Users = require('../models/Users')
const Eventos = require('../models/Eventos')
const dayjs = require('dayjs')
const { deleteImage, uploadImageProfile } = require('../utils/cloudinary');
var fs = require('fs-extra');

const fechaActual = dayjs(new Date()).format('YYYY-MM-DD')
const horaActual = dayjs(new Date()).format('HH:mm')
// console.log('Fecha:', fechaActual)
// console.log('Hora:', horaActual)

const obtenerProximos = async () => {
   try {
      const proximos = await Eventos.find()
         .gt('fecha', fechaActual)
         .sort({ fecha: 1 })
         .sort({ hora: 1 })
         .limit(3)
         .lean();
      return proximos;
   } catch (error) {
      throw new Error(error.message);
   }
}
const obtenerRecientes = async () => {
   try {
      const recientes = await Eventos.find()
         .lt('fecha', fechaActual)
         .sort({ fecha: -1 })
         .sort({ hora: -1 })
         .limit(3)
         .lean();
      return recientes;
   } catch (error) {
      throw new Error(error.message);
   }
}
const obtenerToday = async () => {
   try {
      const eventsToday = await Eventos.find()
         .in('fecha', fechaActual)
         .gt('hora', horaActual)
         .sort({ fecha: 1 })
         .sort({ hora: 1 })
         .limit(3)
         .lean();
      return eventsToday;
   } catch (error) {
      throw new Error(error.message);
   }
}

// Trae 3 proximos eventos, los eventos para hoy (si es que hay), y los ultimos 3 eventos 
const home = async (req, res) => {
   try {
      const [proximos, recientes, eventsToday] = await Promise.allSettled([
         obtenerProximos(),
         obtenerRecientes(),
         obtenerToday()
      ]).then(results =>
         results
            .filter(result => result.status === 'fulfilled')
            .map(result => result.value)
      )
      res.status(200).json({ proximos, recientes, eventsToday });
      
   } catch (error) {
      res.status(500).json({ messageError: error.message });
   }
}

// Trae todos los eventos proximos a la fecha actual
const dashboard = async (req, res) => {
   try {
      const eventos = await Eventos.find()
         .gt('fecha', fechaActual)
         .sort({fecha: 1})
         .lean();
      
      // console.log(evento);
      return res.status(200).json({eventos})
   } catch (error) {
      return res.status(500).json({messageError: error.message})
   }
}

// Trae todos los eventos que son iguales al filtro
const filterTo = async (req, res) => {
   try {
      const filter = req.body;
      const propertie = Object.keys(filter)[0];
      const value = filter[propertie];
      const eventos = await Eventos.find({[propertie]: { $regex: new RegExp(value, 'i') }}).lean();
      // console.log(eventos);
      return res.status(200).json({eventos})
   } catch (error) {
      return res.status(500).json({messageError: error.message})
   }
}

// Trae los eventos creados por el admin
const misEventos = async (req, res) => {
   try {
      const { adminID } = req.params

      const user = await Users.findById(adminID).lean()
      if(!user) return res.status(404).json({messageError: 'Administrador no encontrado'})

      const misEventos = await Eventos.find({ createdBy: adminID}).exec()
      // consoole.log(misEventos)
      return res.status(200).json({misEventos})
   } catch (error) {
      return res.status(500).json({messageError: error.message})
   }
}

// Si encuentra el evento entre sus favoritos lo borra y si no lo encuentra lo agrega
const toggleFavorites = async (req, res) => {
   try {
      const { eventID } = req.params
      const { userID } = req.body
      let fav = true

      const evento = await Eventos.findById(eventID).lean()
      if (!evento) return res.status(404).json({messageError: 'Evento no encontrado'})

      let user = await Users.findById(userID).lean()
      if (!user) return res.status(404).json({messageError: 'Usuario no encontrado'})

      user = await Users.updateOne({ _id: userID }, {$pull: {favorites: {$in: [eventID]}}})
   
      if (user.modifiedCount === 1){
         fav = false
         // console.log("Se elimino de favoritos")
         return res.status(200).json({fav})
      }
   
      if (user.modifiedCount !== 1){
         user = await Users.updateOne({ _id: userID }, {$push: {favorites: eventID}})
         // console.log("Se agrego a favoritos")
         return res.status(200).json({fav})
      }
   } catch (error) {
      return res.status(500).json({messageError: error.message})
   }
}

// Trae los eventos favoritos del usuario
const favorites = async (req, res) => {
   try {
      const {userID} = req.params
      const user = await Users.findOne({_id: userID}).populate({path: 'favorites', select: 'imagen titulo fecha hora lugar'}).lean();
      // console.log(user)
      return res.status(200).json({eventos: user.favorites})
   } catch (error) {
      return res.status(500).json({messageError: error.message})
   }
}

// Trae los datos del usuario
const profile = async (req, res) => {
   try {
      const { userID } = req.params
      const user = await Users.findById(userID).lean();
      if(!user) return res.status(404).json({messageError: 'Usuario no encontrado'})
      // console.log(user);
      return res.status(200).json({user})
   } catch (error) {
      return res.status(500).json({messageError: error.message})
   }
}

// Modifica el perfil de un usuario por ID
const updateUser = async (req, res) => {
   try {
      let path;
      if (!!req.file) {
         // console.log(`Se guardara el archivo: ${req.file.path}`);
         path = req.file.path;
      }
      const {userID} = req.params
      const update = req.body

      let user = await Users.findById(userID).lean()
      if(!user) return res.status(404).json({messageError: 'Usuario no encontrado'})
      
      if (path !== undefined) {
         if(user.imgPerfil !== null) await deleteImage(user.imgPerfil.public_id)
         const result = await uploadImageProfile(path)
         await fs.unlink(path)
         update.imgPerfil = {public_id: result.public_id, secure_url: result.secure_url}
         user = await Users.findByIdAndUpdate(userID, update, {new: true}).lean()
         // console.log(user);
         return res.status(200).json({user})
      }
      
      user = await Users.findByIdAndUpdate(userID, update, {new: true}).lean();
      // console.log(user);
      return res.status(200).json({user})
   } catch (error) {
      return res.status(500).json({messageError: error.message})
   }
}

module.exports = {
   home,
   dashboard,
   filterTo,
   toggleFavorites,
   favorites,
   misEventos,
   profile,
   updateUser
};