const Eventos = require('../models/Eventos')
require('dotenv').config()

function addEvents() {
   Eventos.insertMany([
      {
         organizador: 'Brian',
         participantes: ['Roberto', 'Brian'],
         imagen: {
            public_id: 'Eventos UVM-Events/Titulo_para_la_UVM_tj3wt1',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681569125/Eventos%20UVM-Events/Titulo_para_la_UVM_tj3wt1.jpg'
         },
         titulo: 'Titulo para la UVM',
         descripcion: [
            'La Universidad Valle del Momboy, es una Institución de Educación Universitaria de carácter comunitario, sin fines de lucro, de inspiración humanista - cristiana, fruto del esfuerzo de diversos sectores de la sociedad civil trujillana, que anhelaban una Universidad propia para el Estado Trujillo. No fue sino hasta el 20 de noviembre de 1832, luego de separada Venezuela de Colombia y bajo el mandato del General José Antonio Páez, cuando el Vice-Presidente Diego Bautista Urbaneja, encargado del Poder Ejecutivo, decreta la creación del Colegio Nacional de Varones de Trujillo en el edificio del convento. Gracias a su meritoria trayectoria el 16 de diciembre de 1872, mediante Decreto No. 1.787 del Presidente Antonio Guzmán Blanco, se transforma en la Universidad de Trujillo, y a partir de 1873 comenzó a otorgar títulos profesionales en ciencias políticas, ciencias eclesiásticas y ciencias médicas. Lamentablemente fue cerrado en el año de 1900 por el Presidente Cipriano Castro y pierde sus cuantiosos bienes.'
         ],
         keywords: ['Tecnologia'],
         facultad: 'Facultad de ingenieria',
         tipo: ['Videoconferencia'],
         categoria: ['Computacion'],
         fecha: '2023-04-20',
         hora: '09:00',
         duracion: '02:00',
         lugar: 'Laboratorio de Computación',
         createdBy: `${process.env.ID_CREATED_BY}`
      },
      {
         organizador: 'Diego',
         participantes: ['Cheo', 'Ramon'],
         imagen: {
            public_id: 'Eventos UVM-Events/Titulo_para_la_UVM_2_if5epe',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681568407/Eventos%20UVM-Events/Titulo_para_la_UVM_2_if5epe.jpg'
         },
         titulo: 'Titulo para la UVM 2',
         descripcion: [
            'En la historia de la educación superior trujillana cuenta la iniciativa privada de creación en 1923 de la Escuela de Ciencias Políticas. Poco después y ante las dificultades para su sostenimiento se adscribe a la Gobernación del Estado y bajo la tutela académica de la Universidad de Los Andes. Tras también una meritoria labor, pero penetrada por los vicios de la politiquería, cierra definitivamente sus puertas en 1947. El 7 de octubre de 1958 la Universidad de Los Andes inicia los estudios universitarios en la ciudad de Valera. Con la creación de algunas cátedras de medicina en el Hospital Central de Valera. Más tarde y luego de una lucha sostenida por la comunidad trujillana, respaldada en Mérida por la Asociación de Estudiantes Trujillanos, el 7 de octubre de 1972 la Universidad de Los Andes crea el Núcleo Universitario Rafael Rangel en la ciudad de Trujillo, con carreras de Educación y luego Ingeniería Agrícola, Administración y otras.'
         ],
         keywords: ['Programacion'],
         facultad: 'Facultad de ingenieria',
         tipo: ['Videoconferencia'],
         categoria: ['Computacion'],
         fecha: '2023-04-22',
         hora: '09:00',
         duracion: '02:00',
         lugar: 'Laboratorio de Computación',
         createdBy: `${process.env.ID_CREATED_BY}`
      },
      {
         organizador: 'Brian',
         participantes: ['Roberto', 'Brian'],
         imagen: {
            public_id: 'Eventos UVM-Events/SemanaUniversitaria_gizqth',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681568405/Eventos%20UVM-Events/SemanaUniversitaria_gizqth.jpg'
         },
         titulo: 'Semana Universitaria',
         descripcion: [
            'Cada año, en el mes de abril, se celebra en la Universidad de Costa Rica, la tradicional Semana Universitaria. Como parte de esta festividad, los estudiantes se visten con camisetas representativas de sus carreras y asisten a diversas actividades académicas, culturales, deportivas y artísticas. Los conciertos con agrupaciones nacionales, las conferencias, los torneos deportivos, las exposiciones y otras presentaciones artísticas y culturales, se apropian del campus y cautivan al público universitario y a vecinos de los alrededores de San Pedro de Montes de Oca. Esta particular celebración se ha mantenido a los largo de seis décadas y fue convirtiéndose, con el paso de los años, en una de las tradiciones más significativas de la comunidad universitaria.Pero más allá de ser solo una celebración llena de música, arte y alegría,  la Semana U, como muchos la llaman, encierra en su razón de ser, la remembranza de la luchas históricas que ha emprendido el Movimiento Estudiantil.'
         ],
         keywords: ['Programacion', 'Tecnologia'],
         facultad: 'Facultad de ingenieria',
         tipo: ['Videoconferencia', 'Programar'],
         categoria: ['Computacion'],
         fecha: '2023-04-30',
         hora: '09:00',
         duracion: null,
         lugar: 'Laboratorio de Computación',
         createdBy: `${process.env.ID_CREATED_BY}`
      },
      {
         organizador: 'Antonio',
         participantes: ['Francisco', 'Pedro'],
         imagen: {
            public_id: 'Eventos UVM-Events/FeriaDeEmprendimiento_auvtbj',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681568403/Eventos%20UVM-Events/FeriaDeEmprendimiento_auvtbj.jpg'
         },
         titulo: 'Feria de Emprendimiento',
         descripcion: [
            'El proceso de formación orientado al emprendimiento, permite familiarizarse con la cultura del emprendimiento sostenible, a fin de promover ideas de emprendedoras que permitan mejorar la calidad de vida de los jóvenes. Este es un espacio diseñado para conocer algunos de los proyectos de emprendimiento que los/las jóvenes del proyecto Juven TIC han desarrollado. Para facilitar la búsqueda, usted podrá ubicar un proyecto de su interés seleccionando por sectores empresariales. La feria de emprendimiento es una simulación de rueda de negocios donde los estudiantes actuales de la materia Emprendimiento e Innovación en Modelos de Negocios, presentan sus proyectos y son evaluados por jurados evaluadores altamente calificados internos y externos son un buen contexto para poder hacerse conocido como emprendedor.'
         ],
         keywords: ['RRHH'],
         facultad: 'Facultad de ingeniería',
         tipo: ['Forochat'],
         categoria: ['Indutrial'],
         fecha: '2023-04-11',
         hora: '09:00',
         duracion: '03:00',
         lugar: 'Aula Audiovisual',
         createdBy: `${process.env.ID_CREATED_BY}`
      },

      {
         organizador: 'Juan',
         participantes: ['Luis', 'Andres'],
         imagen: {
            public_id: 'Eventos UVM-Events/DiaDeLaInvestigacion_cjhqew',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681568402/Eventos%20UVM-Events/DiaDeLaInvestigacion_cjhqew.jpg'
         },
         titulo: 'Día de la Investigación',
         descripcion: [
            'La investigación se asume como un proceso social que busca dar respuestas a problemas del conocimiento, los cuales pueden surgir de la actitud reflexiva y crítica de los sujetos con relación a la praxis o a la teoría existente, Es considerada proceso. En cuanto ésta se realiza en forma continua y coherente en los diferentes pasos o momentos y apropia o crea un método para la producción de conocimiento. Es social y está determinada por las características del contexto y es orientada por sujetos sociales que en acciones individuales o colectivas intentan dar respuestas a interrogantes planteados en el campo del saber y del hacer. ¿Qué es la investigación y cuál es su importancia? La investigación estimula el pensamiento crítico, la creatividad y es a través de ella, que el proceso de aprendizaje se vitaliza y se combate la memorización, que tanto ha contribuido a formar profesionales pasivos, pocos amantes de la innovación, con escasa curiosidad e iniciativa personal.'
         ],
         keywords: ['Excel'],
         facultad:
            'Facultad de ciencias económicas, administrativas y gerenciales',
         tipo: ['Dinámica'],
         categoria: ['Administración'],
         fecha: '2023-04-23',
         hora: '08:00',
         duracion: '02:00',
         lugar: 'Biblioteca',
         createdBy: `${process.env.ID_CREATED_BY}`
      },
      {
         organizador: 'Frank',
         participantes: ['Maria', 'Silvi'],
         imagen: {
            public_id:
               'Eventos UVM-Events/EncuentroDeDeportesUniversitarios_qrhony',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681568402/Eventos%20UVM-Events/EncuentroDeDeportesUniversitarios_qrhony.jpg'
         },
         titulo: 'Encuentro de Deportes Universitarios',
         descripcion: [
            'La entrada en la universidad supone el comienzo de una nueva vida para miles de estudiantes. Cuando no conoces aún a nadie formar parte de los clubes deportivos de las facultades es una muy buena oportunidad de socializar a la vez que practicar deporte. El objetivo es contribuir a potenciar las cualidades innatas de cada uno y fomentar la convivencia en grupo. Es una etapa clave en nuestro crecimiento como personas en distintos ámbitos. Uno de los más importantes es, sin duda, el ámbito social, pues se trata de un período en el que salimos de nuestro círculo y nos topamos con gente nueva, gestamos nuevas amistades, desarrollamos nuevas estrategias a la hora de relacionarnos y cambiamos nuestra manera de socializar. Una de las mejores vías para integrarnos en este entorno es inscribirnos en alguno de los clubes deportivos disponibles ya sea en nuestra facultad o en otra.'
         ],
         keywords: ['Numeros', 'Formulas'],
         facultad:
            'Facultad de ciencias económicas, administrativas y gerenciales',
         tipo: ['Diplomado'],
         categoria: ['Contaduria'],
         fecha: '2023-04-21',
         hora: '08:00',
         duracion: null,
         lugar: 'Aula de la Trujillanidad',
         createdBy: `${process.env.ID_CREATED_BY}`
      },
      {
         organizador: 'Mariangel',
         participantes: ['Patri', 'Juancho'],
         imagen: {
            public_id:
               'Eventos UVM-Events/Festival_Cultural_Universitario_puhap5',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681568403/Eventos%20UVM-Events/Festival_Cultural_Universitario_puhap5.jpg'
         },
         titulo: 'Festival Cultural Universitario',
         descripcion: [
            'La cultura universitaria expresa el sentido de ser de una Universidad. Lo hace de forma epigonal. La cultura en su definición antropológica remite a saberes, creencias, hábitos, costumbres, prácticas, representaciones, conocimientos y sentimientos que definen fuertes reconocimientos como comunidad. Las universitarias y los universitarios compartimos identificaciones con orgullo por ser parte de una especie de “patria chica” alimentada a diario en cada institución de educación superior y, al mismo tiempo, por participar de un universal trascendente a prueba de fronteras. No hay un ser cabalmente universitario que no se emocione cuando escucha en cualquier parte del mundo el Gaedeamus Igitur y sus vítores a la Universidad, al profesorado, a nuestra sociedad, a los y las que estudian, al Estado, a quién lo dirige y a los mecenas.'
         ],
         keywords: ['Robot', 'IA'],
         facultad: 'Facultad de ingeniería',
         tipo: ['Presentación'],
         categoria: ['Robotica'],
         fecha: '2023-04-28',
         hora: '09:00',
         duracion: '01:00',
         lugar: 'Aula de la Trujillanidad',
         createdBy: `${process.env.ID_CREATED_BY}`
      },
      {
         organizador: 'Fani',
         participantes: ['Mario', 'Rosario'],
         imagen: {
            public_id: 'Eventos UVM-Events/Liderazgo_Estudiantil_wbmqf9',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681568404/Eventos%20UVM-Events/Liderazgo_Estudiantil_wbmqf9.jpg'
         },
         titulo: 'Liderazgo Estudiantil',
         descripcion: [
            'Para poder comprender lo que es el liderazgo escolar resulta fundamental, en primer lugar, profundizar en relación con lo que se entiende por liderazgo. En este sentido, durante el último tiempo diversos autores han tratado la temática desde diferentes perspectivas, sin embargo, todos coinciden en señalar que el liderazgo implica, necesariamente, ejercer un grado de influencia sobre otros. De esta forma y tal como plantean Bush (2017), los líderes escolares exitosos son aquellos que desarrollan una visión para sus escuelas y, a través de un proceso de influencia, logran el objetivo deseado, articulando y compartiendo esta visión en cada oportunidad que tienen. *"un líder educativo es quien es capaz de influir en estudiantes, docentes, administrativos, en general, en la comunidad educativa, en la cual pueden estar los grupos de interés, entre ellos los padres de familia de una organización académica, con el pro- pósito de lograr objetivos de la institución'
         ],
         keywords: ['Leyes'],
         facultad: 'Facultad de ciencias jurídicas, políticas y sociales',
         tipo: ['Encuesta'],
         categoria: ['Derecho'],
         fecha: '2023-04-27',
         hora: '09:00',
         duracion: '01:00',
         lugar: 'Aula de la Trujillanidad',
         createdBy: `${process.env.ID_CREATED_BY}`
      },
      {
         organizador: 'Levi',
         participantes: ['Gloria', 'Joel'],
         imagen: {
            public_id:
               'Eventos UVM-Events/Congreso_de_Psicolog%C3%ADa_y_Educaci%C3%B3n_nfdnqc',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681568402/Eventos%20UVM-Events/Congreso_de_Psicolog%C3%ADa_y_Educaci%C3%B3n_nfdnqc.jpg'
         },
         titulo: 'Congreso de Psicología y Educación',
         descripcion: [
            'El Instituto de Psicología, Educación y Desarrollo Humano, de la Facultad de Psicología de la Universidad de la República, invita a la comunidad académica a participar del IV Encuentro Internacional Psicología y Educación en el Siglo XXI. Este encuentro - antesala del II Congreso Internacional de Psicología a realizarse en 2023 - es un espacio de diálogo entre todos los actores sociales y universitarios que participan en el campo educativo. Los objetivos que estructuran este Encuentro son: Difundir la producción científica nacional e internacional producida en la interrelación entre psicología y educación. Actualizar el debate interdisciplinario sobre los ejes propuestos. Las actividades previstas convocarán a la reflexión sobre estos temas desde disciplinas vinculantes, como la Pedagogía, la Psicología, la Sociología, la Lingüística, entre otras.'
         ],
         keywords: ['Servicio Comunitario'],
         facultad:
            'Facultad de ciencias económicas, administrativas y gerenciales',
         tipo: ['Chats'],
         categoria: ['Humanitas'],
         fecha: '2023-04-24',
         hora: '18:00',
         duracion: null,
         lugar: 'Biblioteca',
         createdBy: `${process.env.ID_CREATED_BY}`
      },
      {
         organizador: 'Eminem',
         participantes: ['Yanira', 'Veronica'],
         imagen: {
            public_id:
               'Eventos UVM-Events/Concurso_de_Cortometrajes_Estudiantiles_mtbiau',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681568401/Eventos%20UVM-Events/Concurso_de_Cortometrajes_Estudiantiles_mtbiau.jpg'
         },
         titulo: 'Concurso de Cortometrajes Estudiantiles',
         descripcion: [
            'Las comedias cortas eran especialmente populares e, inicialmente, algunas de ellas se presentaron como series (como las películas La Pandilla o los cortos de Charlie Chaplin). Entre los primeros trabajos que pueden considerarse cortometrajes pueden mencionarse: la comedia de situación o los trabajos realizados por cómicos como Laurel y Hardy, Charlie Chaplin y Buster Keaton todos "graduados" de universidades). Los dibujos animados son principalmente cortometrajes. Virtualmente todas las empresas de producción importantes tuvieron las unidades asignadas para desarrollar y producir cortometrajes mejores y educativos, con una moraleja en el final. En la actualidad, el abaratamiento de las nuevas tecnologías digitales y su acercamiento a la producción amateur, ha supuesto una revolución en el mundo del cortometraje, en el que los jóvenes realizadores pueden comenzar eludiendo los grandes gastos que hasta ahora suponía la realización de estas obras.'
         ],
         keywords: ['Suma', 'Resta'],
         facultad:
            'Facultad de ciencias económicas, administrativas y gerenciales',
         tipo: ['Juegos Interactivos'],
         categoria: ['Matemáticas'],
         fecha: '2023-04-29',
         hora: '08:00',
         duracion: '02:00',
         lugar: 'Aula Audiovisual',
         createdBy: `${process.env.ID_CREATED_BY}`
      },
      {
         organizador: 'Jose',
         participantes: ['Paul', 'Ender'],
         imagen: {
            public_id:
               'Eventos UVM-Events/Fiesta_de_la_Diversidad_Cultural_tnbpo4',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681568404/Eventos%20UVM-Events/Fiesta_de_la_Diversidad_Cultural_tnbpo4.jpg'
         },
         titulo: 'Fiesta de la Diversidad Cultural',
         descripcion: [
            'Diversidad cultural es la variedad de culturas que existen en la humanidad, las cuales se distinguen entre sí a través de un conjunto de expresiones que le son propias.El concepto de diversidad cultural actúa también como un principio de apertura y tolerancia entre etnias, lenguas, religiones, valores, cosmovisiones, etc. Es decir, un principio de apertura al contacto entre culturas sin que ninguna de ellas presuponga superioridad sobre la otra. La diversidad cultural es consecuencia de procesos históricos, políticos, sociales y económicos que han estimulado diferentes respuestas de adaptación por parte de los pueblos. Dichos procesos se hacen más complejos cuando se dan encuentros entre culturas, lo que conlleva siempre algún tipo de transformación. La UNESCO promovió la Declaración Universal sobre la Diversidad Cultural en el año 2001, que amplía la posibilidad de crear políticas culturales nacionales e internacionales en esta materia. Asimismo, estableció el 21 de mayo como Día Mundial de la Diversidad Cultural para el Diálogo y el Desarrollo.'
         ],
         keywords: ['Tecnología'],
         facultad: 'Facultad de ingeniería',
         tipo: ['Stan Virtual'],
         categoria: ['Logica'],
         fecha: '2023-04-26',
         hora: '10:00',
         duracion: '01:00',
         lugar: 'Aula Audiovisual',
         createdBy: `${process.env.ID_CREATED_BY}`
      },
      {
         organizador: 'Ruben',
         participantes: ['Dario', 'Dana'],
         imagen: {
            public_id:
               'Eventos UVM-Events/Feria_de_Ciencias_y_Tecnolog%C3%ADa_rgqnww',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681568402/Eventos%20UVM-Events/Feria_de_Ciencias_y_Tecnolog%C3%ADa_rgqnww.jpg'
         },
         titulo: 'Feria de Ciencias y Tecnología',
         descripcion: [
            'Desde la génesis del proyecto es importante que los estudiantes vayan registrando el proceso de trabajo, sin modificar, tachar u omitir cuestiones, mediante la carpeta de campo. Allí se incluyen notas sobre visitas de especialistas, salidas escolares relacionadas al tema, aportes de docentes y directivos,y toda cuestión significativa para el grupo. Puede complementarse con archivos digitales (fotos, audios, grabaciones). Se presenta, en formato original, en el stand y no puede ser retirada por ninguna persona ajena al proyecto. Los estudiantes deben presentar también un informe, en el que se describen las motivaciones que llevaron al desarrollo del proyecto, la metodología empleada, los resultados obtenidos, las conclusiones y la bibliografía. Este informe requiere de una redacción cuidada, una copia de él estará a disposición de los evaluadores durante la feria. En Argentina se suma un tercer documento denominado registro pedagógico, redactado por el docente, en el que narra, de manera personal y subjetiva, no solo las cuestiones referentes a la planificación de actividades, relación entre éstas y el proyecto institucional y evaluación, sino también sus opiniones sobre los aciertos y errores del proceso, el impacto del trabajo en los estudiantes y la comunidad, las cuestiones vinculares que surgieron, entre otros aspectos.'
         ],
         keywords: ['Voltaje', 'Corriente'],
         facultad: 'Facultad de ingeniería',
         tipo: ['Aula Virtual'],
         categoria: ['Electricidad'],
         fecha: '2023-04-11',
         hora: '11:00',
         duracion: '03:00',
         lugar: 'Laboratorio de Química',
         createdBy: `${process.env.ID_CREATED_BY}`
      },
      {
         organizador: 'Anibal',
         participantes: ['Carlos', 'Mariany'],
         imagen: {
            public_id:
               'Eventos UVM-Events/Seminario_de_Tecnolog%C3%ADa_e_Innovaci%C3%B3n_bew6jh',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681568404/Eventos%20UVM-Events/Seminario_de_Tecnolog%C3%ADa_e_Innovaci%C3%B3n_bew6jh.jpg'
         },
         titulo: 'Seminario de Tecnología e Innovación',
         descripcion: [
            'El constante desarrollo de las Tecnologías de Información y Comunicación (TIC) exige de los usuarios una formación directamente proporcional a sus incesantes actualizaciones, con el fin de aplicarlas a su vida profesional o cotidiana. El Seminario Innovación Educativa, en ese sentido, es un espacio donde se reflexiona sobre el funcionamiento e implementación de las TIC en el ámbito educativo, mediante la revisión de herramientas, aplicaciones y recursos tecnológicos que enriquezcan el criterio de los docentes para decidir cómo, cuándo y dónde es razonable utilizar, o no, las TIC dentro de sus actividades profesionales. Aunado a ello, se pretende, a través de distintos expertos en el tema, ofrecer metodologías de implementación o experiencias sistematizadas, utilizando las TIC, que resulten favorables para optimizar los procesos de enseñanza-aprendizaje en todas su modalidades: presencial, semipresencial y a distancia.Son las que le permiten al trabajador relacionarse con los demás, tales como la comunicación, la negociación, la capacidad de resolución de problemas, el pensamiento crítico, la empatía, el liderazgo para la coordinación de un equipo de trabajo, el trabajo en equipo, la capacidad de adaptación al cambio y la confianza.'
         ],
         keywords: ['Leyes', 'Teoría'],
         facultad: 'Facultad de ingeniería',
         tipo: ['Taller'],
         categoria: ['Física'],
         fecha: '2023-04-27',
         hora: '08:00',
         duracion: null,
         lugar: 'Laboratorio de Química',
         createdBy: `${process.env.ID_CREATED_BY}`
      },
      {
         organizador: 'Steven',
         participantes: ['Jose Daniel', 'Enyer'],
         imagen: {
            public_id:
               'Eventos UVM-Events/Taller_de_Habilidades_para_el_Empleo_eyd2tv',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681568405/Eventos%20UVM-Events/Taller_de_Habilidades_para_el_Empleo_eyd2tv.jpg'
         },
         titulo: 'Taller de Habilidades para el Empleo',
         descripcion: [
            'Las habilidades blandas son difícilmente reemplazables por máquinas. A lo largo de la historia, lo que ha permitido que el empleo se mantenga a pesar de la automatización de tareas es la creación de nuevas ocupaciones que solo pueden realizar los seres humanos con habilidades blandas. En un mundo cada vez más tecnológico y automatizado, los empleadores valoran mucho estas habilidades. Se miden en entrevistas de trabajo, y pueden llegar a pesar más en la decisión final que la experiencia en el mundo laboral, los títulos y los conocimientos. El objetivo del estudio es analizar la interacción que se genera entre el voluntariado universitario, el aprendizaje servicio y el emprendimiento social para el caso de las universidades de la ciudad de Antofagasta, desde la perspectiva del paradigma interpretativo-hermenéutico mediante un enfoque cualitativo y la entrevista semiestructurada como técnica de recolección de datos y a los procedimientos de la teoría fundamentada para analizar los resultados. En el caso estudiado, el voluntariado universitario es una iniciativa mayoritariamente de origen estudiantil, desarrollado para ejecutar acciones en beneficio de la comunidad, así como para fortalecer una mayor sensibilidad social y ciudadana de los estudiantes respecto de las problemáticas y necesidades de los habitantes más vulnerables de la ciudad. Así, el voluntariado universitario se transforma en un ámbito interesante para fortalecer los procesos de formación universitaria como expresión de un aprendizaje servicio, pero también como un espacio de fortalecimiento de los procesos de emprendimiento social, que trasciendan el contexto universitario y repercutan positivamente en el largo plazo en la comunidad local.'
         ],
         keywords: ['Tecnología', 'Programación'],
         facultad: 'Facultad de ingeniería',
         tipo: ['Aula Virtual'],
         categoria: ['Programación'],
         fecha: '2023-04-29',
         hora: '09:00',
         duracion: null,
         lugar: 'Laboratorio de Química',
         createdBy: `${process.env.ID_CREATED_BY}`
      },
      {
         organizador: 'Wendy',
         participantes: ['Carlos', 'Torres'],
         imagen: {
            public_id:
               'Eventos UVM-Events/Feria_de_Voluntariado_Universitario_rzwmkd',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681568403/Eventos%20UVM-Events/Feria_de_Voluntariado_Universitario_rzwmkd.jpg'
         },
         titulo: 'Feria de Voluntariado Universitario',
         descripcion: [
            'Habilidades laborales como saber trabajar en equipo, comunicar correctamente o saber tomar decisiones, son muy demandadas en las empresas. Los responsables de Recursos Humanos se nutren de trabajadores que reúnen estas y otras características.La formación académica es la base para convertirse en un buen profesional, pero las habilidades laborales de cada empleado marcarán la diferencia entre ellos. Por eso los reclutadores ponen especial atención a estas actitudes y capacidades.El currículum es una buena manera para realizar una criba curricular inicial, pero será en la entrevista personal donde el empleado demuestre qué habilidades laborales reúne y cuáles son las idóneas para desempeñar el puesto de trabajo al que opta. ¿Qué son realmente las habilidades laborales? ¿Cuáles son las más valoradas?'
         ],
         keywords: ['Mezcla', 'Taller'],
         facultad: 'Facultad de ingeniería',
         tipo: ['Chats'],
         categoria: ['Química'],
         fecha: '2023-04-17',
         hora: '23:00',
         duracion: '03:00',
         lugar: 'Biblioteca',
         createdBy: `${process.env.ID_CREATED_BY}`
      },
      {
         organizador: 'Isbe',
         participantes: ['Wen', 'Petra'],
         imagen: {
            public_id:
               'Eventos UVM-Events/Jornada_de_Responsabilidad_Social_Universitaria_ohhsqe',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681568404/Eventos%20UVM-Events/Jornada_de_Responsabilidad_Social_Universitaria_ohhsqe.jpg'
         },
         titulo: 'Jornada de Responsabilidad Social Universitaria',
         descripcion: [
            'la RSU es una estrategia de gestión universitaria, tratando de mantener un enfoque holístico sobre la propia organización universitaria, y concibiendo iniciativas interdisciplinarias (sinergia entre facultades y dependencias universitarias) e interinstitucionales (asociación de varias funciones de la estructura institucional). Que el papel de la universidad no es el de sustituir al Estado o a las Organizaciones no Gubernamentales de desarrollo (ONGs), sino de asumir cada vez mejor su rol de formación superior integral con fines éticos y en pro del desarrollo sostenible de su comunidad, precisando no concebir las relaciones entre la universidad y el entorno social en términos de donación o ayuda unilateral. En consecuencia, la proyección social es la función que cumple la universidad con el medio externo. Se apoya en la docencia y la investigación para el diseño y desarrollo de proyectos que articulen las experiencias y saberes de la academia con los saberes y experiencias del entorno. En este proceso la universidad reconoce características, cultura, potencialidades, necesidades y demandas del medio externo, así podrá estar dispuesta a abrir múltiples y flexibles formas de interacción con los sectores sociales, con los gobiernos locales y nacionales, con los organismos no gubernamentales, con las organizaciones populares y con el sector productivo (Ponz, 1996).'
         ],
         keywords: ['Pruebas', 'Error'],
         facultad: 'Facultad de ingeniería',
         tipo: ['Videoconferencia'],
         categoria: ['Mecanica'],
         fecha: '2023-04-25',
         hora: '16:00',
         duracion: '02:00',
         lugar: 'Biblioteca',
         createdBy: `${process.env.ID_CREATED_BY}`
      },
      {
         organizador: 'Manuel',
         participantes: ['Andrea', 'Andreina'],
         imagen: {
            public_id:
               'Eventos UVM-Events/Competencia_de_rob%C3%B3tica_y_tecnolog%C3%ADa_l4ks0u',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681568401/Eventos%20UVM-Events/Competencia_de_rob%C3%B3tica_y_tecnolog%C3%ADa_l4ks0u.jpg'
         },
         titulo: 'Competencia de robótica y tecnología',
         descripcion: [
            'Esta es una descripcion para el proximo evento, ingresa tu descripcion aqui'
         ],
         keywords: ['Nave', 'Fuego'],
         facultad: 'Facultad de ingeniería',
         tipo: ['Streaming'],
         categoria: ['Termoninámica'],
         fecha: '2023-04-09',
         hora: '16:00',
         duracion: null,
         lugar: 'Laboratorio de Química',
         createdBy: `${process.env.ID_CREATED_BY}`
      },
      {
         organizador: 'Oriana',
         participantes: ['Yovana', 'Adriana'],
         imagen: {
            public_id:
               'Eventos UVM-Events/Feria_de_intercambio_estudiantil_y_programas_de_estudio_en_el_extranjero_gykulx',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681568403/Eventos%20UVM-Events/Feria_de_intercambio_estudiantil_y_programas_de_estudio_en_el_extranjero_gykulx.jpg'
         },
         titulo:
            'Feria de intercambio estudiantil y programas de estudio en el extranjero',
         descripcion: [
            'Un programa de intercambio estudiantil es una experiencia enriquecedora mediante la cual los jóvenes estudiantes tienen la oportunidad de viajar a otro país, asistir a un colegio de educación secundaria o universitario y vivir con una familia anfitriona de reconocida honorabilidad y respetabilidad, lo cual les facilitará además del aprendizaje del idioma del país anfitrión, el conocimiento de una nueva cultura, tanto en el área familiar como comunitaria y nacional. Las oficinas internacionales de YFU tienen un historial largo y acertado, más de 240.000 estudiantes y familias anfitrionas se han beneficiado de intercambios con YFU a nivel internacional. Youth For Understanding es una coalición mundial de organizaciones e individuos comprometidos con la filosofía del intercambio entre naciones. Estamos unidos por la creencia de que la inmersión cultural completa es el medio más eficaz de adquirir las habilidades necesarias para prosperar en una sociedad global competitiva, multicultural e interconectada.'
         ],
         keywords: ['Naves', 'Calcúlo'],
         facultad: 'Facultad de ingeniería',
         tipo: ['Streaming'],
         categoria: ['Termodinámica'],
         fecha: '2023-04-17',
         hora: '23:00',
         duracion: '01:00',
         lugar: 'Aula Audiovisual',
         createdBy: `${process.env.ID_CREATED_BY}`
      },
      {
         organizador: 'Steph',
         participantes: ['Jean', 'Kyer'],
         imagen: {
            public_id:
               'Eventos UVM-Events/Feria_de_carreras_descubre_tu_futuro_profesional_jy8uyy',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681568402/Eventos%20UVM-Events/Feria_de_carreras_descubre_tu_futuro_profesional_jy8uyy.jpg'
         },
         titulo: 'Feria de carreras: descubre tu futuro profesional',
         descripcion: [
            'Para su desarrollo, se organizaron cinco mesas de trabajo, cada una dedicada a un tema considerado del interés de quienes participaban en el taller: problemas de la educación superior en el país, universidades públicas, universidades privadas, Universidad Nacional de Colombia, programa Ser Pilo Paga y créditos Icetex. Todas las personas del taller tuvieron la posibilidad de rotar por las cinco mesas. En cada una de ellas, se plantearon cinco preguntas, con el fin de identificar las ideas previas de los y las participantes sobre los distintos temas. Algunas de las preguntas fueron: ¿Cuál es el porcentaje de cobertura en educación superior el país?, ¿Cuáles son los requisitos para acceder al programa Ser Pilo Paga? ¿Cuántos estudiantes, aproximadamente, se presentan a la Universidad Nacional para ingresar el primer semestre del año, y cuántos son admitidos? Las personas respondieron las preguntas a partir de sus conocimientos, creencias y prejuicios.'
         ],
         keywords: ['Numeros', 'Contabilidad'],
         facultad:
            'Facultad de ciencias económicas, administrativas y gerenciales',
         tipo: ['Stand Virtual'],
         categoria: ['Administración'],
         fecha: '2023-04-18',
         hora: '08:00',
         duracion: '03:00',
         lugar: 'Aula Audiovisual',
         createdBy: `${process.env.ID_CREATED_BY}`
      },
      {
         organizador: 'Donald',
         participantes: ['Robert', 'Cristian'],
         imagen: {
            public_id:
               'Eventos UVM-Events/Encuentro_de_tecnolog%C3%ADa_y_dise%C3%B1o_en_la_universidad_tnmxu3',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681568402/Eventos%20UVM-Events/Encuentro_de_tecnolog%C3%ADa_y_dise%C3%B1o_en_la_universidad_tnmxu3.jpg'
         },
         titulo: 'Encuentro de tecnología y diseño en la universidad',
         descripcion: [
            'Sobre tecnología escuchamos hablar casi a diario. A diferencia del concepto de ciencia, la tecnología parecería estar más cercana a nosotros, porque reconocemos que vivimos inmersos en ella permanentemente. Incluso la vemos en espacios nuevos que nos toca recorrer, agilizando los procesos y acortando los tiempos. Y también tenemos noticias de ella cuando se le adjudica la culpa de la distancia entre la gente, su despersonalización y sus efectos no deseables sobre la vida y el medio ambiente. En fin, sabemos de muchos usos de la tecnología: cura pero también mata, educa pero también empobrece el pensamiento, agiliza o complica nuestra vida, acerca y aleja a las personas… Parecería ser que hay posturas tecnofílicas y tecnofóbicas entre las que nos debatimos, al tiempo que vivimos con ella. Esto no es nuevo, porque hay tecnología desde el momento en que el primer homínido tomó un trozo de madera entre sus manos, y lo usó para defender a sus hijos de las bestias o para matar a un vecino para quedarse con sus recursos. Ese pedazo de madera ya era tecnología.'
         ],
         keywords: ['Tecnología', 'Programacion'],
         facultad: 'Facultad de ingeniería',
         tipo: ['Stand Virtual'],
         categoria: ['Programación'],
         fecha: '2023-04-13',
         hora: '13:00',
         duracion: '02:00',
         lugar: 'Laboratorio de Computación',
         createdBy: `${process.env.ID_CREATED_BY}`
      }
   ])
}

module.exports = addEvents
