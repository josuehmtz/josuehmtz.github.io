import { useEffect } from 'react'
import { theme } from 'antd'

// Mapa token de antd → variable CSS usada en los *.module.css
const TOKEN_TO_VAR = {
  colorBgLayout: '--bg',
  colorBgContainer: '--surface',
  colorFillQuaternary: '--subtle',
  colorText: '--text',
  colorTextSecondary: '--muted',
  colorBorderSecondary: '--line',
  colorPrimary: '--accent',
}

/**
 * Expone los tokens de antd como variables CSS en :root, para que los
 * estilos propios usen exactamente la misma paleta que los componentes.
 */
export const CssVariables = () => {
  const { token } = theme.useToken()

  useEffect(() => {
    const root = document.documentElement.style
    Object.entries(TOKEN_TO_VAR).forEach(([key, cssVar]) => {
      root.setProperty(cssVar, token[key])
    })
  }, [token])

  return null
}
