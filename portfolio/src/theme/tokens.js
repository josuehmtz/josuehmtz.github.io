import { theme } from 'antd'

// Estilo "Técnico": Space Grotesk + JetBrains Mono, grises zinc y azul eléctrico.
const shared = {
  fontFamily: "'Space Grotesk', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
  fontFamilyCode: "'JetBrains Mono', ui-monospace, 'Cascadia Code', Consolas, monospace",
  borderRadius: 8,
  borderRadiusSM: 6,
  fontSize: 15,
  controlHeight: 40,
  wireframe: false,
}

const palettes = {
  light: {
    colorPrimary: '#2563eb',
    colorBgBase: '#f4f4f5',
    colorBgContainer: '#ffffff',
    colorTextBase: '#09090b',
    colorBorderSecondary: '#e4e4e7',
  },
  dark: {
    colorPrimary: '#3b82f6',
    colorBgBase: '#09090b',
    colorBgContainer: '#111113',
    colorTextBase: '#fafafa',
    colorBorderSecondary: '#27272a',
  },
}

/**
 * Devuelve la configuración de tema de antd para un modo dado.
 * @param {'light' | 'dark'} mode
 */
export const buildTheme = (mode) => ({
  algorithm: mode === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
  token: { ...shared, ...palettes[mode] },
  components: {
    Button: { primaryShadow: 'none', defaultShadow: 'none', fontWeight: 500 },
    Tag: { fontFamily: shared.fontFamilyCode, fontSizeSM: 11 },
    Segmented: { fontFamily: shared.fontFamilyCode },
  },
})
