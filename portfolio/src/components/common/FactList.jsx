import styles from './common.module.css'

/**
 * Fila de datos breves (valor destacado + etiqueta).
 * @param {{ facts: { value: string, label: string }[] }} props
 */
export const FactList = ({ facts = [] }) =>
  facts.length > 0 && (
    <dl className={styles.facts}>
      {facts.map(({ value, label }) => (
        <div key={label} className={styles.fact}>
          <dt className={styles.factLabel}>{label}</dt>
          <dd className={styles.factValue}>{value}</dd>
        </div>
      ))}
    </dl>
  )
