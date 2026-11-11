// ─────────────────────────────────────────────────────────────
//  Tu información personal. Edita este archivo para cambiar
//  el texto del sitio sin tocar los componentes.
//  El contenido del sitio está en inglés.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Josué Hiram Álvarez',
  role: 'Full Stack Developer',
  location: 'Zapopan, Mexico',
  // Frase corta que aparece debajo de tu nombre
  headline:
    'I build web and mobile systems with .NET 8, React and SQL Server, with a focus on clean architecture, automated tests and code that lasts.',
  available: true, // muestra el indicador de disponibilidad
  availabilityLabel: 'Open to remote / hybrid',
  // Datos breves que aparecen en el inicio
  facts: [
    { value: '4+', label: 'years of experience' },
    { value: '.NET 8 · React', label: 'main stack' },
    { value: 'GPS telematics', label: 'current industry' },
  ],
  // Párrafos de "About"
  about: [
    "I'm a Full Stack Developer and Computer Systems Engineer. I currently build back-office ERP modules, real-time device communication and third-party integrations for a GPS tracking and vehicle telematics company.",
    'I care about code that lasts: hexagonal architecture, SOLID, automated tests and CI/CD in Azure DevOps. I also review code, define the backlog and own production releases.',
    'Previously I built enterprise payroll and HR features, where data accuracy was non-negotiable.',
  ],
  // Habilidades agrupadas por área
  skills: [
    {
      group: 'Backend',
      items: ['C#', '.NET 8', 'ASP.NET Core Web API', 'SignalR', 'Dapper', 'REST', 'Swagger / OpenAPI'],
    },
    {
      group: 'Frontend & mobile',
      items: ['React', 'TypeScript', 'React Native', 'Ant Design', 'Tailwind CSS'],
    },
    {
      group: 'Data',
      items: ['SQL Server (T-SQL)', 'Stored procedures', 'Query optimization', 'MySQL'],
    },
    {
      group: 'Architecture',
      items: ['Hexagonal architecture', 'Modular monolith', 'SOLID', 'Clean Code', 'Scrum'],
    },
    {
      group: 'DevOps & testing',
      items: ['Azure DevOps', 'CI/CD', 'Git', 'xUnit', 'Jest', 'Postman'],
    },
  ],
  email: 'jhiram.alvz@gmail.com',
  contactMessage:
    "Have a project in mind or a role that fits my experience? Send me a message and I'll get back to you soon.",
  links: [
    { label: 'GitHub', href: 'https://github.com/josuehmtz' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jhiram-alvarez' },
    // { label: 'Résumé', href: '/cv.pdf' }, // coloca el PDF en portfolio/public/
  ],
}

// Experiencia: la más reciente primero
export const experience = [
  {
    period: 'Nov 2024 — Present',
    title: 'Full Stack Developer',
    company: 'Resser Tecnologías',
    context: 'GPS tracking and vehicle telematics',
    highlights: [
      "Build REST APIs in .NET 8 for the company's back-office ERP, inside a modular monolith with hexagonal architecture, Dapper and SQL Server stored procedures.",
      'Develop React + TypeScript modules for a role-based platform used daily by multiple departments.',
      'Implemented real-time communication with GPS devices using SignalR, and integrations with external telematics platforms and notification channels (WhatsApp, email, SMS).',
      "Consolidated several data streams for the device-testing module into a single stored procedure, reducing load on an external provider's system.",
      'Maintain the React Native app that field technicians use every day, and own its releases to Google Play and the App Store.',
      'Set up a two-tier build-validation strategy in Azure Pipelines: unit tests on feature PRs, unit + integration tests before merging upstream.',
      'Review pull requests, lead backlog definition in Azure DevOps with clear acceptance criteria, and own production releases.',
    ],
    tags: ['.NET 8', 'React', 'TypeScript', 'SignalR', 'SQL Server', 'React Native', 'Azure DevOps'],
  },
  {
    period: 'Jul 2022 — Jul 2024',
    title: 'Junior Software Developer',
    company: 'WorkTeam Cloud',
    context: 'SaaS payroll and HR',
    highlights: [
      'Developed features for a SaaS payroll and HR platform serving enterprise clients, where calculation accuracy was critical.',
      'Built and tested REST APIs with PHP (CodeIgniter and an in-house framework) and MySQL, validating payroll data flows with Postman.',
      'Provided direct technical support to customers, turning their reports into fixes and product improvements.',
      'Built responsive web interfaces with JavaScript, jQuery and Bootstrap.',
    ],
    tags: ['PHP', 'CodeIgniter', 'MySQL', 'JavaScript', 'Bootstrap'],
  },
  {
    period: 'Jul 2017 — Jul 2019',
    title: 'Systems Assistant',
    company: 'Colegio La Paz',
    highlights: [
      'Supported students and staff on the Moodle learning platform and provided general IT support.',
    ],
  },
]

// Formación, idiomas y certificaciones
export const education = [
  {
    title: 'B.Eng. in Computer Systems Engineering',
    institution: 'Instituto Tecnológico Superior de Zapopan (TecMM)',
    period: '2018 — 2023',
  },
]

export const languages = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'Upper-intermediate (B1) · ELASH II' },
]

export const certifications = [
  { title: 'SOLID Principles and Clean Code' },
  { title: 'SQL from Scratch: A Practical Guide with PostgreSQL' },
  { title: 'Git & GitHub: Version Control from Scratch' },
  { title: 'Ultimate Linux: From Terminal Basics to Shell Scripting' },
  { title: 'JavaScript Course', issuer: 'Universidad Panamericana', year: '2022' },
  { title: 'ELASH II English Certificate', issuer: 'College Board', year: '2023' },
]
