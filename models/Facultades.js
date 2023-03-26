const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const facultadesSchema = new Schema({
   name: {
      type: String,
      unique: true,
      required: true
   }
})

const Facultades = mongoose.model('Facultades', facultadesSchema);
module.exports = Facultades