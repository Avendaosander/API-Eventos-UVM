/* SCHEMAS DE SWAGGER */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: apiKey
 *       name: authorization
 *       in: header
 *       description: "Ejemplo valido: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2FjMWVlZmUxYjkyMTNjMTFlMjdhZiIsImlhdCI6MTY4MTc0NDEyNCwiZXhwIjoxNjgyMzQ4OTI0fQ.gud6ljUwI0861hoEVifkvwkMse4v8yeiHWyVaxGMbp0"
 */

/**
 * @swagger
 * components:
 *    schemas:
 *       StatusCode401:
 *          type: object
 *          properties:
 *             messageError:
 *                type: string
 *                description: Mensaje referente al Error 
 *                example: UNAUTHORIZED
 *          required:
 *             - messageError
 */

/**
 * @swagger
 * components:
 *    schemas:
 *       StatusCode404:
 *          type: object
 *          properties:
 *             messageError:
 *                type: string
 *                description: Mensaje referente al Error 
 *                example: NOT_FOUND
 *          required:
 *             - messageError
 */

/**
 * @swagger
 * components:
 *    schemas:
 *       StatusCode500:
 *          type: object
 *          properties:
 *             messageError:
 *                type: string
 *                description: Mensaje referente al Error 
 *                example: INTERNAL_SERVER_ERROR
 *          required:
 *             - messageError
 */

/**
 * @swagger
 * components:
 *    schemas:
 *       Register:
 *          type: object
 *          properties:
 *             username:
 *                type: string
 *                description: Nombre de Usuario
 *                example: Pruebasusername
 *             email:
 *                type: string
 *                description: Correo Electronico del Usuario
 *                example: pruebas@gmail.com
 *             password:
 *                type: string
 *                description: Contraseña del Usuario
 *                example: "123456789"
 *          required:
 *             - username
 *             - email
 *             - password
 */

/**
 * @swagger
 * components:
 *    schemas:
 *       ResgisterResponse:
 *          type: object
 *          properties: 
 *             token:
 *                type: string
 *                description: Token del usuario
 *                example: "eyJpZCI6IjY0MzIxMmVhZGIxMTJiZWE0YTZjZDJhMCJ9"
 *             user:
 *                type: object
 *                properties: 
 *                   rol: 
 *                      type: string
 *                      description: Rol del usuario
 *                      example: "User"
 *                required:
 *                   - rol
 *          required:
 *             - token
 *             - user
 */

/**
 * @swagger
 * components:
 *    schemas:
 *       RegisterAdmin:
 *          type: object
 *          properties:
 *             username:
 *                type: string
 *                description: Nombre de Usuario
 *                example: Adminprueba
 *             email:
 *                type: string
 *                description: Correo Electronico del Usuario
 *                example: adminprueba@gmail.com
 *             password:
 *                type: string
 *                description: Contraseña del Usuario
 *                example: "123456789"
 *             rol:
 *                type: string
 *                description: Rol del Usuario
 *                example: "Admin"
 *          required:
 *             - username
 *             - email
 *             - password
 *             - rol
 */

/**
 * @swagger
 * components:
 *    schemas:
 *       Login:
 *          type: object
 *          properties:
 *             email:
 *                type: string
 *                description: Correo Electronico del Usuario
 *                example: pruebas@gmail.com
 *             password:
 *                type: string
 *                description: Contraseña del Usuario
 *                example: "123456789"
 *          required:
 *             - email
 *             - password
 */

/**
 * @swagger
 * components:
 *    schemas:
 *       LoginResponse:
 *          type: object
 *          properties: 
 *             token:
 *                type: string
 *                description: Token del usuario
 *                example: "eyJpZCI6IjY0MzIxMmVhZGIxMTJiZWE0YTZjZDJhMCJ9"
 *             user:
 *                type: object
 *                properties: 
 *                   username: 
 *                      type: string
 *                      description: Nombre de usuario
 *                      example: Pruebasusername
 *                   imgPerfil: 
 *                      type: string
 *                      description: URL del Avatar del usuario
 *                      example: "https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681571008/Eventos%20UVM-Profile/1681571009816-user128.png"
 *                   favorites: 
 *                      type: array
 *                      description: Array con los IDs de los eventos favoridos del usuario
 *                      example: ["642b0ab52e6b08871274ce20","641ca66ab506d339669a7d0f"]
 *                   rol: 
 *                      type: string
 *                      description: Rol del usuario
 *                      example: "User"
 *                required:
 *                   - username
 *                   - imgPerfil
 *                   - favorites
 *                   - rol
 *          required:
 *             - token
 *             - user
 */

