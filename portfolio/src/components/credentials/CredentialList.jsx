import styles from './credentials.module.css'

/**
 * Lista compacta de credenciales (títulos, idiomas, certificaciones).
 * Cada elemento tiene un título y, opcionalmente, un detalle secundario.
 * @param {{ items: { title: string, detail?: string }[] }} props
 */
export const CredentialList = ({ items = [] }) => (
  <ul className={styles.list}>
    {items.map(({ title, detail }) => (
      <li key={title} className={styles.item}>
        <span className={styles.title}>{title}</span>
        {detail && <span className={styles.detail}>{detail}</span>}
      </li>
    ))}
  </ul>
)
