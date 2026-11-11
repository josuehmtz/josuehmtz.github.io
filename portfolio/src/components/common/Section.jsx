import { Typography } from 'antd'
import { getSection } from '../../config/navigation'
import { Reveal } from './Reveal'
import styles from './common.module.css'

/**
 * Sección de página con encabezado uniforme. El título y el número salen
 * de config/navigation.js, así el menú y los encabezados nunca se desincronizan.
 * @param {{ id: string, extra?: React.ReactNode }} props
 */
export const Section = ({ id, extra, children }) => {
  const { label: title, index } = getSection(id)

  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <Reveal className={styles.sectionHeader}>
        <div>
          <span className={styles.sectionIndex}>{`// ${index}`}</span>
          <Typography.Title level={2} id={`${id}-title`} className={styles.sectionTitle}>
            {title}
          </Typography.Title>
        </div>
        {extra}
      </Reveal>
      {children}
    </section>
  )
}