/**
 * @swagger
 * components:
 *    schemas:
 *       Dashboard:
 *          type: object
 *          properties:
 *             proximos:
 *                type: array
 *                items:
 *                   type: object
 *                   properties:
 *                      _id:
 *                         type: string
 *                         description: ID unico generado por MongoDB
 *                         example: 643c39d2f4fbc887773b7b3b
 *                      imagen:
 *                         type: object
 *                         properties:
 *                            public_id:
 *                               type: string
 *                               description: ID de la imagen en Cloudinary
 *                               example: Eventos UVM-Events/Titulo_para_la_UVM_tj3wt1
 *                            secure_url:
 *                               type: string
 *                               description: URL de la imagen de Cloudinary
 *                               example: https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681569125/Eventos%20UVM-Events/Titulo_para_la_UVM_tj3wt1.jpg
 *                      titulo:
 *                         type: string
 *                         description: Titulo del Evento
 *                         example: Introduccion al Stack MERN
 *                      fecha:
 *                         type: string
 *                         description: Fecha del Evento
 *                         example: 2023-04-20  
 *                      hora:
 *                         type: string
 *                         description: Hora del Evento
 *                         example: 09:00
 *                      lugar:
 *                         type: string
 *                         description: Lugar del Evento
 *                         example: Aula de la Trujillanidad
 *                   required: 
 *                      - _id
 *                      - imagen
 *                      - titulo
 *                      - fecha
 *                      - hora
 *                      - lugar
 *             recientes:
 *                type: array
 *                items:
 *                   type: object
 *                   properties:
 *                      _id:
 *                         type: string
 *                         description: ID unico generado por MongoDB
 *                         example: 643c39d2f4fbc887773b7b3b
 *                      imagen:
 *                         type: object
 *                         properties:
 *                            public_id:
 *                               type: string
 *                               description: ID de la imagen en Cloudinary
 *                               example: Eventos UVM-Events/Titulo_para_la_UVM_tj3wt1
 *                            secure_url:
 *                               type: string
 *                               description: URL de la imagen de Cloudinary
 *                               example: https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681569125/Eventos%20UVM-Events/Titulo_para_la_UVM_tj3wt1.jpg
 *                      titulo:
 *                         type: string
 *                         description: Titulo del Evento
 *                         example: Introduccion al Stack MERN
 *                      fecha:
 *                         type: string
 *                         description: Fecha del Evento
 *                         example: 2023-04-20  
 *                      hora:
 *                         type: string
 *                         description: Hora del Evento
 *                         example: 09:00
 *                      lugar:
 *                         type: string
 *                         description: Lugar del Evento
 *                         example: Aula de la Trujillanidad
 *                   required: 
 *                      - _id
 *                      - imagen
 *                      - titulo
 *                      - fecha
 *                      - hora
 *                      - lugar
 *             eventsToday:
 *                type: array
 *                items:
 *                   type: object
 *                   properties:
 *                      _id:
 *                         type: string
 *                         description: ID unico generado por MongoDB
 *                         example: 643c39d2f4fbc887773b7b3b
 *                      imagen:
 *                         type: object
 *                         properties:
 *                            public_id:
 *                               type: string
 *                               description: ID de la imagen en Cloudinary
 *                               example: Eventos UVM-Events/Titulo_para_la_UVM_tj3wt1
 *                            secure_url:
 *                               type: string
 *                               description: URL de la imagen de Cloudinary
 *                               example: https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681569125/Eventos%20UVM-Events/Titulo_para_la_UVM_tj3wt1.jpg
 *                      titulo:
 *                         type: string
 *                         description: Titulo del Evento
 *                         example: Introduccion al Stack MERN
 *                      fecha:
 *                         type: string
 *                         description: Fecha del Evento
 *                         example: 2023-04-20  
 *                      hora:
 *                         type: string
 *                         description: Hora del Evento
 *                         example: 09:00
 *                      lugar:
 *                         type: string
 *                         description: Lugar del Evento
 *                         example: Aula de la Trujillanidad
 *                   required: 
 *                      - _id
 *                      - imagen
 *                      - titulo
 *                      - fecha
 *                      - hora
 *                      - lugar
 *          required:
 *             - proximos
 *             - recientes
 *             - eventsToday
 */

/**
 * @swagger
 * components:
 *    schemas:
 *       EventsPager:
 *          type: object
 *          properties:
 *             eventos:
 *                type: array
 *                items:
 *                   type: object
 *                   properties:
 *                      _id:
 *                         type: string
 *                         description: ID unico generado por MongoDB
 *                         example: 643c39d2f4fbc887773b7b3b
 *                      imagen:
 *                         type: object
 *                         properties:
 *                            public_id:
 *                               type: string
 *                               description: ID de la imagen en Cloudinary
 *                               example: Eventos UVM-Events/Titulo_para_la_UVM_tj3wt1
 *                            secure_url:
 *                               type: string
 *                               description: URL de la imagen de Cloudinary
 *                               example: https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681569125/Eventos%20UVM-Events/Titulo_para_la_UVM_tj3wt1.jpg
 *                         required:
 *                           - public_id
 *                           - secure_url
 *                      titulo:
 *                         type: string
 *                         description: Titulo del Evento
 *                         example: Introduccion al Stack MERN
 *                      fecha:
 *                         type: string
 *                         description: Fecha del Evento
 *                         example: 2023-04-20  
 *                      hora:
 *                         type: string
 *                         description: Hora del Evento
 *                         example: 09:00
 *                      lugar:
 *                         type: string
 *                         description: Lugar del Evento
 *                         example: Aula de la Trujillanidad
 *                   required: 
 *                      - _id
 *                      - imagen
 *                      - titulo
 *                      - fecha
 *                      - hora
 *                      - lugar
 *             paginaActual:
 *                type: number
 *                example: 1
 *             totalPages:
 *                type: number
 *                example: 2
 *          required: 
 *             - eventos
 *             - paginaActual
 *             - totalPages
 */

/**
 * @swagger
 * components:
 *    schemas:
 *       Filter:
 *          type: object
 *          properties: 
 *             categoria:
 *                type: string
 *                description: Nombre de la categoria para filtrar 
 *                example: "Computacion"
 *          required:
 *             - categoria
 */

