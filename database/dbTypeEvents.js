const TypeEvents = require("../models/TypeEvents");

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
      },
      {
         "name": "Encuesta",
      },
      {
         "name": "Chats",
      },
      {
         "name": "Juegos Interactivos",
      },
      {
         "name": "Stand Virtual",
      },
      {
         "name": "Streaming",
      },
      {
         "name": "Aula Virtual",
      },
      {
         "name": "Taller",
      }
   ]);
}

module.exports = addTypeEvent