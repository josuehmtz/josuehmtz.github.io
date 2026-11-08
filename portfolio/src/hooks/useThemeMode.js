import { useCallback, useEffect, useState } from 'react'
import { storage } from '../utils/storage'

const STORAGE_KEY = 'theme-mode'
const DARK_QUERY = '(prefers-color-scheme: dark)'

const getSystemMode = () => (window.matchMedia?.(DARK_QUERY).matches ? 'dark' : 'light')

/**
 * Modo claro/oscuro. Por defecto sigue al sistema (y sus cambios en vivo);
 * solo se fija cuando el visitante lo cambia manualmente.
 */
export const useThemeMode = () => {
  const [mode, setMode] = useState(() => storage.get(STORAGE_KEY) ?? getSystemMode())

  useEffect(() => {
    document.documentElement.dataset.theme = mode
  }, [mode])

  useEffect(() => {
    const media = window.matchMedia?.(DARK_QUERY)
    if (!media) return undefined
    const onChange = (e) => {
      if (!storage.get(STORAGE_KEY)) setMode(e.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const toggle = useCallback(() => {
    setMode((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      storage.set(STORAGE_KEY, next)
      return next
    })
  }, [])

  return { mode, toggle }
}