/**
 * @swagger
 * components:
 *    schemas:
 *       ToggleFavorite:
 *          type: object
 *          properties:
 *             userID:
 *                type: string
 *                description: ID del Usuario 
 *                example: 643212eadb112bea4a6cd2a0
 *          required:
 *             - userID
 */

/**
 * @swagger
 * components:
 *    schemas:
 *       ToggleFav-respuesta:
 *          type: object
 *          properties:
 *             fav:
 *                type: boolean
 *                description: Estado booleano si se encuentra el evento entre los favoritos del usuario
 *                example: "True"
 *          required:
 *             - fav
 */

/**
 * @swagger
 * components:
 *    schemas:
 *       Favorites:
 *          type: object
 *          properties:
 *             eventos:
 *                type: array
 *                items:
 *                   type: object
 *                   properties:
 *                      _id:
 *                         type: string
 *                         description: ID unico generado por MongoDB
 *                         example: 643c39d2f4fbc887773b7b3b
 *                      imagen:
 *                         type: object
 *                         properties:
 *                            public_id:
 *                               type: string
 *                               description: ID de la imagen en Cloudinary
 *                               example: Eventos UVM-Events/Titulo_para_la_UVM_tj3wt1
 *                            secure_url:
 *                               type: string
 *                               description: URL de la imagen de Cloudinary
 *                               example: https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681569125/Eventos%20UVM-Events/Titulo_para_la_UVM_tj3wt1.jpg
 *                         required:
 *                           - public_id
 *                           - secure_url
 *                      titulo:
 *                         type: string
 *                         description: Titulo del Evento
 *                         example: Introduccion al Stack MERN
 *                      fecha:
 *                         type: string
 *                         description: Fecha del Evento
 *                         example: 2023-04-20 
 *                      hora:
 *                         type: string
 *                         description: Hora del Evento
 *                         example: 09:00  
 *                      lugar:
 *                         type: string
 *                         description: Lugar del Evento
 *                         example: Aula de la Trujillanidad
 *                   required: 
 *                      - _id
 *                      - imagen
 *                      - titulo
 *                      - fecha
 *                      - hora
 *                      - lugar
 *          required:
 *             - eventos
 */

/**
 * @swagger
 * components:
 *    schemas:
 *       My-Events:
 *          type: object
 *          properties:
 *             misEventos:
 *                type: array
 *                items:
 *                   type: object
 *                   properties:
 *                      _id:
 *                         type: string
 *                         description: ID unico generado por MongoDB
 *                         example: 643c39d2f4fbc887773b7b3b
 *                      imagen:
 *                         type: object
 *                         properties:
 *                            public_id:
 *                               type: string
 *                               description: ID de la imagen en Cloudinary
 *                               example: Eventos UVM-Events/Titulo_para_la_UVM_tj3wt1
 *                            secure_url:
 *                               type: string
 *                               description: URL de la imagen de Cloudinary
 *                               example: https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681569125/Eventos%20UVM-Events/Titulo_para_la_UVM_tj3wt1.jpg
 *                      titulo:
 *                         type: string
 *                         description: Titulo del Evento
 *                         example: Introduccion al Stack MERN
 *                      fecha:
 *                         type: string
 *                         description: Fecha del Evento
 *                         example: 2023-04-20  
 *                      hora:
 *                         type: string
 *                         description: Hora del Evento
 *                         example: 09:00
 *                      lugar:
 *                         type: string
 *                         description: Lugar del Evento
 *                         example: Aula de la Trujillanidad
 *                      createdBy:
 *                         type: string
 *                         description: ID del Admin que creo el evento
 *                         example: 643212eadb112bea4a6cd2a0
 *                   required: 
 *                      - _id
 *                      - imagen
 *                      - titulo
 *                      - fecha
 *                      - hora
 *                      - lugar
 *                      - createdBy
 *          required:
 *             - misEventos
*/

/**
 * @swagger
 * components:
 *    schemas:
 *       Profile:
 *          type: object
 *          properties:
 *             username:
 *                type: string
 *                description: Nombre de Usuario
 *                example: AdminUVM
 *             imgPerfil:
 *                type: object
 *                properties:
 *                   public_id:
 *                      type: string
 *                      description: ID de la imagen en Cloudinary
 *                      example: Eventos UVM-Profile/1681571009816-user128
 *                   secure_url:
 *                      type: string
 *                      description: URL de la imagen de Cloudinary
 *                      example: https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681571008/Eventos%20UVM-Profile/1681571009816-user128.png
 *             nombre:
 *                type: string
 *                description: Nombre del Usuario
 *                example: Administrador
 *             apellido:
 *                type: string
 *                description: Apellido del Usuario
 *                example: Desarrollo
 *             biografia:
 *                type: string
 *                description: Biagrafia del Usuario
 *                example: "Este es un Administrador de desarrollo"
 *             edad:
 *                type: integer
 *                description: Edad del Usuario
 *                example: 20
 *             telefono:
 *                type: string
 *                description: Telefono del Usuario
 *                example: "04265121891"
 *             email:
 *                type: string
 *                description: Correo Electronico del Usuario
 *                email: eventos@uvm.edu.ve
 *             password:
 *                type: string
 *                description: Contraseña del Usuario
 *                example: "123456789"
 *             rol:
 *                type: string
 *                description: Rol del Usuario
 *                example: "Admin"
 *             favorites:
 *                type: array of strings
 *                description: IDs de los evento favoritos
 *                example: ["642b0ab52e6b08871274ce20", "641ca66ab506d339669a7d0f"] 
 *             confirmEvent:
 *                type: array of strings
 *                description: IDs de los eventos a los que ha confirmado su asistencia
 *                example: ["642b0ab52e6b08871274ce20", "641ca66ab506d339669a7d0f"] 
 *          required:
 *             - imgPerfil
 *             - username
 *             - nombre
 *             - apellido
 *             - biografia
 *             - edad
 *             - telefono
 *             - email
 *             - password
 *             - rol
 *             - favorites
 *             - confirmEvent
 */

