const Categorias = require('../models/Categorias')

function addCategoria() {
   Categorias.insertMany([
      {
         "name": "Computación",
      },
      {
         "name": "Industrial",
      },
      {
         "name": "Administración",
      },
      {
         "name": "Contaduría",
      },
      {
         "name": "Derecho",
      }
   ]);
}

module.exports = addCategoria