require('dotenv').config();
const mongoose = require('mongoose');
const Users = require('../models/Users')
const Eventos = require('../models/Eventos')
const Categorias = require('../models/Categorias')
const Facultades = require('../models/Facultades')
const TypeEvents = require('../models/TypeEvents')
const addAdmin = require('./dbAdmin'); // Agrega Categorias
const addCategoria = require('./dbCategorias'); // Agrega Categorias
const addFacultad = require('./dbFacultades'); // Agrega Facultades
const addTypeEvent = require('./dbTypeEvents'); // Agrega Tipos de eventos
const addEvents = require('./dbEvents'); // Agrega los Eventos

mongoose.set('strictQuery', false)

mongoose.connect(process.env.URI) 
   .then(async()=> {
      const admin = await Users.find({email: process.env.EMAIL_ADMIN}).lean();
      const categorias = await Categorias.find().limit(1).lean();
      const facultades = await Facultades.find().limit(1).lean();
      const typeEvents = await TypeEvents.find().limit(1).lean();
      const events = await Eventos.find().limit(1).lean();
      if (admin.length === 0) {
         addAdmin()
         console.log('Administrador Creado');
      }
      if (events.length === 0) {
         addEvents()
         console.log('Eventos Agregados');
      }
      if (categorias.length === 0) {
         addCategoria();
         console.log('Categorias Agregadas')
      }
      if (facultades.length === 0) {
         addFacultad();
         console.log('Facultades Agregadas')
      }
      if (typeEvents.length === 0) {
         addTypeEvent();
         console.log('Tiipos de Eventos Agregados')
      }
      console.log('DB Conectada🚀')
   })
   .catch((e) => console.log("Fallo de Conexion " + e));