/**
 * @swagger
 * components:
 *    schemas:
 *       FormProfile:
 *          type: object
 *          properties:
 *             imgPerfil:
 *                type: string
 *                format: binary
 *                description: Nueva imagen de perfil del usuario
 *             nombre:
 *                type: string
 *                description: Nombre del Usuario
 *                example: Alexander
 *             apellido:
 *                type: string
 *                description: Apellido del Usuario
 *                example: Avendaño
 *             biografia:
 *                type: string
 *                description: Biagrafia del Administrador
 *                example: "Esta es una biografia de ejemplo para SWAGGER"
 *             edad:
 *                type: integer
 *                description: Edad del Usuario
 *                example: 20
 *             telefono:
 *                type: string
 *                description: Telefono del Usuario
 *                example: "04265121891"
 */

/**
 * @swagger
 * components:
 *    schemas:
 *       Evento:
 *          type: object
 *          properties:
 *             evento:
 *                type: array
 *                items:
 *                   properties:
 *                      _id:
 *                         type: string
 *                         description: ID unico generado por MongoDB
 *                         example: 643c39d2f4fbc887773b7b3b
 *                      organizador:
 *                         type: string
 *                         description: Nombre del organizador del Evento
 *                         example: Brian Santeliz
 *                      participantes:
 *                         type: array of strings
 *                         description: Nombre de los participantes del Evento
 *                         example: ["Brian Santeliz", "Roberto De Michele"]
 *                      imagen:
 *                         type: object
 *                         properties:
 *                            public_id:
 *                               type: string
 *                               description: ID de la imagen en Cloudinary
 *                               example: Eventos UVM-Events/Titulo_para_la_UVM_tj3wt1
 *                            secure_url:
 *                               type: string
 *                               description: URL de la imagen de Cloudinary
 *                               example: https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681569125/Eventos%20UVM-Events/Titulo_para_la_UVM_tj3wt1.jpg
 *                         required:
 *                           - public_id
 *                           - secure_url
 *                      titulo:
 *                         type: string
 *                         description: Titulo del Evento
 *                         example: Introduccion al Stack MERN
 *                      descripcion:
 *                         type: array of strings
 *                         description: Descripcion del Evento
 *                         example: ["En esta ocasion enseñaremos las base del Stack MERN"]
 *                      keywords:
 *                         type: array of strings
 *                         description: Palabras claves del Evento
 *                         example: ["Programacion", "Stack", "MongoDB", "Expresjs", "React", "NodeJS" ]
 *                      facultad:
 *                         type: string
 *                         description: Facultad relacionada al Evento
 *                         example: Facultad de Ingenieria 
 *                      tipo:
 *                         type: array of strings
 *                         description: Tipo de Evento
 *                         example: ["Videoconferencia"]
 *                      categoria:
 *                         type: array of strings
 *                         description: Categoria relaciona con el Evento
 *                         example: ["Computacion"] 
 *                      fecha:
 *                         type: string
 *                         description: Fecha del Evento
 *                         example: 2023-04-20  
 *                      hora:
 *                         type: string
 *                         description: Hora del Evento
 *                         example: 09:00   
 *                      duracion:
 *                         type: string
 *                         description: Duracion del Evento
 *                         example: 02:00  
 *                      lugar:
 *                         type: string
 *                         description: Lugar del Evento
 *                         example: Aula de la Trujillanidad
 *                      asistencia:
 *                         type: array
 *                         items:
 *                            type: object
 *                            properties:
 *                               _id:
 *                                  type: string
 *                                  description: ID unico generado por MongoDB
 *                                  example: 643c39d2f4fbc887773b7b3b
 *                               username:
 *                                  type: string
 *                                  description: Nommbre de usuario
 *                                  example: AdminUVM
 *                               imgPerfil:
 *                                  type: object
 *                                  properties:
 *                                     public_id:
 *                                        type: string
 *                                        description: ID de la imagen en Cloudinary
 *                                        example: Eventos UVM-Profile/1681571009816-user128
 *                                     secure_url:
 *                                        type: string
 *                                        description: URL de la imagen de Cloudinary
 *                                        example: https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681571008/Eventos%20UVM-Profile/1681571009816-user128.png
 *                                  required:
 *                                     - public_id
 *                                     - secure_url
 *                            required:
 *                               - _id
 *                               - username
 *                               - imgPerfil
 *                         description: Array con los id de los usuarios que asistiran al evento
 *                   required: 
 *                      - _id
 *                      - organizador
 *                      - participantes
 *                      - imagen
 *                      - titulo
 *                      - descripcion
 *                      - keywords
 *                      - facultad
 *                      - tipo
 *                      - categoria
 *                      - fecha
 *                      - hora
 *                      - lugar
 *                      - asistencia
 *          required: 
 *             - evento
 */

