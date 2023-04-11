/* SCHEMAS DE SWAGGER */

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
 *                example: Avendaosander
 *             email:
 *                type: string
 *                description: Correo Electronico del Usuario
 *                example: avendano.ramirez@gmail.com
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
 *                   id: 
 *                      type: string
 *                      description: ID del usuario
 *                      example: "643212eadb112bea4a6cd2a0"
 *                   imgPerfil: 
 *                      type: string
 *                      description: URL del Avatar del usuario
 *                      example: "https://res.cloudinary.com/dtjgc9qlk/image/upload/v1680901101/Eventos%20UVM/1680901103272-usuario.png"
 *                   rol: 
 *                      type: string
 *                      description: Rol del usuario
 *                      example: "User"
 *                required:
 *                   - id
 *                   - imgPerfil
 *                   - rol
 *          required:
 *             - token
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
 *                example: Avendaosander
 *             email:
 *                type: string
 *                description: Correo Electronico del Usuario
 *                example: avendano.ramirez@gmail.com
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
 *       ResgisterAdminResponse:
 *          type: object
 *          properties: 
 *             creado:
 *                type: boolean
 *                description: Booleano de confirmacion de la peticion
 *                example: "true"
 *          required:
 *             - creado
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
 *                example: avendano.ramirez@gmail.com
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
 *                   id: 
 *                      type: string
 *                      description: ID del usuario
 *                      example: "643212eadb112bea4a6cd2a0"
 *                   imgPerfil: 
 *                      type: string
 *                      description: URL del Avatar del usuario
 *                      example: "https://res.cloudinary.com/dtjgc9qlk/image/upload/v1680901101/Eventos%20UVM/1680901103272-usuario.png"
 *                   favorites: 
 *                      type: array
 *                      description: Array con los IDs de los eventos favoridos del usuario
 *                      example: ["642b0ab52e6b08871274ce20","641ca66ab506d339669a7d0f"]
 *                   rol: 
 *                      type: string
 *                      description: Rol del usuario
 *                      example: "User"
 *                required:
 *                   - id
 *                   - imgPerfil
 *                   - favorites
 *                   - rol
 *          required:
 *             - token
 */

/**
 * @swagger
 * components:
 *    schemas:
 *       Logout:
 *          type: object
 *          properties:
 *             verificado:
 *                type: boolean
 *                description: Estado booleano de la sesion del usuario
 *                example: "false"
 *          required:
 *             - verificado
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
 *                         example: 642b44bc61c32d1d4f4dabec
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
 *                               example: Eventos UVM/1680542389627-WelcomeUVM
 *                            secure_url:
 *                               type: string
 *                               description: URL de la imagen de Cloudinary
 *                               example: https://res.cloudinary.com/dtjgc9qlk/image/upload/v1680542396/Eventos%20UVM/1680542389627-WelcomeUVM.jpg
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
 *             eventsToday:
 *                type: array
 *                items:
 *                   type: object
 *                   properties:
 *                      _id:
 *                         type: string
 *                         description: ID unico generado por MongoDB
 *                         example: 642b44bc61c32d1d4f4dabec
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
 *                               example: Eventos UVM/1680542389627-WelcomeUVM
 *                            secure_url:
 *                               type: string
 *                               description: URL de la imagen de Cloudinary
 *                               example: https://res.cloudinary.com/dtjgc9qlk/image/upload/v1680542396/Eventos%20UVM/1680542389627-WelcomeUVM.jpg
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
 *             recientes:
 *                type: array
 *                items:
 *                   type: object
 *                   properties:
 *                      _id:
 *                         type: string
 *                         description: ID unico generado por MongoDB
 *                         example: 642b44bc61c32d1d4f4dabec
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
 *                               example: Eventos UVM/1680542389627-WelcomeUVM
 *                            secure_url:
 *                               type: string
 *                               description: URL de la imagen de Cloudinary
 *                               example: https://res.cloudinary.com/dtjgc9qlk/image/upload/v1680542396/Eventos%20UVM/1680542389627-WelcomeUVM.jpg
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
 *          required:
 *             - proximos
 *             - eventsToday
 *             - recientes
 */

