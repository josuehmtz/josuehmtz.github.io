import { useState } from 'react'
import { Button, Drawer, Flex } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { HOME_ID, SECTIONS } from '../../config/navigation'
import { profile } from '../../data/profile'
import { useScrolled } from '../../hooks/useScrolled'
import { getInitials } from '../../utils/text'
import { Container } from '../common'
import { ThemeToggle } from './ThemeToggle'
import styles from './layout.module.css'

const NavLinks = ({ onNavigate, vertical = false }) => (
  <ul className={vertical ? styles.navListVertical : styles.navList}>
    {SECTIONS.map(({ id, label }) => (
      <li key={id}>
        <a href={`#${id}`} className={styles.navLink} onClick={onNavigate}>
          {label}
        </a>
      </li>
    ))}
  </ul>
)

export const AppHeader = () => {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <Container>
        <nav className={styles.nav} aria-label="Main">
          <a href={`#${HOME_ID}`} className={styles.logo} aria-label="Back to top">
            {getInitials(profile.name)}.
          </a>

          <Flex align="center" gap={4}>
            <div className={styles.desktopOnly}>
              <NavLinks />
            </div>
            <ThemeToggle />
            <Button
              className={styles.mobileOnly}
              type="text"
              shape="circle"
              icon={<MenuOutlined />}
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            />
          </Flex>
        </nav>
      </Container>

      <Drawer open={open} onClose={close} placement="right" size={260} title="Menu">
        <NavLinks vertical onNavigate={close} />
      </Drawer>
    </header>
  )
}
