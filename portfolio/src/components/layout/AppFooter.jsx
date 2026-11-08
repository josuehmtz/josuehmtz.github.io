import { profile } from '../../data/profile'
import { Container } from '../common'
import styles from './layout.module.css'

export const AppFooter = () => (
  <footer className={styles.footer}>
    <Container className={styles.footerInner}>
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <a href="#inicio" className={styles.navLink}>
        Volver arriba ↑
      </a>
    </Container>
  </footer>
)