/**
 * @swagger
 * components:
 *    schemas:
 *       AllEvents:
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
 *                         example: 642b44bc61c32d1d4f4dabec
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
 *                               example: Eventos UVM/1680542389627-WelcomeUVM
 *                            secure_url:
 *                               type: string
 *                               description: URL de la imagen de Cloudinary
 *                               example: https://res.cloudinary.com/dtjgc9qlk/image/upload/v1680542396/Eventos%20UVM/1680542389627-WelcomeUVM.jpg
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
 *          required: 
 *             - eventos
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
 *       FilterRes:
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
 *                         example: 642b44bc61c32d1d4f4dabec
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
 *                               example: Eventos UVM/1680542389627-WelcomeUVM
 *                            secure_url:
 *                               type: string
 *                               description: URL de la imagen de Cloudinary
 *                               example: https://res.cloudinary.com/dtjgc9qlk/image/upload/v1680542396/Eventos%20UVM/1680542389627-WelcomeUVM.jpg
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
 *          required: 
 *             - eventos
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
 *                example: "64348995d97d5d902f7d7181"
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
 *             _id:
 *                type: string
 *                description: ID unico generado por MongoDB
 *                example: 642b44bc61c32d1d4f4dabec
 *             username:
 *                type: string
 *                description: Nombre de Usuario
 *                example: Avendaosander
 *             imgPerfil:
 *                type: object
 *                properties:
 *                   public_id:
 *                      type: string
 *                      description: ID de la imagen en Cloudinary
 *                      example: Eventos UVM/1680542389627-WelcomeUVM
 *                   secure_url:
 *                      type: string
 *                      description: URL de la imagen de Cloudinary
 *                      example: https://res.cloudinary.com/dtjgc9qlk/image/upload/v1680542396/Eventos%20UVM/1680542389627-WelcomeUVM.jpg
 *                required:
 *                - public_id
 *                - secure_url
 *             nombre:
 *                type: string
 *                description: Nombre del Usuario
 *                example: Alexander
 *             apellido:
 *                type: string
 *                description: Apellido del Usuario
 *                example: Avendaño
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
 *                email: avendano.ramirez@gmail.com
 *             password:
 *                type: string
 *                description: Contraseña del Usuario
 *                example: "123456789"
 *          required:
 *             - _id
 *             - rol
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
 *                         example: 642b44bc61c32d1d4f4dabec
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
 *                               example: Eventos UVM/1680542389627-WelcomeUVM
 *                            secure_url:
 *                               type: string
 *                               description: URL de la imagen de Cloudinary
 *                               example: https://res.cloudinary.com/dtjgc9qlk/image/upload/v1680542396/Eventos%20UVM/1680542389627-WelcomeUVM.jpg
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
 *             _id:
 *                type: string
 *                description: ID unico generado por MongoDB
 *                example: 642b44bc61c32d1d4f4dabec
 *             username:
 *                type: string
 *                description: Nombre de Usuario
 *                example: Avendaosander
 *             imgPerfil:
 *                type: object
 *                properties:
 *                   public_id:
 *                      type: string
 *                      description: ID de la imagen en Cloudinary
 *                      example: Eventos UVM/1680542389627-WelcomeUVM
 *                   secure_url:
 *                      type: string
 *                      description: URL de la imagen de Cloudinary
 *                      example: https://res.cloudinary.com/dtjgc9qlk/image/upload/v1680542396/Eventos%20UVM/1680542389627-WelcomeUVM.jpg
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
 *                description: Biagrafia del Usuario
 *                example: "Esta es una biografia de ejemplo para SWAGGER"
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
 *                email: avendano.ramirez@gmail.com
 *             password:
 *                type: string
 *                description: Contraseña del Usuario
 *                example: "123456789"
 *             rol:
 *                type: string
 *                description: Rol del Usuario
 *                example: "User"
 *             favorites:
 *                type: array of strings
 *                description: IDs de los evento favoritos
 *                example: ["642b0ab52e6b08871274ce20", "641ca66ab506d339669a7d0f"] 
 *             confirmEvent:
 *                type: array of strings
 *                description: IDs de los eventos a los que ha confirmado su asistencia
 *                example: ["642b0ab52e6b08871274ce20", "641ca66ab506d339669a7d0f"] 
 *          required:
 *             - _id
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
 *                example: usuario.png
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
 *          required:
 *             - nombre
 *             - apellido
 *             - edad
 */