/**
 * @swagger
 * components:
 *    schemas:
 *       ToggleAsist:
 *          type: object
 *          properties:
 *             eventID:
 *                type: string
 *                description: ID del Evento 
 *                example: 643c39d2f4fbc887773b7b3b
 *          required:
 *             - eventID
 */

/**
 * @swagger
 * components:
 *    schemas:
 *       ToggleAsistResponse:
 *          type: object
 *          properties:
 *             asistencia:
 *                type: array
 *                items:
 *                   type: object
 *                   properties:
 *                      _id:
 *                         type: string
 *                         description: ID unico generado por MongoDB
 *                         example: 643c39d2f4fbc887773b7b3b
 *                      username:
 *                         type: string
 *                         description: Nommbre de usuario
 *                         example: AdminUVM
 *                      imgPerfil:
 *                         type: object
 *                         properties:
 *                            public_id:
 *                               type: string
 *                               description: ID de la imagen en Cloudinary
 *                               example: Eventos UVM-Profile/1681571009816-user128
 *                            secure_url:
 *                               type: string
 *                               description: URL de la imagen de Cloudinary
 *                               example: https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681571008/Eventos%20UVM-Profile/1681571009816-user128.png
 *                         required:
 *                            - public_id
 *                            - secure_url
 *                   required:
 *                      - _id
 *                      - username
 *                      - imgPerfil
 *                description: Array de usuarios que participaran al evento
 *          required:
 *             - asistencia
 */

/**
 * @swagger
 * components:
 *    schemas:
 *       FormEvent:
 *          type: object
 *          properties:
 *             organizador:
 *                type: string
 *                description: Nombre del organizador del Evento
 *                example: Brian Santeliz
 *             participantes:
 *                type: array of strings
 *                description: Nombre de los participantes del Evento
 *                example: "Roberto De Michele"
 *             imagen:
 *                type: string
 *                format: binary
 *                description: Nueva imagen del evento
 *                example: WelcomeUVM.png
 *             titulo:
 *                type: string
 *                description: Titulo del Evento
 *                example: Introduccion al Stack MERN
 *             descripcion:
 *                type: array of strings
 *                description: Descripcion del Evento
 *                example: "En esta ocasion enseñaremos las base del Stack MERN"
 *             keywords:
 *                type: array of strings
 *                description: Palabras claves del Evento
 *                example: "Programacion"
 *             facultad:
 *                type: string
 *                description: Facultad relacionada al Evento
 *                example: Facultad de Ingenieria 
 *             tipo:
 *                type: array of strings
 *                description: Tipo de Evento
 *                example: "Videoconferencia"
 *             categoria:
 *                type: array of strings
 *                description: Categoria relaciona con el Evento
 *                example: "Computacion"
 *             fecha:
 *                type: string
 *                description: Fecha del Evento
 *                example: 2023-04-20  
 *             hora:
 *                type: string
 *                description: Hora del Evento
 *                example: 09:00   
 *             duracion:
 *                type: string
 *                description: Duracion del Evento
 *             lugar:
 *                type: string
 *                description: Lugar del Evento
 *                example: Aula de la Trujillanidad
 *          required: 
 *             - organizador
 *             - participantes
 *             - imagen
 *             - titulo
 *             - descripcion
 *             - keywords
 *             - facultad
 *             - tipo
 *             - categoria
 *             - fecha
 *             - hora
 *             - lugar
 */

/**
 * @swagger
 * components:
 *    schemas:
 *       FormEventResponse:
 *          type: object
 *          properties:
 *             evento:
 *                type: string
 *                description: ID del evento
 *                example: 643c39d2f4fbc887773b7b3b
 *          required:
 *             - evento
 */

/**
 * @swagger
 * components:
 *    schemas:
 *       UpdateEvent:
 *          type: object
 *          properties:
 *             organizador:
 *                type: string
 *                description: Nombre del organizador del Evento
 *                example: Brian Santeliz
 *             participantes:
 *                type: array of strings
 *                description: Nombre de los participantes del Evento
 *                example: "Roberto De Michele"
 *             imagen:
 *                type: string
 *                format: binary
 *                description: Nueva imagen del evento
 *                example: WelcomeUVM.png
 *             titulo:
 *                type: string
 *                description: Titulo del Evento
 *                example: Introduccion al Stack MERN
 *             descripcion:
 *                type: array of strings
 *                description: Descripcion del Evento
 *                example: "En esta ocasion enseñaremos las base del Stack MERN"
 *             keywords:
 *                type: array of strings
 *                description: Palabras claves del Evento
 *                example: "Programacion"
 *             facultad:
 *                type: string
 *                description: Facultad relacionada al Evento
 *                example: Facultad de Ingenieria 
 *             tipo:
 *                type: array of strings
 *                description: Tipo de Evento
 *                example: "Videoconferencia"
 *             categoria:
 *                type: array of strings
 *                description: Categoria relaciona con el Evento
 *                example: "Computacion"
 *             fecha:
 *                type: string
 *                description: Fecha del Evento
 *                example: 2023-04-20  
 *             hora:
 *                type: string
 *                description: Hora del Evento
 *                example: 09:00   
 *             duracion:
 *                type: string
 *                description: Duracion del Evento
 *                example: 02:00  
 *             lugar:
 *                type: string
 *                description: Lugar del Evento
 *                example: Aula de la Trujillanidad
 */

