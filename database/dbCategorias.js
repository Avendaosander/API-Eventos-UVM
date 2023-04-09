const Categorias = require("../models/Categorias");

function addCategoria() {
   Categorias.insertMany([
      {
         "name": "Computación",
      },
      {
         "name": "Industrial",
      },
      {
         "name": "Administracion",
      },
      {
         "name": "Contaduria",
      },
      {
         "name": "Robotica",
      },
      {
         "name": "Derecho",
      },
      {
         "name": "Matemática",
      },
      {
         "name": "Humanitas",
      },
      {
         "name": "Lógica",
      },
      {
         "name": "Electricidad",
      },
      {
         "name": "Física",
      },
      {
         "name": "Estadística",
      },
      {
         "name": "Programación",
      },
      {
         "name": "Química",
      },
      {
         "name": "Mecanica",
      },
      {
         "name": "Termodinámica",
      },
      {
         "name": "Íngles",
      }
   ]);
}

module.exports = addCategoria