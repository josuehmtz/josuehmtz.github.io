import styles from './common.module.css'

/** Píldora con un punto animado, p. ej. "Disponible para proyectos". */
export const StatusBadge = ({ children }) => (
  <span className={styles.status}>
    <span className={styles.statusDot} aria-hidden />
    {children}
  </span>
)
