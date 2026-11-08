// ─────────────────────────────────────────────────────────────
//  TUS PROYECTOS
//  Para agregar uno nuevo, copia un bloque { ... } y cambia los
//  datos. Aparecen en el orden en que están aquí.
//
//  Campos:
//    title        (obligatorio) nombre del proyecto
//    description  (obligatorio) una o dos frases
//    year         año o periodo, ej. '2025'
//    tags         tecnologías; también sirven como filtros
//    image        opcional: ruta a una imagen en portfolio/public/
//                 ej. '/projects/mi-proyecto.png'
//    demo         opcional: enlace al sitio en vivo
//    repo         opcional: enlace al repositorio
//    featured     opcional: true para mostrarlo destacado (más grande)
// ─────────────────────────────────────────────────────────────

/**
 * @typedef {Object} Project
 * @property {string} title
 * @property {string} description
 * @property {string} [year]
 * @property {string[]} [tags]
 * @property {string} [image]
 * @property {string} [demo]
 * @property {string} [repo]
 * @property {boolean} [featured]
 */

/** @type {Project[]} */
export const projects = [
  {
    title: 'Portafolio personal',
    description:
      'Este sitio. Minimalista, rápido y fácil de mantener: los proyectos se agregan desde un solo archivo.',
    year: '2026',
    tags: ['React', 'Ant Design', 'Vite'],
    repo: 'https://github.com/josuehmtz/josuehmtz.github.io',
    demo: 'https://josuehmtz.github.io',
    featured: true,
  },
  {
    title: 'Proyecto de ejemplo',
    description:
      'Reemplaza este texto con lo que hace tu proyecto y el problema que resuelve.',
    year: '2025',
    tags: ['JavaScript', 'Node.js'],
    repo: 'https://github.com/josuehmtz',
  },
  {
    title: 'Otro proyecto',
    description:
      'Una breve descripción. Si tiene captura de pantalla, agrégala con el campo image.',
    year: '2024',
    tags: ['React', 'API'],
  },
]
