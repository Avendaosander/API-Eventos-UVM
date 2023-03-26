const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const categoriasSchema = new Schema({
   name: {
      type: String,
      unique: true,
      required: true
   }
})

const Categorias = mongoose.model('Categorias', categoriasSchema);
module.exports = Categorias