import { Button, Tooltip } from 'antd'
import { MoonOutlined, SunOutlined } from '@ant-design/icons'
import { useThemeModeContext } from '../../theme/ThemeModeProvider'

export const ThemeToggle = () => {
  const { mode, toggle } = useThemeModeContext()
  const label = mode === 'dark' ? 'Modo claro' : 'Modo oscuro'

  return (
    <Tooltip title={label}>
      <Button
        type="text"
        shape="circle"
        aria-label={label}
        icon={mode === 'dark' ? <SunOutlined /> : <MoonOutlined />}
        onClick={toggle}
      />
    </Tooltip>
  )
}
