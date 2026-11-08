import { createContext, useContext, useMemo } from 'react'
import { ConfigProvider, App as AntApp } from 'antd'
import esES from 'antd/locale/es_ES'
import { useThemeMode } from '../hooks/useThemeMode'
import { buildTheme } from './tokens'
import { CssVariables } from './CssVariables'

const ThemeModeContext = createContext(null)

/** Proporciona el modo de color y la configuración de antd a toda la app. */
export const ThemeModeProvider = ({ children }) => {
  const { mode, toggle } = useThemeMode()
  const value = useMemo(() => ({ mode, toggle }), [mode, toggle])

  return (
    <ThemeModeContext.Provider value={value}>
      <ConfigProvider theme={buildTheme(mode)} locale={esES}>
        <AntApp>
          <CssVariables />
          {children}
        </AntApp>
      </ConfigProvider>
    </ThemeModeContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeModeContext = () => {
  const ctx = useContext(ThemeModeContext)
  if (!ctx) throw new Error('useThemeModeContext debe usarse dentro de ThemeModeProvider')
  return ctx
}
