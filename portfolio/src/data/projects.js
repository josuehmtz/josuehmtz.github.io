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
      'Sitio one-page para un salón de eventos en Zapopan. Incluye galería con visor, formulario de cotización por WhatsApp y un panel /admin (Decap CMS) para que el cliente cambie sus fotos sin tocar código: al publicar, Netlify optimiza las imágenes a WebP, corre las pruebas y despliega.',
    year: '2026',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Decap CMS', 'Netlify', 'Vitest'],
    image: '/projects/altaria-eventos.jpg',
    demo: 'https://altariaeventos.com',
    repo: 'https://github.com/josuehmtz/altaria-eventos',
    featured: true,
  },
  {
    title: 'Portafolio personal',
    description:
      'Este sitio. Componentes reutilizables con Ant Design, contenido separado en archivos de datos, tema claro/oscuro y despliegue en GitHub Pages.',
    year: '2026',
    tags: ['React', 'Ant Design', 'Vite'],
    repo: 'https://github.com/josuehmtz/josuehmtz.github.io',
    demo: 'https://josuehmtz.github.io',
    featured: true,
  },
]
