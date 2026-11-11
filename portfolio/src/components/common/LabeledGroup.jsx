import styles from './common.module.css'

/** Bloque con una etiqueta pequeña (monoespaciada) arriba de su contenido. */
export const LabeledGroup = ({ label, children, className = '' }) => (
  <div className={`${styles.labeledGroup} ${className}`}>
    <span className={styles.groupLabel}>{label}</span>
    {children}
  </div>
)
