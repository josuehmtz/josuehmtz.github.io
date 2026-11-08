/** "Josué Martínez" → "JM" */
export const getInitials = (name = '', max = 2) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, max)
    .map((word) => word[0].toUpperCase())
    .join('')
