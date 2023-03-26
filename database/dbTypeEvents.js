const TypeEvents = require('../models/TypeEvents')

function addTypeEvent() {
   TypeEvents.insertMany([
      {
         "name": "Videoconferencia",
      },
      {
         "name": "Foro Chat",
      },
      {
         "name": "Presentación",
      },
      {
         "name": "Diplomado",
      },
      {
         "name": "Dinámica",
      }
   ]);
}

module.exports = addTypeEvent