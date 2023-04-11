# Api Eventos UVM
Este es el servidor oficial de la aplicación de eventos UVM desarrollado en el Stack MERN

## Instalación
Abrir la terminal en la ruta raiz del proyecto y ejecutar el siguiente comando:
```
npm install
```
Iniciar el servidor ejecutando el comando:
```
npm run dev
```
Debe aparecer lo siguiente:
```
Servidor corriendo en el puerto: 3000
DB Conectada🚀
```
Significa que el servidor ha arrancado correctamente.

## Ejecutando las pruebas ⚙️

Iniciar el servidor desde la ruta raiz del proyecto "/"

**Register.** Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API. 
El modelo tiene una validacion que no permite guardar correos que ya esten registrados, ni nombres de usuarios que ya esten registrados. ruta:  http://localhost:3000/register (POST)

Para Probar el Register. Ingresando el siguiente ejemplo en formato json (POST)
```
{
  "username": "PruebaUsername",
  "email": "probando@gmail.com",
  "password": "123456789",
}
```
**Register Admin.** Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API. 
El modelo tiene una validacion que no permite guardar correos que ya esten registrados, ni nombres de usuarios que ya esten registrados. ruta:  http://localhost:3000/register (POST)

Para Probar el Register. Ingresando el siguiente ejemplo en formato json (POST)
```
{
  "username": "PruebaUsernameAdmin",
  "email": "probandoAdmin@gmail.com",
  "password": "123456789",
  "rol": "Admin"
}
```

**Login.** Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con http://localhost:3000/login (POST)

Para Probar el Login. Ingresando el siguiente ejemplo en formato json
```
{
   "email":"probando@gmail.com",
   "password": "123456789"
}
```

**Dashboard.** Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con http://localhost:3000/app/dashboard (GET)

Para ir a la ruta principal, esto mostrará 3 eventos proximos, 3 Eventos Recientes y 3 eventos disponibles para hoy (Si es que hay).
```
http://localhost:3000/app/dashboard (GET)
```

**Eventos.** Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con http://localhost:3000/app/events (GET)

Para ir a la ruta de eventos, esto mostrará todos los eventos proximos a la fecha actual
```
http://localhost:3000/app/events (GET)
```

**Filter.** Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con http://localhost:3000/app/filters (POST)

Para Probar la busqueda por filtros. Ingrese un solo ejemplo en formato json, acá algunas opciones:
```
{
  "categoria": "Computacion"
}
```
```
{
  "typeEvents": "Videoconferencia"
}
```
```
{
  "facultad": "Facultad de ingeniería"
}
```
```
{
  "titulo": "Semana Universitaria"
}
```
```
{
  "keywords": "Programacion"
}
```
```
{
  "fecha": "2023-04-30"
}
```

**Toggle-favorite.** Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con http://localhost:3000/app/toggle-favorite/:eventID (POST)

Para Probar el toggle-favorite. Ingresando el siguiente ejemplo en formato json
```
{
  "userID": "643212eadb112bea4a6cd2a0"
}
```

**Favoritos.** Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con http://localhost:3000/app/favorites/:userID (GET)

Para ir a la ruta de Favoritos, esto mostrará todos los eventos favoritos de un Usuario
```
http://localhost:3000/app/favorites/:userID (GET)
```

**Mis Eventos.** Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con http://localhost:3000/app/my-events/:adminID (GET)

Para ir a la ruta de Favoritos, esto mostrará todos los eventos creados del Administrador
```
http://localhost:3000/app/my-events/:adminID (GET)
```

**Profile.** Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con http://localhost:3000/app/profile/:userID (GET)

Para ir a la ruta del Perfil, esto mostrará los datos del usuario
```
http://localhost:3000/app/profile/:userID (GET)
```

**Udpate-profile.** Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con http://localhost:3000/app/update-profile/:userID (POST)

Para Probar el udpate-profile. Ingresando el siguiente ejemplo en formato json
```
{
  "nombre": "Pedro",
  "apellido": "Perez",
  "edad": 25
}
```

**Evento.** Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con http://localhost:3000/events/event/:eventID (GET)

Para ir a la ruta de un evento, esto mostrará el evento solicitado
```
http://localhost:3000/events/event/:eventID (GET)
```

**Create-event.** Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con http://localhost:3000/app/create-event/:userID (POST)

Para Probar el create-event. Ingresando el siguiente ejemplo en formato json
```
{
   "organizador": "Brian Santeliz",
   "participantes": [
      "Brian Santeliz",
      "Roberto De Michele"
   ],
   "imagen": "multipart/form-data"
   "titulo": "Introduccion al Stack MERN",
   "descripcion": [
      "En esta ocasion enseñaremos las base del Stack MERN"
   ],
   "keywords": [
      "Programacion",
      "Stack",
      "MongoDB",
      "Expresjs",
      "React",
      "NodeJS"
   ],
   "facultad": "Facultad de Ingenieria",
   "tipo": [
      "Videoconferencia"
   ],
   "categoria": [
      "Computacion"
   ],
   "fecha": "2023-04-20",
   "hora": "09:00",
   "lugar": "Aula de la Trujillanidad"
}
```

**Update-event.** Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con http://localhost:3000/app/update-event/:eventID (POST)

Para Probar el update-event. Ingresando el siguiente ejemplo en formato json
```
{
   "organizador": "Brian Santeliz",
   "participantes": ["Brian Santeliz"],
   "imagen": "multipart/form-data"
   "titulo": "Introduccion al Stack MERN",
   "descripcion": [
      "En esta ocasion enseñaremos las base del Stack MERN"
   ],
   "keywords": [
      "Programacion",
      "MongoDB",
      "Expresjs",
      "React",
      "NodeJS"
   ],
   "facultad": "Facultad de Ingenieria",
   "tipo": [
      "Videoconferencia"
   ],
   "categoria": [
      "Computacion"
   ],
   "fecha": "2023-04-24",
   "hora": "11:00",
   "lugar": "Aula de la Trujillanidad"
}
```

**Delete-event.** Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con http://localhost:3000/app/delete-event/:eventID (POST)

Para Probar el delete-event. Ingresando el siguiente ejemplo en formato json
```
{
  "userID": "643212eadb112bea4a6cd2a0"
}
```

## Construido con 🛠️

* [NodeJs](https://nodejs.org/dist/latest-v19.x/docs/api/)  19.8.1
* [Express](https://expressjs.com/en/5x/api.html)  4.18.2
* [MongoDB](https://www.mongodb.com/docs/)  6.0.4
* [Mongoose](https://mongoosejs.com/docs/)  7.0.2
* [Cloudinary](https://cloudinary.com/documentation/node_integration) 1.35.0

## Desarrollador ✒️

* **Alexander Avendaño** - *Desarrollador* - [Avendaosander](https://github.com/Avendaosander)