/**
 * @swagger
 * components:
 *    schemas:
 *       DeleteEventPost:
 *          type: object
 *          properties: 
 *             userID:
 *                type: string
 *                description: ID del Administrador
 *                example: "643212eadb112bea4a6cd2a0"
 *          required:
 *             - userID
 */

/* DOCUMENTACION DE LAS RUTAS DE AUTH */

/**
 * @swagger
 * /register:
 *    post:
 *       summary: Crear un nuevo Usuario
 *       description: Esta ruta permite crear un nuevo User, donde la propiedad username y email deben ser unicos
 *       tags: [Register]
 *       requestBody: 
 *          required: true 
 *          content:  
 *             application/json:  
 *                schema:  
 *                   type: object  
 *                   $ref: '#/components/schemas/Register'
 *       responses:
 *          201:
 *             description: Nuevo Usuario Agregado
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/ResgisterResponse'
 *          404:
 *             description: NOT_FOUND
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode404'
 *          500:
 *             description: INTERNAL_SERVER_ERROR
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode500'
 */

/**
 * @swagger
 * /register-admin/{adminID}:
 *    post:
 *       summary: Crear un nuevo Administrador
 *       description: Esta ruta permite crear un nuevo Admin, donde la propiedad username y email deben ser unicos
 *       tags: [Register]
 *       security:
 *          - bearerAuth: []
 *       parameters: 
 *          - in: path 
 *            name: adminID 
 *            schema: 
 *             type: string
 *             example: 643212eadb112bea4a6cd2a0
 *            required: true 
 *            description: ID del administrador
 *       requestBody: 
 *          required: true 
 *          content:  
 *             application/json:  
 *                schema:  
 *                   type: object  
 *                   $ref: '#/components/schemas/RegisterAdmin'
 *       responses:
 *          201:
 *             description: Nuevo Administrador Agregado
 *          401:
 *             description: UNAUTHORIZED
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode401'
 *          404:
 *             description: NOT_FOUND
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode404'
 *          500:
 *             description: INTERNAL_SERVER_ERROR
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode500'
 */

/**
 * @swagger
 * /login:
 *    post:
 *       summary: Iniciar Sesion
 *       description: Esta ruta permite iniciar sesión al cliente, y el servidor compara sus datos ingresados y si son correctos le devuelve un token que le permite el accesso a la aplicación
 *       tags: [Login]
 *       requestBody: 
 *          required: true 
 *          content:  
 *             application/json:  
 *                schema:  
 *                   type: object  
 *                   $ref: '#/components/schemas/Login'
 *       responses:
 *          200:
 *             description: Inicio de Sesion exitoso
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/LoginResponse'
 *          404:
 *             description: NOT_FOUND
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode404'
 *          500:
 *             description: INTERNAL_SERVER_ERROR
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode500'
 */

/* DOCUMENTACION DE LAS RUTAS DE APP */

/**
 * @swagger
 * /app/dashboard:
 *    get:
 *       summary: Obtener 3 eventos proximos, 3 recientes y todos los disponibles para hoy
 *       description: Esta ruta devuelve al cliente maximo 3 eventos proximos, maximo 3 eventos recientes y todos los eventos disponibles para la fecha actual
 *       tags: [APP]
 *       security:
 *          - bearerAuth: []
 *       responses:
 *          200:
 *             description: Eventos Encontrados
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/Dashboard'
 *          401:
 *             description: UNAUTHORIZED
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode401'
 *          500:
 *             description: INTERNAL_SERVER_ERROR
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode500'
 */

/**
 * @swagger
 * /app/events:
 *    get:
 *       summary: Obtener todos los eventos proximos a la fecha actual
 *       description: Esta ruta devuelve al cliente todos los eventos proximos a la fecha actual
 *       tags: [APP]
 *       security:
 *          - bearerAuth: []
 *       parameters: 
 *          - in: query 
 *            name: page 
 *            schema: 
 *             type: string 
 *             example: 2
 *            description: Pagina a buscar 
 *       responses:
 *          200:
 *             description: Eventos Encontrados
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/EventsPager'
 *          401:
 *             description: UNAUTHORIZED
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode401'
 *          404:
 *             description: NOT_FOUND
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode404'
 *          500:
 *             description: INTERNAL_SERVER_ERROR
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode500'
 */

/**
 * @swagger
 * /app/old-events:
 *    get:
 *       summary: Obtener todos los eventos anteriores a la fecha actual
 *       description: Esta ruta devuelve al cliente todos los eventos anteriores a la fecha actual
 *       tags: [APP]
 *       security:
 *          - bearerAuth: []
 *       parameters: 
 *          - in: query 
 *            name: page 
 *            schema: 
 *             type: string 
 *             example: 2
 *            description: Pagina a buscar 
 *       responses:
 *          200:
 *             description: Eventos Encontrados
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/EventsPager'
 *          401:
 *             description: UNAUTHORIZED
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode401'
 *          404:
 *             description: NOT_FOUND
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode404'
 *          500:
 *             description: INTERNAL_SERVER_ERROR
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode500'
 */

