import { HOME_ID } from '../../config/navigation'
import { profile } from '../../data/profile'
import { Container } from '../common'
import styles from './layout.module.css'

export const AppFooter = () => (
  <footer className={styles.footer}>
    <Container className={styles.footerInner}>
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <a href={`#${HOME_ID}`} className={styles.navLink}>
        Back to top ↑
      </a>
    </Container>
  </footer>
)
