import { useMemo, useState } from 'react'

export const ALL = 'Todos'

/**
 * Filtra una lista de elementos con `tags` por la etiqueta seleccionada.
 * Genérico: sirve para proyectos o cualquier colección etiquetada.
 */
export const useTagFilter = (items) => {
  const [active, setActive] = useState(ALL)

  const tags = useMemo(() => {
    const unique = new Set(items.flatMap((item) => item.tags ?? []))
    return [ALL, ...[...unique].sort((a, b) => a.localeCompare(b))]
  }, [items])

  const filtered = useMemo(
    () => (active === ALL ? items : items.filter((i) => i.tags?.includes(active))),
    [items, active]
  )

  return { tags, active, setActive, filtered }
}