/**
 * @swagger
 * components:
 *    schemas:
 *       UpdateUser-Respuesta:
 *          type: object
 *          properties:
 *             _id:
 *                type: string
 *                description: ID unico generado por MongoDB
 *                example: 64348995d97d5d902f7d7181
 *             username:
 *                type: string
 *                description: Nombre de Usuario
 *                example: Avendaosander
 *             imgPerfil:
 *                type: object
 *                properties:
 *                   public_id:
 *                      type: string
 *                      description: ID de la imagen en Cloudinary
 *                      example: Eventos UVM/1680542389627-WelcomeUVM
 *                   secure_url:
 *                      type: string
 *                      description: URL de la imagen de Cloudinary
 *                      example: https://res.cloudinary.com/dtjgc9qlk/image/upload/v1680542396/Eventos%20UVM/1680542389627-WelcomeUVM.jpg
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
 *                description: Biagrafia del Usuario
 *                example: "Esta es una biografia de ejemplo para SWAGGER"
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
 *                email: avendano.ramirez@gmail.com
 *             password:
 *                type: string
 *                description: Contraseña del Usuario
 *                example: "123456789"
 *             rol:
 *                type: string
 *                description: Rol del Usuario
 *                example: "User"
 *             favorites:
 *                type: array of strings
 *                description: IDs de los evento favoritos
 *                example: ["642b0ab52e6b08871274ce20", "641ca66ab506d339669a7d0f"] 
 *             confirmEvent:
 *                type: array of strings
 *                description: IDs de los eventos a los que ha confirmado su asistencia
 *                example: ["642b0ab52e6b08871274ce20", "641ca66ab506d339669a7d0f"] 
 *          required:
 *             - _id
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
 *       Evento:
 *          type: object
 *          properties:
 *             evento:
 *                type: array
 *                items:
 *                   type: object
 *                   properties:
 *                      _id:
 *                         type: string
 *                         description: ID unico generado por MongoDB
 *                         example: 642b44bc61c32d1d4f4dabec
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
 *                               example: Eventos UVM/1680542389627-WelcomeUVM
 *                            secure_url:
 *                               type: string
 *                               description: URL de la imagen de Cloudinary
 *                               example: https://res.cloudinary.com/dtjgc9qlk/image/upload/v1680542396/Eventos%20UVM/1680542389627-WelcomeUVM.jpg
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
 *          required: 
 *             - evento
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
 *                example: 02:00  
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

/**
 * @swagger
 * components:
 *    schemas:
 *       DeleteEvent:
 *          type: object
 *          properties: 
 *             eliminado:
 *                type: boolean
 *                description: Valor booleano sobre el exito de la peticion 
 *                example: "True"
 *          required:
 *             - eliminado
 */

/* DOCUMENTACION DE LAS RUTAS DE AUTH */

/**
 * @swagger
 * /register:
 *    post:
 *       summary: Crear un nuevo Usuario
 *       tags: [Register]
 *       requestBody: 
 *          required: true 
 *          content:  
 *             application/json:  
 *                schema:  
 *                   type: object  
 *                   $ref: '#/components/schemas/Register'
 *       responses:
 *          200:
 *             description: Nuevo Usuario Agregado
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/ResgisterResponse'
 */

/**
 * @swagger
 * /register-admin:
 *    post:
 *       summary: Crear un nuevo Administrador
 *       tags: [Register]
 *       requestBody: 
 *          required: true 
 *          content:  
 *             application/json:  
 *                schema:  
 *                   type: object  
 *                   $ref: '#/components/schemas/RegisterAdmin'
 *       responses:
 *          200:
 *             description: Nuevo Administrador Agregado
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/ResgisterAdminResponse'
 */

/**
 * @swagger
 * /login:
 *    post:
 *       summary: Iniciar Sesion
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
 */

