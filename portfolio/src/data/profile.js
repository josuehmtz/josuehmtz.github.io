// ─────────────────────────────────────────────────────────────
//  Tu información personal. Edita este archivo para cambiar
//  el texto del sitio sin tocar los componentes.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Josué Martínez',
  role: 'Desarrollador de software',
  location: 'México',
  // Frase corta que aparece debajo de tu nombre
  headline:
    'Construyo aplicaciones web claras, rápidas y fáciles de usar.',
  // Párrafo de "Sobre mí" (puedes usar varias entradas en el arreglo)
  about: [
    'Soy un desarrollador apasionado por el aprendizaje continuo, tanto para crecer en lo personal como en lo profesional. Me gusta retarme y llevarme al límite en cada proyecto.',
    'Trabajo principalmente con JavaScript, React y Node, y disfruto cuidar los detalles: rendimiento, accesibilidad y una buena experiencia de usuario.',
    'Actualmente estoy abierto a nuevas oportunidades y colaboraciones.',
  ],
  skills: ['JavaScript', 'React', 'Node.js', 'Ant Design', 'Git', 'SQL'],
  available: true, // muestra el indicador "Disponible para proyectos"
  email: 'tu-correo@ejemplo.com',
  links: [
    { label: 'GitHub', href: 'https://github.com/josuehmtz' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/josue-martinez-b01663231/' },
    // { label: 'CV', href: '/cv.pdf' }, // coloca el PDF en portfolio/public/
  ],
}

// Experiencia: la más reciente primero
export const experience = [
  {
    period: '2024 — Actual',
    title: 'Desarrollador Frontend',
    company: 'Empresa',
    description:
      'Describe en una o dos líneas qué hiciste y qué impacto tuvo.',
  },
  {
    period: '2022 — 2024',
    title: 'Desarrollador Web',
    company: 'Otra empresa',
    description:
      'Proyectos, tecnologías clave o logros medibles.',
  },
]
