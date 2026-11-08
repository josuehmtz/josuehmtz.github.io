import { Typography } from 'antd'
import { Reveal } from './Reveal'
import styles from './common.module.css'

/**
 * Sección de página con encabezado uniforme.
 * @param {{ id: string, index?: string, title: string, extra?: React.ReactNode }} props
 */
export const Section = ({ id, index, title, extra, children }) => (
  <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
    <Reveal className={styles.sectionHeader}>
      <div>
        {index && <span className={styles.sectionIndex}>{`// ${index}`}</span>}
        <Typography.Title level={2} id={`${id}-title`} className={styles.sectionTitle}>
          {title}
        </Typography.Title>
      </div>
      {extra}
    </Reveal>
    {children}
  </section>
)
