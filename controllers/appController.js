const Users = require('../models/Users')
const Eventos = require('../models/Eventos')
const dayjs = require('dayjs')

const fechaActual = dayjs(new Date()).format('YYYY-MM-DD')
const horaActual = dayjs(new Date()).format('HH:mm')
// console.log('Fecha:', fechaActual)
// console.log('Hora:', horaActual)

// Trae 3 proximos eventos, los eventos para hoy (si es que hay), y los ultimos 3 eventos 
const home = async (req, res) => {
   const proximos = await Eventos.find()
      .gt('fecha', fechaActual)
      .sort({fecha: 1})
      .sort({hora: 1})
      .limit(3)
      .lean();
   // console.log(proximos);
   const eventsToday = await Eventos.find()
      .in('fecha', fechaActual)
      .gt('hora', horaActual)
      .sort({fecha: 1})
      .sort({hora: 1})
      .limit(3)
      .lean();
   // console.log(eventsToday);
   const recientes = await Eventos.find()
      .lt('fecha', fechaActual)
      .sort({fecha: -1})
      .sort({hora: -1})
      .limit(3)
      .lean();
   // console.log(recientes);

   res.status(200).json({proximos, eventsToday, recientes})
}

// Trae todos los eventos proximos a la fecha actual
const dashboard = async (req, res) => {
   const evento = await Eventos.find()
      .gt('fecha', fechaActual)
      .sort({fecha: 1})
      .lean();
   
   // console.log(evento);
   res.status(200).json({evento})
}

// Trae los eventos creados por el admin
const misEventos = async (req, res) => {
   const misEventos = await Eventos.find({ createdBy: 'UserID'}).exec();
   // consoole.log(misEventos)
   res.status(200).json({misEventos})
}

// Si encuentra el evento entre sus favoritos lo borra y si no lo encuentra lo agrega
const aggFavorites = async (req, res) => {
   const { userID } = req.params
   const { eventID } = req.body
   let fav = true
   let user = await Users.updateOne({ _id: userID }, {$pull: {favorites: {$in: [eventID]}}})

   if (user.modifiedCount === 1){
      fav = false
      console.log("Se elimino de favoritos")
   }

   if (user.modifiedCount !== 1){
      user = await Users.updateOne({ _id: userID }, {$push: {favorites: eventID}})
      console.log("Se agrego a favoritos")
   }
   return res.status(200).json({fav})
}

// Trae los eventos favoritos del usuario
const favorites = async (req, res) => {
   // const user = await Users.findById(id)
   // const events = await Eventos.find()
   // console.log(user)
   // console.log(events)
   res.status(200).send('Eventos favoritos')
}

// Trae los datos del usuario
const profile = async (req, res) => {
   const { id } = req.params
   const user = await Users.findById(id)
   res.status(200).json({user})
}

module.exports = {
   home,
   dashboard,
   aggFavorites,
   favorites,
   misEventos,
   profile
};