/**
 * @swagger
 * /app/filters:
 *    post:
 *       summary: Filtrar Eventos por un filtro
 *       description: Esta ruta devuelve al cliente todos los eventos que coincidan con la busqueda realizada donde el filtro puede ser cualquier propiedad del evento (id, titulo, categorias, facultad, typeEvents, fecha...)
 *       tags: [APP]
 *       security:
 *          - bearerAuth: []
 *       parameters: 
 *          - in: query 
 *            name: page 
 *            schema: 
 *             type: string 
 *             example: 2
 *            description: Pagina a buscar 
 *       requestBody: 
 *          required: true 
 *          content:  
 *             application/json:  
 *                schema:  
 *                   type: object  
 *                   $ref: '#/components/schemas/Filter'
 *       responses:
 *          200:
 *             description: Eventos filtrados por FILTRO
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/EventsPager' 
 *          401:
 *             description: UNAUTHORIZED
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode401'
 *          404:
 *             description: NOT_FOUND
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode404'
 *          500:
 *             description: INTERNAL_SERVER_ERROR
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode500'                   
 */

/**
 * @swagger
 * /app/toggle-favorite/{eventID}:
 *    post:
 *       summary: Cambiar un evento favorito del usuario
 *       description: Esta ruta devuelve al cliente un objeto con la propiedad fav con un valor booleano que indica si se encuentra entre sus favoritos (true) o no (false) 
 *       tags: [APP]
 *       security:
 *          - bearerAuth: []
 *       parameters: 
 *          - in: path 
 *            name: eventID 
 *            schema: 
 *             type: string 
 *             example: 643c39d2f4fbc887773b7b3b
 *            required: true 
 *            description: ID del evento a manejar 
 *       requestBody: 
 *          required: true 
 *          content:  
 *             application/json:  
 *                schema:  
 *                   type: object  
 *                   $ref: '#/components/schemas/ToggleFavorite'
 *       responses:
 *          200:
 *             description: Evento favorito ha cambiado
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/ToggleFav-respuesta'
 *          401:
 *             description: UNAUTHORIZED
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode401'
 *          404:
 *             description: NOT_FOUND
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode404'
 *          500:
 *             description: INTERNAL_SERVER_ERROR
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode500'
 */

/**
 * @swagger
 * /app/favorites/{userID}:
 *    get:
 *       summary: Obtener todos los eventos favoritos del usuario
 *       description: Esta ruta devuelve al cliente todos los eventos favoritos del usuario 
 *       tags: [APP]
 *       security:
 *          - bearerAuth: []
 *       parameters: 
 *          - in: path 
 *            name: userID 
 *            schema: 
 *             type: string 
 *             example: 643212eadb112bea4a6cd2a0
 *            required: true 
 *            description: ID del usuario a consultar sus eventos favoritos
 *       responses:
 *          200:
 *             description: Eventos favoritos del usuario
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/Favorites' 
 *          401:
 *             description: UNAUTHORIZED
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode401'
 *          500:
 *             description: INTERNAL_SERVER_ERROR
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode500'                     
 */

/**
 * @swagger
 * /app/my-events/{adminID}:
 *    get:
 *       summary: Obtener todos los eventos creados por el Administrador
 *       description: Esta ruta devuelve al cliente todos los eventos creados por el adminitrador que hace la petición 
 *       tags: [APP]
 *       security:
 *          - bearerAuth: []
 *       parameters: 
 *          - in: path 
 *            name: adminID 
 *            schema: 
 *             type: string 
 *             example: 643212eadb112bea4a6cd2a0
 *            required: true 
 *            description: ID del administrador a consultar sus eventos creados
 *       responses:
 *          200:
 *             description: Eventos creados por el Administrador
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/My-Events' 
 *          401:
 *             description: UNAUTHORIZED
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode401'
 *          404:
 *             description: NOT_FOUND
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode404'
 *          500:
 *             description: INTERNAL_SERVER_ERROR
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode500'                     
 */

/**
 * @swagger
 * /app/profile/{userID}:
 *    get:
 *       summary: Obtener el perfil del Usuario
 *       description: Esta ruta devuelve al cliente los datos del usuario que hace la petición
 *       tags: [APP]
 *       security:
 *          - bearerAuth: []
 *       parameters: 
 *          - in: path 
 *            name: userID 
 *            schema: 
 *             type: string 
 *             example: 643212eadb112bea4a6cd2a0
 *            required: true 
 *            description: ID del usuario a traer su perfil
 *       responses:
 *          200:
 *             description: Perfil del Usuario
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/Profile'  
 *          401:
 *             description: UNAUTHORIZED
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode401'
 *          404:
 *             description: NOT_FOUND
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode404'
 *          500:
 *             description: INTERNAL_SERVER_ERROR
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode500'                    
 */

/**
 * @swagger
 * /app/update-profile/{userID}:
 *    post:
 *       summary: Modificar un Usuario por ID
 *       description: Esta ruta permite modificar los datos del usuario que hace la petición
 *       tags: [APP]
 *       security:
 *          - bearerAuth: []
 *       parameters: 
 *          - in: path 
 *            name: userID 
 *            schema: 
 *             type: string 
 *             example: 643212eadb112bea4a6cd2a0
 *            required: true 
 *            description: ID del usuario a modificar 
 *       requestBody: 
 *          required: true 
 *          content:  
 *             multipart/form-data:  
 *                schema:  
 *                   type: object  
 *                   $ref: '#/components/schemas/FormProfile'
 *       responses:
 *          200:
 *             description: El Usuario ha sido modificado
 *          401:
 *             description: UNAUTHORIZED
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode401'
 *          404:
 *             description: NOT_FOUND
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode404'
 *          500:
 *             description: INTERNAL_SERVER_ERROR
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode500'                
 */

