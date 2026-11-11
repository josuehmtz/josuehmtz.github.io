import { Flex, Typography } from 'antd'
import { ExpandableList, TagList } from '../common'
import styles from './experience.module.css'

/**
 * Una fila de experiencia: periodo a la izquierda, detalle a la derecha.
 * @param {{
 *   period: string, title: string, company?: string, context?: string,
 *   highlights?: string[], tags?: string[]
 * }} props
 */
export const ExperienceItem = ({ period, title, company, context, highlights = [], tags = [] }) => (
  <article className={styles.item}>
    <span className={styles.period}>{period}</span>
    <Flex vertical gap={12}>
      <div>
        <Typography.Title level={3} className={styles.title}>
          {title}
          {company && <span className={styles.company}> · {company}</span>}
        </Typography.Title>
        {context && <span className={styles.context}>{context}</span>}
      </div>
      <ExpandableList items={highlights} visible={3} />
      <TagList tags={tags} />
    </Flex>
  </article>
)
