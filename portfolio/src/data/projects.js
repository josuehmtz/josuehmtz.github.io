// ─────────────────────────────────────────────────────────────
//  TUS PROYECTOS
//  Para agregar uno nuevo, copia un bloque { ... } y cambia los
//  datos. Aparecen en el orden en que están aquí.
//
//  Campos:
//    title        (obligatorio) nombre del proyecto
//    description  (obligatorio) una o dos frases
//    year         año o periodo, ej. '2025'
//    tags         tecnologías usadas
//    image        opcional: ruta a una imagen en portfolio/public/
//                 ej. '/projects/mi-proyecto.jpg'
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
    title: 'Altaria Eventos',
    description:
      'One-page website for an event venue in Zapopan, with a photo gallery and lightbox, a WhatsApp quote form, and an /admin panel (Decap CMS) so the client can update photos without touching code. Each publish triggers Netlify to optimize images to WebP, run the tests and deploy.',
    year: '2026',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Decap CMS', 'Netlify', 'Vitest'],
    image: '/projects/altaria-eventos.jpg',
    demo: 'https://altariaeventos.com',
    repo: 'https://github.com/josuehmtz/altaria-eventos',
    featured: true,
  },
]