/* DOCUMENTACION DE LAS RUTAS DE EVENTS */

/**
 * @swagger
 * /events/event/{eventID}:
 *    get:
 *       summary: Obtener un Evento
 *       description: Esta ruta devuelve al cliente un evento seleccionado
 *       tags: [Events]
 *       security:
 *          - bearerAuth: []
 *       parameters: 
 *          - in: path 
 *            name: eventID 
 *            schema: 
 *             type: string 
 *             example: 643c39d2f4fbc887773b7b3b 
 *            required: true 
 *            description: ID del Evento a mostrar
 *       responses:
 *          200:
 *             description: Evento Encontrado
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/Evento'
 *          401:
 *             description: UNAUTHORIZED
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode401'
 *          404:
 *             description: NOT_FOUND
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode404'
 *          500:
 *             description: INTERNAL_SERVER_ERROR
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode500'                    
 */

/**
 * @swagger
 * /events/toggle-asist/{userID}:
 *    post:
 *       summary: Cambia asistencia a un evento
 *       description: Esta ruta devuelve al cliente un objeto con la propiedad asist cuyo valor es un booleano que indica si el usuario que hace la peticion asistirá al evento seleccionado (true) o si canceló su asistencia (false)
 *       tags: [Events]
 *       security:
 *          - bearerAuth: []
 *       parameters: 
 *          - in: path 
 *            name: userID 
 *            schema: 
 *             type: string 
 *             example: 643212eadb112bea4a6cd2a0
 *            required: true 
 *            description: ID del usuario
 *       requestBody: 
 *          required: true 
 *          content:  
 *             application/json:  
 *                schema:  
 *                   type: object  
 *                   $ref: '#/components/schemas/ToggleAsist'
 *       responses:
 *          200:
 *             description: Asistencia cambiada
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/ToggleAsistResponse'
 *          401:
 *             description: UNAUTHORIZED
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode401'
 *          404:
 *             description: NOT_FOUND
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode404'
 *          500:
 *             description: INTERNAL_SERVER_ERROR
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode500'                  
 */

/**
 * @swagger
 * /events/create-event/{userID}:
 *    post:
 *       summary: Crear un Evento
 *       description: Esta ruta permite al administrador que hace la petición crear un Evento
 *       tags: [Events]
 *       security:
 *          - bearerAuth: []
 *       parameters: 
 *          - in: path 
 *            name: userID 
 *            schema: 
 *             type: string 
 *             example: 643212eadb112bea4a6cd2a0
 *            required: true 
 *            description: ID del usuario para verificar si es Administrador 
 *       requestBody: 
 *          required: true 
 *          content:  
 *             multipart/form-data:  
 *                schema:  
 *                   type: object  
 *                   $ref: '#/components/schemas/FormEvent'
 *       responses:
 *          201:
 *             description: El Evento ha sido creado
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/FormEventResponse'
 *          401:
 *             description: UNAUTHORIZED
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode401'
 *          404:
 *             description: NOT_FOUND
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode404'
 *          500:
 *             description: INTERNAL_SERVER_ERROR
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode500'                  
 */

/**
 * @swagger
 * /events/update-event/{eventID}:
 *    post:
 *       summary: Modificar un Evento
 *       description: Esta ruta permite al administrador que creó el evento, modificarlo completamente
 *       tags: [Events]
 *       security:
 *          - bearerAuth: []
 *       parameters: 
 *          - in: path 
 *            name: eventID 
 *            schema: 
 *             type: string 
 *             example: 643c39d2f4fbc887773b7b3b 
 *            required: true 
 *            description: ID del Evento a modificar 
 *       requestBody: 
 *          required: true 
 *          content:  
 *             multipart/form-data:  
 *                schema:  
 *                   type: object  
 *                   $ref: '#/components/schemas/UpdateEvent'
 *       responses:
 *          200:
 *             description: El Evento ha sido modificado
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/FormEventResponse' 
 *          401:
 *             description: UNAUTHORIZED
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode401'
 *          404:
 *             description: NOT_FOUND
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode404'
 *          500:
 *             description: INTERNAL_SERVER_ERROR
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode500'                   
 */

/**
 * @swagger
 * /events/delete-event/{eventID}:
 *    post:
 *       summary: Eliminar un Evento
 *       description: Esta ruta permite al administrador que hace la petición eliminar un evento que haya creado ese Admin
 *       tags: [Events]
 *       security:
 *          - bearerAuth: []
 *       parameters: 
 *          - in: path 
 *            name: eventID 
 *            schema: 
 *             type: string 
 *             example: 643c39d2f4fbc887773b7b3b
 *            required: true 
 *            description: ID del Evento a eliminar
 *       requestBody: 
 *          required: true 
 *          content:  
 *             application/json:  
 *                schema:  
 *                   type: object  
 *                   $ref: '#/components/schemas/DeleteEventPost'
 *       responses:
 *          204:
 *             description: NO_CONTENT
 *          401:
 *             description: UNAUTHORIZED
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode401'
 *          404:
 *             description: NOT_FOUND
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode404'
 *          500:
 *             description: INTERNAL_SERVER_ERROR
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/StatusCode500'                   
 */