const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const eventosSchema = new Schema({
   organizador: {
      type: String,
      required: true
   },
   participantes: {
      type: Array,
      default: [],
      required: true
   },
   imagen: {
      public_id: String,
      secure_url: String,
   },
   titulo: {
      type: String,
      unique: true,
      required: true
   },
   descripcion: {
      type: Array,
      default: [],
      required: true
   },
   keywords: {
      type: Array,
      default: [],
      required: true
   },
   facultad: {
      type: String,
      required: true
   },
   tipo: {
      type: Array,
      default: [],
      required: true
   },
   categoria: {
      type: Array,
      default: [],
      required: true
   },
   fecha: {
      type: String,
      required: true
   },
   hora: {
      type: String,
      required: true
   },
   duracion: {
      type: String,
      default: null
   },
   lugar: {
      type: String,
      required: true
   },
   asistencia: {
      type: Array,
      default: []
   },
   createdBy: {
      type: Schema.Types.ObjectId,
      ref: "Admins",
      required: true
   }
});

const Franelas = mongoose.model('Eventos', eventosSchema);
module.exports = Franelas