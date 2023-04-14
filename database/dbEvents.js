const Eventos = require('../models/Eventos')

function addEvents() {
   Eventos.insertMany([
      {
         organizador: 'Brian',
         participantes: ['Roberto', 'Brian'],
         imagen: {
            public_id: 'Eventos UVM/1681255708356-WelcomeUVM',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681255713/Eventos%20UVM/1681255708356-WelcomeUVM.jpg'
         },
         titulo: 'Titulo para la UVM',
         descripcion: [
            'Esta es una descripcion para el proximo evento, ingresa tu descripcion aqui '
         ],
         keywords: ['Tecnologia'],
         facultad: 'Facultad de ingenieria',
         tipo: ['Videoconferencia'],
         categoria: ['Computacion'],
         fecha: '2023-04-20',
         hora: '09:00',
         duracion: '02:00',
         lugar: 'Aula de la Trujillanidad',
         createdBy: '643212eadb112bea4a6cd2a0'
      },
      {
         organizador: 'Diego',
         participantes: ['Cheo', 'Ramon'],
         imagen: {
            public_id: 'Eventos UVM/1681255708356-WelcomeUVM',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681255713/Eventos%20UVM/1681255708356-WelcomeUVM.jpg'
         },
         titulo: 'Titulo para la UVM 2',
         descripcion: [
            'Esta es una descripcion para el proximo evento, ingresa tu descripcion aqui '
         ],
         keywords: ['Programacion'],
         facultad: 'Facultad de ingenieria',
         tipo: ['Videoconferencia'],
         categoria: ['Computacion'],
         fecha: '2023-04-22',
         hora: '09:00',
         duracion: '02:00',
         lugar: 'Aula de la Trujillanidad',
         createdBy: '643212eadb112bea4a6cd2a0'
      },
      {
         organizador: 'Brian',
         participantes: ['Roberto', 'Brian'],
         imagen: {
            public_id: 'Eventos UVM/1681255708356-WelcomeUVM',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681255713/Eventos%20UVM/1681255708356-WelcomeUVM.jpg'
         },
         titulo: 'Semana Universitaria',
         descripcion: [
            'Esta es una descripcion para el proximo evento, ingresa tu descripcion aqui '
         ],
         keywords: ['Programacion', 'Tecnologia'],
         facultad: 'Facultad de ingenieria',
         tipo: ['Videoconferencia', 'Programar'],
         categoria: ['Computacion'],
         fecha: '2023-04-30',
         hora: '09:00',
         duracion: '02:00',
         lugar: 'Aula de la Trujillanidad',
         createdBy: '643212eadb112bea4a6cd2a0'
      },
      {
         organizador: 'Antonio',
         participantes: ['Francisco', 'Pedro'],
         imagen: {
            public_id: 'Eventos UVM/1681255708356-WelcomeUVM',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681255713/Eventos%20UVM/1681255708356-WelcomeUVM.jpg'
         },
         titulo: 'Feria de Emprendimiento',
         descripcion: [
            'Esta es una descripcion para el proximo evento, ingresa tu descripcion aqui '
         ],
         keywords: ['RRHH'],
         facultad: 'Facultad de ingeniería',
         tipo: ['Forochat'],
         categoria: ['Indutrial'],
         fecha: '2023-04-22',
         hora: '09:00',
         duracion: '03:00',
         lugar: 'Aula de la Trujillanidad',
         createdBy: '643212eadb112bea4a6cd2a0'
      },

      {
         organizador: 'Juan',
         participantes: ['Luis', 'Andres'],
         imagen: {
            public_id: 'Eventos UVM/1681255708356-WelcomeUVM',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681255713/Eventos%20UVM/1681255708356-WelcomeUVM.jpg'
         },
         titulo: 'Día de la Investigación',
         descripcion: [
            'Esta es una descripcion para el proximo evento, ingresa tu descripcion aqui '
         ],
         keywords: ['Excel'],
         facultad:
            'Facultad de ciencias económicas, administrativas y gerenciales',
         tipo: ['Dinámica'],
         categoria: ['Administración'],
         fecha: '2023-04-23',
         hora: '08:00',
         duracion: '02:00',
         lugar: 'Aula de la Trujillanidad',
         createdBy: '643212eadb112bea4a6cd2a0'
      },
      {
         organizador: 'Frank',
         participantes: ['Maria', 'Silvi'],
         imagen: {
            public_id: 'Eventos UVM/1681255708356-WelcomeUVM',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681255713/Eventos%20UVM/1681255708356-WelcomeUVM.jpg'
         },
         titulo: 'Encuentro de Deportes Universitarios',
         descripcion: [
            'Esta es una descripcion para el proximo evento, ingresa tu descripcion aqui '
         ],
         keywords: ['Numeros', 'Formulas'],
         facultad:
            'Facultad de ciencias económicas, administrativas y gerenciales',
         tipo: ['Diplomado'],
         categoria: ['Contaduria'],
         fecha: '2023-04-21',
         hora: '08:00',
         duracion: '02:00',
         lugar: 'Aula de la Trujillanidad',
         createdBy: '643212eadb112bea4a6cd2a0'
      },
      {
         organizador: 'Mariangel',
         participantes: ['Patri', 'Juancho'],
         imagen: {
            public_id: 'Eventos UVM/1681255708356-WelcomeUVM',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681255713/Eventos%20UVM/1681255708356-WelcomeUVM.jpg'
         },
         titulo: 'Festival Cultural Universitario',
         descripcion: [
            'Esta es una descripcion para el proximo evento, ingresa tu descripcion aqui '
         ],
         keywords: ['Robot', 'IA'],
         facultad: 'Facultad de ingeniería',
         tipo: ['Presentación'],
         categoria: ['Robotica'],
         fecha: '2023-04-28',
         hora: '09:00',
         duracion: '01:00',
         lugar: 'Aula de la Trujillanidad',
         createdBy: '643212eadb112bea4a6cd2a0'
      },
      {
         organizador: 'Fani',
         participantes: ['Mario', 'Rosario'],
         imagen: {
            public_id: 'Eventos UVM/1681255708356-WelcomeUVM',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681255713/Eventos%20UVM/1681255708356-WelcomeUVM.jpg'
         },
         titulo: 'Liderazgo Estudiantil',
         descripcion: [
            'Esta es una descripcion para el proximo evento, ingresa tu descripcion aqui '
         ],
         keywords: ['Leyes'],
         facultad: 'Facultad de ciencias jurídicas, políticas y sociales',
         tipo: ['Encuesta'],
         categoria: ['Derecho'],
         fecha: '2023-04-27',
         hora: '09:00',
         duracion: '01:00',
         lugar: 'Aula de la Trujillanidad',
         createdBy: '643212eadb112bea4a6cd2a0'
      },
      {
         organizador: 'Levi',
         participantes: ['Gloria', 'Joel'],
         imagen: {
            public_id: 'Eventos UVM/1681255708356-WelcomeUVM',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681255713/Eventos%20UVM/1681255708356-WelcomeUVM.jpg'
         },
         titulo: 'Congreso de Psicología y Educación',
         descripcion: [
            'Esta es una descripcion para el proximo evento, ingresa tu descripcion aqui '
         ],
         keywords: ['Servicio Comunitario'],
         facultad:
            'Facultad de ciencias económicas, administrativas y gerenciales',
         tipo: ['Chats'],
         categoria: ['Humanitas'],
         fecha: '2023-04-24',
         hora: '18:00',
         duracion: '02:00',
         lugar: 'Aula de la Trujillanidad',
         createdBy: '643212eadb112bea4a6cd2a0'
      },
      {
         organizador: 'Eminem',
         participantes: ['Yanira', 'Veronica'],
         imagen: {
            public_id: 'Eventos UVM/1681255708356-WelcomeUVM',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681255713/Eventos%20UVM/1681255708356-WelcomeUVM.jpg'
         },
         titulo: 'Concurso de Cortometrajes Estudiantiles',
         descripcion: [
            'Esta es una descripcion para el proximo evento, ingresa tu descripcion aqui '
         ],
         keywords: ['Suma', 'Resta'],
         facultad:
            'Facultad de ciencias económicas, administrativas y gerenciales',
         tipo: ['Juegos Interactivos'],
         categoria: ['Matemáticas'],
         fecha: '2023-04-29',
         hora: '08:00',
         duracion: '02:00',
         lugar: 'Aula de la Trujillanidad',
         createdBy: '643212eadb112bea4a6cd2a0'
      },
      {
         organizador: 'Jose',
         participantes: ['Paul', 'Ender'],
         imagen: {
            public_id: 'Eventos UVM/1681255708356-WelcomeUVM',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681255713/Eventos%20UVM/1681255708356-WelcomeUVM.jpg'
         },
         titulo: 'Fiesta de la Diversidad Cultural',
         descripcion: [
            'Esta es una descripcion para el proximo evento, ingresa tu descripcion aqui'
         ],
         keywords: ['Tecnología'],
         facultad: 'Facultad de ingeniería',
         tipo: ['Stan Virtual'],
         categoria: ['Logica'],
         fecha: '2023-04-26',
         hora: '06:00',
         duracion: '01:00',
         lugar: 'Aula de la Trujillanidad',
         createdBy: '643212eadb112bea4a6cd2a0'
      },
      {
         organizador: 'Ruben',
         participantes: ['Dario', 'Dana'],
         imagen: {
            public_id: 'Eventos UVM/1681255708356-WelcomeUVM',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681255713/Eventos%20UVM/1681255708356-WelcomeUVM.jpg'
         },
         titulo: 'Feria de Ciencias y Tecnología',
         descripcion: [
            'Esta es una descripcion para el proximo evento, ingresa tu descripcion aqui'
         ],
         keywords: ['Voltaje', 'Corriente'],
         facultad: 'Facultad de ingeniería',
         tipo: ['Aula Virtual'],
         categoria: ['Electricidad'],
         fecha: '2023-04-30',
         hora: '07:00',
         duracion: '03:00',
         lugar: 'Aula de la Trujillanidad',
         createdBy: '643212eadb112bea4a6cd2a0'
      },
      {
         organizador: 'Anibal',
         participantes: ['Carlos', 'Mariany'],
         imagen: {
            public_id: 'Eventos UVM/1681255708356-WelcomeUVM',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681255713/Eventos%20UVM/1681255708356-WelcomeUVM.jpg'
         },
         titulo: 'Seminario de Tecnología e Innovación',
         descripcion: [
            'Esta es una descripcion para el proximo evento, ingresa tu descripcion aqui'
         ],
         keywords: ['Leyes', 'Teoría'],
         facultad: 'Facultad de ingeniería',
         tipo: ['Taller'],
         categoria: ['Física'],
         fecha: '2023-04-27',
         hora: '08:00',
         duracion: '01:00',
         lugar: 'Aula de la Trujillanidad',
         createdBy: '643212eadb112bea4a6cd2a0'
      },
      {
         organizador: 'Steven',
         participantes: ['Jose Daniel', 'Enyer'],
         imagen: {
            public_id: 'Eventos UVM/1681255708356-WelcomeUVM',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681255713/Eventos%20UVM/1681255708356-WelcomeUVM.jpg'
         },
         titulo: 'Taller de Habilidades para el Empleo',
         descripcion: [
            'Esta es una descripcion para el proximo evento, ingresa tu descripcion aqui'
         ],
         keywords: ['Tecnología', 'Programación'],
         facultad: 'Facultad de ingeniería',
         tipo: ['Aula Virtual'],
         categoria: ['Programación'],
         fecha: '2023-04-28',
         hora: '09:00',
         duracion: '01:00',
         lugar: 'Aula de la Trujillanidad',
         createdBy: '643212eadb112bea4a6cd2a0'
      },
      {
         organizador: 'Wendy',
         participantes: ['Carlos', 'Torres'],
         imagen: {
            public_id: 'Eventos UVM/1681255708356-WelcomeUVM',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681255713/Eventos%20UVM/1681255708356-WelcomeUVM.jpg'
         },
         titulo: 'Feria de Voluntariado Universitario',
         descripcion: [
            'Esta es una descripcion para el proximo evento, ingresa tu descripcion aqui'
         ],
         keywords: ['Mezcla', 'Taller'],
         facultad: 'Facultad de ingeniería',
         tipo: ['Chats'],
         categoria: ['Química'],
         fecha: '2023-04-20',
         hora: '05:00',
         duracion: '03:00',
         lugar: 'Aula de la Trujillanidad',
         createdBy: '643212eadb112bea4a6cd2a0'
      },
      {
         organizador: 'Isbe',
         participantes: ['Wen', 'Petra'],
         imagen: {
            public_id: 'Eventos UVM/1681255708356-WelcomeUVM',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681255713/Eventos%20UVM/1681255708356-WelcomeUVM.jpg'
         },
         titulo: 'Jornada de Responsabilidad Social Universitaria',
         descripcion: [
            'Esta es una descripcion para el proximo evento, ingresa tu descripcion aqui'
         ],
         keywords: ['Pruebas', 'Error'],
         facultad: 'Facultad de ingeniería',
         tipo: ['Videoconferencia'],
         categoria: ['Mecanica'],
         fecha: '2023-04-21',
         hora: '04:00',
         duracion: '02:00',
         lugar: 'Aula de la Trujillanidad',
         createdBy: '643212eadb112bea4a6cd2a0'
      },
      {
         organizador: 'Manuel',
         participantes: ['Andrea', 'Andreina'],
         imagen: {
            public_id: 'Eventos UVM/1681255708356-WelcomeUVM',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681255713/Eventos%20UVM/1681255708356-WelcomeUVM.jpg'
         },
         titulo: 'Competencia de robótica y tecnología',
         descripcion: [
            'Esta es una descripcion para el proximo evento, ingresa tu descripcion aqui'
         ],
         keywords: ['Nave', 'Fuego'],
         facultad: 'Facultad de ingeniería',
         tipo: ['Streaming'],
         categoria: ['Termoninámica'],
         fecha: '2023-04-22',
         hora: '04:00',
         duracion: '01:00',
         lugar: 'Aula de la Trujillanidad',
         createdBy: '643212eadb112bea4a6cd2a0'
      },
      {
         organizador: 'Oriana',
         participantes: ['Yovana', 'Adriana'],
         imagen: {
            public_id: 'Eventos UVM/1681255708356-WelcomeUVM',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681255713/Eventos%20UVM/1681255708356-WelcomeUVM.jpg'
         },
         titulo:
            'Feria de intercambio estudiantil y programas de estudio en el extranjero',
         descripcion: [
            'Esta es una descripcion para el proximo evento, ingresa tu descripcion aqui'
         ],
         keywords: ['Naves', 'Calcúlo'],
         facultad: 'Facultad de ingeniería',
         tipo: ['Streaming'],
         categoria: ['Termodinámica'],
         fecha: '2023-04-30',
         hora: '11:00',
         duracion: '01:00',
         lugar: 'Aula de la Trujillanidad',
         createdBy: '643212eadb112bea4a6cd2a0'
      },
      {
         organizador: 'Steph',
         participantes: ['Jean', 'Kyer'],
         imagen: {
            public_id: 'Eventos UVM/1681255708356-WelcomeUVM',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681255713/Eventos%20UVM/1681255708356-WelcomeUVM.jpg'
         },
         titulo: 'Feria de carreras: descubre tu futuro profesional',
         descripcion: [
            'Esta es una descripcion para el proximo evento, ingresa tu descripcion aqui'
         ],
         keywords: ['Numeros', 'Contabilidad'],
         facultad:
            'Facultad de ciencias económicas, administrativas y gerenciales',
         tipo: ['Stand Virtual'],
         categoria: ['Administración'],
         fecha: '2023-04-28',
         hora: '08:00',
         duracion: '03:00',
         lugar: 'Aula de la Trujillanidad',
         createdBy: '643212eadb112bea4a6cd2a0'
      },
      {
         organizador: 'Donald',
         participantes: ['Robert', 'Cristian'],
         imagen: {
            public_id: 'Eventos UVM/1681255708356-WelcomeUVM',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681255713/Eventos%20UVM/1681255708356-WelcomeUVM.jpg'
         },
         titulo: 'Encuentro de tecnología y diseño en la universidad',
         descripcion: [
            'Esta es una descripcion para el proximo evento, ingresa tu descripcion aqui'
         ],
         keywords: ['Tecnología', 'Programacion'],
         facultad: 'Facultad de ingeniería',
         tipo: ['Stand Virtual'],
         categoria: ['Programación'],
         fecha: '2023-04-20',
         hora: '13:00',
         duracion: '02:00',
         lugar: 'Aula de la Trujillanidad',
         createdBy: '643212eadb112bea4a6cd2a0'
      }
   ])
}

module.exports = addEvents
