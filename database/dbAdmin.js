const Users = require('../models/Users')

function addAdmin() {
   Users.insertMany([
      {
         "username": "AdminUVM",
         "imgPerfil": {
            "public_id": "Eventos UVM/1680901103272-usuario",
            "secure_url": "https://res.cloudinary.com/dtjgc9qlk/image/upload/v1680901101/Eventos%20UVM/1680901103272-usuario.png"
         },
         "nombre": "UVM",
         "apellido": "Developer",
         "edad": "21",
         "biografia": "Este es un Administrador de desarrollo",
         "telefono": "04268348237",
         "email": "eventos@uvm.edu.ve",
         "password": "123456789",
         "rol": "Admin"
       }
   ]);
}

module.exports = addAdmin