import { Button } from 'antd'
import { ArrowUpOutlined } from '@ant-design/icons'
import styles from './common.module.css'

/** Botón que abre un enlace externo en otra pestaña. */
export const ExternalLink = ({ href, children, icon, type = 'default', size, showArrow = true }) => (
  <Button
    href={href}
    target="_blank"
    rel="noreferrer"
    type={type}
    size={size}
    icon={icon}
    iconPlacement="start"
  >
    {children}
    {showArrow && <ArrowUpOutlined className={styles.arrow} aria-hidden />}
  </Button>
)
