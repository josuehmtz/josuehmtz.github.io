import { Typography } from 'antd'
import styles from './experience.module.css'

/** Una fila de experiencia: periodo a la izquierda, detalle a la derecha. */
export const ExperienceItem = ({ period, title, company, description }) => (
  <article className={styles.item}>
    <span className={styles.period}>{period}</span>
    <div>
      <Typography.Title level={3} className={styles.title}>
        {title}
        {company && <span className={styles.company}> · {company}</span>}
      </Typography.Title>
      {description && (
        <Typography.Paragraph type="secondary" className={styles.description}>
          {description}
        </Typography.Paragraph>
      )}
    </div>
  </article>
)
