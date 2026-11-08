import styles from './common.module.css'

/** Limita el ancho del contenido y aplica los márgenes laterales. */
export const Container = ({ children, className = '' }) => (
  <div className={`${styles.container} ${className}`}>{children}</div>
)
