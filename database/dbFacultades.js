const Facultades = require('../models/Facultades')

function addFacultad() {
   Facultades.insertMany([
      {
         "name": "Facultad de ingeniería",
      },
      {
         "name": "Facultad de ciencias económicas, administrativas y gerenciales",
      },
      {
         "name": "Facultad de ciencias jurídicas, políticas y sociales",
      }
   ]);
}

module.exports = addFacultad