/**
 * @swagger
 * /logout:
 *    get:
 *       summary: Cerrar Sesion
 *       tags: [Logout]
 *       responses:
 *          200:
 *             description: Sesion cerrada
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/Logout'
 */

/* DOCUMENTACION DE LAS RUTAS DE APP */

/**
 * @swagger
 * /app/dashboard:
 *    get:
 *       summary: Obtener 3 eventos proximos, 3 recientes y todos los disponibles para hoy
 *       tags: [APP]
 *       responses:
 *          200:
 *             description: Eventos Encontrados
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/Dashboard'
 */

/**
 * @swagger
 * /app/events:
 *    get:
 *       summary: Obtener todos los eventos proximos a la fecha actual
 *       tags: [APP]
 *       responses:
 *          200:
 *             description: Eventos Encontrados
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/AllEvents'
 */

/**
 * @swagger
 * /app/filters:
 *    post:
 *       summary: Filtrar Eventos por un filtro
 *       description: El filtro puede ser cualquier propiedad del evento (id, titulo, categorias, facultad, typeEvents, fecha...)
 *       tags: [APP]
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
 *                      $ref: '#/components/schemas/FilterRes'                    
 */

/**
 * @swagger
 * /app/toggle-favorite/{eventID}:
 *    post:
 *       summary: Cambiar un evento favorito del usuario
 *       tags: [APP]
 *       parameters: 
 *          - in: path 
 *            name: eventID 
 *            schema: 
 *             type: string 
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
 */

/**
 * @swagger
 * /app/favorites/{userID}:
 *    get:
 *       summary: Obtener todos los eventos favoritos del usuario
 *       tags: [APP]
 *       parameters: 
 *          - in: path 
 *            name: userID 
 *            schema: 
 *             type: string 
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
 */

/**
 * @swagger
 * /app/my-events/{adminID}:
 *    get:
 *       summary: Obtener todos los eventos creados por el Administrador
 *       tags: [APP]
 *       parameters: 
 *          - in: path 
 *            name: adminID 
 *            schema: 
 *             type: string 
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
 */

/**
 * @swagger
 * /app/profile/{userID}:
 *    get:
 *       summary: Obtener el perfil del Usuario
 *       tags: [APP]
 *       parameters: 
 *          - in: path 
 *            name: userID 
 *            schema: 
 *             type: string 
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
 */

/**
 * @swagger
 * /app/update-profile/{userID}:
 *    post:
 *       summary: Modificar un Usuario por ID
 *       tags: [APP]
 *       parameters: 
 *          - in: path 
 *            name: userID 
 *            schema: 
 *             type: string 
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
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/UpdateUser-Respuesta'                    
 */

/* DOCUMENTACION DE LAS RUTAS DE EVENTS */

/**
 * @swagger
 * /events/event/{eventID}:
 *    get:
 *       summary: Obtener un Evento
 *       tags: [Events]
 *       parameters: 
 *          - in: path 
 *            name: eventID 
 *            schema: 
 *             type: string 
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
 */

/**
 * @swagger
 * /events/create-event/{userID}:
 *    post:
 *       summary: Crear un Evento
 *       tags: [Events]
 *       parameters: 
 *          - in: path 
 *            name: userID 
 *            schema: 
 *             type: string 
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
 *          200:
 *             description: El Evento ha sido creado
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/Evento'                    
 */

/**
 * @swagger
 * /events/update-event/{eventID}:
 *    post:
 *       summary: Modificar un Evento
 *       tags: [Events]
 *       parameters: 
 *          - in: path 
 *            name: eventID 
 *            schema: 
 *             type: string 
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
 *                      $ref: '#/components/schemas/Evento'                    
 */

/**
 * @swagger
 * /events/delete-event/{eventID}:
 *    post:
 *       summary: Eliminar un Evento
 *       tags: [Events]
 *       parameters: 
 *          - in: path 
 *            name: eventID 
 *            schema: 
 *             type: string 
 *             example: 642b44bc61c32d1d4f4dabec
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
 *          200:
 *             description: Evento Eliminado
 *             content:  
 *                application/json:  
 *                   schema:  
 *                      type: object  
 *                      $ref: '#/components/schemas/DeleteEvent'                      
 */