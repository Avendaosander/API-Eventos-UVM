<div align="center">

<a href="https://uvm.edu.ve/">
   <img alt="Universidad Valle del Momboy" src="https://res.cloudinary.com/dtjgc9qlk/image/upload/c_scale,w_100,r_max/v1681758915/Eventos%20UVM/LOGO-RIF-1_vnfzds.webp" width="100" />
</a>

# **Api Eventos UVM**

🟢Este es el servidor oficial de la aplicación de eventos UVM desarrollado en el Stack MERN🟢

[![](https://res.cloudinary.com/dtjgc9qlk/image/upload/c_scale,w_150,r_max/v1681759279/Eventos%20UVM/MongoDB_r13ajm.png)](https://www.mongodb.com/docs/manual/)
[![](https://res.cloudinary.com/dtjgc9qlk/image/upload/c_scale,w_150,r_max/v1681759279/Eventos%20UVM/Expressjs_ewokei.webp)](https://expressjs.com/es/starter/installing.html)
[![](https://res.cloudinary.com/dtjgc9qlk/image/upload/c_scale,w_150,r_max/v1681759282/Eventos%20UVM/react_j0lfgm.webp)](https://beta.es.reactjs.org/)
[![](https://res.cloudinary.com/dtjgc9qlk/image/upload/c_scale,w_150,r_max/v1681759279/Eventos%20UVM/Nodejs_f1rqqz.webp)](https://nodejs.org/docs/latest-v19.x/api/)
</div>

## **Tabla de Contenidos** 📌
***
- [**Api Eventos UVM**](#api-eventos-uvm)
  - [**Tabla de Contenidos** 📌](#tabla-de-contenidos-)
  - [**Instalación** 🔧](#instalación-)
  - [**Ejecutando las pruebas** ⚙️](#ejecutando-las-pruebas-️)
        - [*NOTA*](#nota)
    - [**Endpoints**](#endpoints)
      - [**Register.**](#register)
      - [**Login.**](#login)
      - [🛡️**Register Admin.**](#️register-admin)
      - [🛡️**Dashboard.**](#️dashboard)
      - [🛡️**Eventos.**](#️eventos)
      - [🛡️**Old-Eventos.**](#️old-eventos)
      - [🛡️**Filter.**](#️filter)
      - [🛡️**Toggle-favorite.**](#️toggle-favorite)
      - [🛡️**Favoritos.**](#️favoritos)
      - [🛡️**Mis Eventos.**](#️mis-eventos)
      - [🛡️**Profile.**](#️profile)
      - [🛡️**Udpate-profile.**](#️udpate-profile)
      - [🛡️**Evento.**](#️evento)
      - [🛡️**Create-event.**](#️create-event)
      - [🛡️**Toggle-asist.**](#️toggle-asist)
      - [🛡️**Update-event.**](#️update-event)
      - [🛡️**Delete-event.**](#️delete-event)
    - [**Documentación Swagger** ](#documentación-swagger-)
  - [**Construido con** 🛠️](#construido-con-️)
  - [**Desarrollador** ✒️](#desarrollador-️)

## **Instalación** 🔧
***
Debe crear un archivo `.env` en la ruta raiz del proyecto `/`. El contenido de este archivo `.env` se encuentra en el notion del proyecto.
***
Una vez creado el archivo `.env`, abrir la terminal en la ruta raiz del proyecto y ejecutar el siguiente comando:
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

## **Ejecutando las pruebas** ⚙️
***
Iniciar el servidor desde la ruta raiz del proyecto "/"

##### *NOTA*
***
* Todos los endpoints que lleven al principio el icono 🛡️, Siginifica que es una ruta protegida y requiere  que la peticion contenga un header similar al siguente:
> authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2FjMWVlZmUxYjkyMTNjMTFlMjdhZiIsImlhdCI6MTY4MTc0NDEyNCwiZXhwIjoxNjgyMzQ4OTI0fQ.gud6ljUwI0861hoEVifkvwkMse4v8yeiHWyVaxGMbp0'

### **Endpoints**
***

#### **Register.** 
Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API. 
El modelo tiene una validacion que no permite guardar correos que ya esten registrados, ni nombres de usuarios que ya esten registrados. ruta:  `http://localhost:3000/register` (POST)

Para Probar el Register. Ingresando el siguiente ejemplo en formato json (POST)
```
{
  "username": "PruebaUsername",
  "email": "probando@gmail.com",
  "password": "123456789",
}
```
#### **Login.** 
Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con `http://localhost:3000/login` (POST)

Para Probar el Login. Ingresando el siguiente ejemplo en formato json
```
{
   "email":"probando@gmail.com",
   "password": "123456789"
}
```

#### 🛡️**Register Admin.** 
Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API. 
El modelo tiene una validacion que no permite guardar correos que ya esten registrados, ni nombres de usuarios que ya esten registrados. ruta:  `http://localhost:3000/register-admin/:adminID` (POST)

Para Probar el Register-Admin. Ingresando el siguiente ejemplo en formato json (POST)
```
{
  "username": "PruebaUsernameAdmin",
  "email": "probandoAdmin@gmail.com",
  "password": "123456789",
  "rol": "Admin"
}
```

#### 🛡️**Dashboard.** 
Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con `http://localhost:3000/app/dashboard` (GET)

Para ir a la ruta principal, esto mostrará 3 eventos proximos, 3 Eventos Recientes y 3 eventos disponibles para hoy (Si es que hay).
```
http://localhost:3000/app/dashboard
```

#### 🛡️**Eventos.** 
Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con `http://localhost:3000/app/events` (GET)

Para ir a la ruta de eventos, esto mostrará todos los eventos proximos a la fecha actual, con un paginador de 9 en 9
```
http://localhost:3000/app/events?page=1
```

#### 🛡️**Old-Eventos.** 
Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con `http://localhost:3000/app/old-events` (GET)

Para ir a la ruta de eventos pasados, esto mostrará todos los eventos anteriores a la fecha actual, con un paginador de 9 en 9
```
http://localhost:3000/app/old-events?page=1
```

#### 🛡️**Filter.** 
Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con `http://localhost:3000/app/filters?page=1` (POST)

Para Probar la busqueda por filtros, esto mostrará todos los eventos que coincidan con la busqueda realizada, con un paginador de 9 en 9. Ingrese un solo ejemplo en formato json, acá algunas opciones:
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

#### 🛡️**Toggle-favorite.** 
Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con `http://localhost:3000/app/toggle-favorite/:eventID` (POST)

Para Probar el toggle-favorite, esto cambiará el estado de favorito en verdadero o falso. Ingresando el siguiente ejemplo en formato json
```
{
  "userID": "643212eadb112bea4a6cd2a0"
}
```

#### 🛡️**Favoritos.** 
Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con `http://localhost:3000/app/favorites/:userID` (GET)

Para ir a la ruta de Favoritos, esto mostrará todos los eventos favoritos de un Usuario
```
http://localhost:3000/app/favorites/:userID
```

#### 🛡️**Mis Eventos.** 
Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con `http://localhost:3000/app/my-events/:adminID` (GET)

Para ir a la ruta de Mis Eventos, esto mostrará todos los eventos creados del Administrador
```
http://localhost:3000/app/my-events/:adminID
```

#### 🛡️**Profile.** 
Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con `http://localhost:3000/app/profile/:userID` (GET)

Para ir a la ruta del Perfil, esto mostrará los datos del usuario
```
http://localhost:3000/app/profile/:userID
```

#### 🛡️**Udpate-profile.** 
Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con `http://localhost:3000/app/update-profile/:userID` (POST)

Para Probar el udpate-profile, esto permite modificar datos del perfil del usuario. Ingresando el siguiente ejemplo en formato json
```
{
  "nombre": "Pedro",
  "apellido": "Perez",
  "edad": 25
}
```

#### 🛡️**Evento.** 
Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con `http://localhost:3000/events/event/:eventID` (GET)

Para ir a la ruta de un evento, esto mostrará el evento solicitado
```
http://localhost:3000/events/event/:eventID
```

#### 🛡️**Create-event.** 
Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con `http://localhost:3000/app/create-event/:userID` (POST)

Para Probar el create-event, esto permite crear un evento. Ingresando el siguiente ejemplo en formato json
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

#### 🛡️**Toggle-asist.** 
Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con `http://localhost:3000/app/toggle-asist/:userID` (POST)

Para Probar el toggle-asist, esto permite cambiar el estado de asistencia de un usuario a un evento, devolviendo el array de asistencia del evento. Ingresando el siguiente ejemplo en formato json
```
{
  "eventID": "643c39d2f4fbc887773b7b3b"
}
```

#### 🛡️**Update-event.** 
Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con `http://localhost:3000/app/update-event/:eventID` (POST)

Para Probar el update-event, esto permite modificar los datos de un evento que el Admin haya creado. Ingresando el siguiente ejemplo en formato json
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

#### 🛡️**Delete-event.** 
Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con `http://localhost:3000/app/delete-event/:eventID` (POST)

Para Probar el delete-event, esto permite eliminar un evento que el Admin haya creado. Ingresando el siguiente ejemplo en formato json
```
{
  "userID": "643212eadb112bea4a6cd2a0"
}
```
### **Documentación Swagger** [![](https://res.cloudinary.com/dtjgc9qlk/image/upload/c_scale,w_80/v1681761836/Eventos%20UVM/Swagger_isboo0.webp)](https://swagger.io/specification/)
Para ver la documentación oficial de la API con Swagger debe ejecutar el servidor e ir a la siguiente ruta:
```
http://localhost:3000/documentacion
```
Aqui encontrará el funcionamiento de activo de este servidor con todas los endpoints disponibles 

## **Construido con** 🛠️

* [NodeJs](https://nodejs.org/dist/latest-v19.x/docs/api/)  19.8.1
* [Express](https://expressjs.com/en/5x/api.html)  4.18.2
* [MongoDB](https://www.mongodb.com/docs/)  6.0.4
* [Mongoose](https://mongoosejs.com/docs/)  7.0.2
* [Cloudinary](https://cloudinary.com/documentation/node_integration) 1.35.0
* [JWT](https://www.npmjs.com/package/jsonwebtoken) 9.0.0

## **Desarrollador** ✒️

* **Alexander Avendaño** - *Desarrollador* - [Avendaosander](https://github.com/Avendaosander)
