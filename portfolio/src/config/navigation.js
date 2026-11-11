// Secciones de la página. El orden aquí define el menú, la numeración
// y el título de cada sección (única fuente de verdad).
export const SECTIONS = [
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const HOME_ID = 'home'

/** Devuelve la sección con su número de dos dígitos, p. ej. { id, label, index: '01' }. */
export const getSection = (id) => {
  const position = SECTIONS.findIndex((s) => s.id === id)
  if (position === -1) throw new Error(`Sección desconocida: ${id}`)
  return { ...SECTIONS[position], index: String(position + 1).padStart(2, '0') }
}
