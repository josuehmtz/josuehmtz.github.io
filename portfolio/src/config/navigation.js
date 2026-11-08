// Secciones de la página. El orden aquí define el menú y la numeración.
export const SECTIONS = [
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'contacto', label: 'Contacto' },
]

/** Número con dos dígitos de una sección, p. ej. "01". */
export const sectionIndex = (id) =>
  String(SECTIONS.findIndex((s) => s.id === id) + 1).padStart(2, '0')
