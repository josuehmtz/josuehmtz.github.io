// ─────────────────────────────────────────────────────────────
//  Tu información personal. Edita este archivo para cambiar
//  el texto del sitio sin tocar los componentes.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Josué Hiram Álvarez',
  role: 'Desarrollador Full Stack',
  location: 'Zapopan, Jalisco',
  // Frase corta que aparece debajo de tu nombre
  headline:
    'Construyo sistemas web y móviles con .NET 8, React y SQL Server, cuidando la arquitectura, las pruebas y que el código dure.',
  available: true, // muestra el indicador "Disponible para proyectos"
  availabilityLabel: 'Abierto a remoto / híbrido',
  // Datos breves que aparecen en el inicio
  facts: [
    { value: '4+', label: 'años de experiencia' },
    { value: '.NET 8 · React', label: 'stack principal' },
    { value: 'Telemetría GPS', label: 'industria actual' },
  ],
  // Párrafos de "Sobre mí"
  about: [
    'Soy Desarrollador Full Stack e Ingeniero en Sistemas Computacionales. Hoy construyo módulos de ERP, comunicación en tiempo real con dispositivos GPS e integraciones con terceros para una empresa de rastreo y telemetría vehicular.',
    'Me importa el código que perdura: arquitectura hexagonal, SOLID, pruebas automatizadas y CI/CD en Azure DevOps. También hago code review, defino el backlog y me encargo de las liberaciones a producción.',
    'Antes desarrollé funcionalidades de nómina y recursos humanos para clientes empresariales, donde la precisión de los datos no era negociable.',
  ],
  // Habilidades agrupadas por área
  skills: [
    {
      group: 'Backend',
      items: ['C#', '.NET 8', 'ASP.NET Core Web API', 'SignalR', 'Dapper', 'REST', 'Swagger / OpenAPI'],
    },
    {
      group: 'Frontend y móvil',
      items: ['React', 'TypeScript', 'React Native', 'Ant Design', 'Tailwind CSS'],
    },
    {
      group: 'Datos',
      items: ['SQL Server (T-SQL)', 'Stored procedures', 'Optimización de consultas', 'MySQL'],
    },
    {
      group: 'Arquitectura',
      items: ['Arquitectura hexagonal', 'Monolito modular', 'SOLID', 'Clean Code', 'Scrum'],
    },
    {
      group: 'DevOps y pruebas',
      items: ['Azure DevOps', 'CI/CD', 'Git', 'xUnit', 'Jest', 'Postman'],
    },
  ],
  email: 'jhiram.alvz@gmail.com',
  links: [
    { label: 'GitHub', href: 'https://github.com/josuehmtz' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jhiram-alvarez' },
    // { label: 'CV', href: '/cv.pdf' }, // coloca el PDF en portfolio/public/
  ],
}

// Experiencia: la más reciente primero
export const experience = [
  {
    period: 'Nov 2024 — Actual',
    title: 'Desarrollador Full Stack',
    company: 'Resser Tecnologías',
    context: 'Rastreo GPS y telemetría vehicular',
    highlights: [
      'APIs REST en .NET 8 para el ERP interno, dentro de un monolito modular con arquitectura hexagonal, Dapper y stored procedures en SQL Server.',
      'Módulos en React + TypeScript para una plataforma por roles que usan a diario varios departamentos.',
      'Comunicación en tiempo real con dispositivos GPS usando SignalR, e integraciones con plataformas de telemetría y canales de notificación (WhatsApp, correo, SMS).',
      'Consolidé varios flujos de datos del módulo de pruebas de equipos en un solo stored procedure, reduciendo la carga sobre el sistema de un proveedor externo.',
      'Mantengo la app en React Native que usan los técnicos de campo y me encargo de sus publicaciones en Google Play y App Store.',
      'Diseñé una validación de builds en dos niveles en Azure Pipelines: pruebas unitarias en cada PR y unitarias + de integración antes de fusionar.',
      'Reviso pull requests, defino el backlog en Azure DevOps con criterios de aceptación claros y libero a producción.',
    ],
    tags: ['.NET 8', 'React', 'TypeScript', 'SignalR', 'SQL Server', 'React Native', 'Azure DevOps'],
  },
  {
    period: 'Jul 2022 — Jul 2024',
    title: 'Desarrollador de Software Jr.',
    company: 'WorkTeam Cloud',
    context: 'SaaS de nómina y recursos humanos',
    highlights: [
      'Funcionalidades para una plataforma SaaS de nómina y RR. HH. con clientes empresariales, donde la precisión de los cálculos era crítica.',
      'APIs REST con PHP (CodeIgniter y un framework propio) y MySQL, validando los flujos de nómina con Postman.',
      'Soporte técnico directo a clientes: convertía sus reportes en correcciones y mejoras del producto.',
      'Interfaces responsivas con JavaScript, jQuery y Bootstrap.',
    ],
    tags: ['PHP', 'CodeIgniter', 'MySQL', 'JavaScript', 'Bootstrap'],
  },
  {
    period: 'Jul 2017 — Jul 2019',
    title: 'Auxiliar de Sistemas',
    company: 'Colegio La Paz',
    highlights: [
      'Soporte a alumnos y personal en la plataforma Moodle, y soporte de TI en general.',
    ],
  },
]

// Formación, idiomas y certificaciones
export const education = [
  {
    title: 'Ingeniería en Sistemas Computacionales',
    institution: 'Instituto Tecnológico Superior de Zapopan (TecMM)',
    period: '2018 — 2023',
  },
]

export const languages = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'Intermedio alto (B1) · ELASH II' },
]

export const certifications = [
  { title: 'Principios SOLID y Clean Code' },
  { title: 'SQL desde cero: guía práctica con PostgreSQL' },
  { title: 'Git y GitHub: control de versiones desde cero' },
  { title: 'Linux: de la terminal a shell scripting' },
  { title: 'Curso de JavaScript', issuer: 'Universidad Panamericana', year: '2022' },
  { title: 'ELASH II English Certificate', issuer: 'College Board', year: '2023' },
]
