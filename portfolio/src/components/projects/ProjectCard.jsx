import { Card, Flex, Typography } from 'antd'
import { GithubOutlined, GlobalOutlined } from '@ant-design/icons'
import { ExternalLink, TagList } from '../common'
import { ProjectCover } from './ProjectCover'
import styles from './projects.module.css'

/**
 * Tarjeta de un proyecto.
 * @param {{ project: import('../../data/projects').Project }} props
 */
export const ProjectCard = ({ project }) => {
  const { title, description, year, tags, image, demo, repo, featured } = project
  const hasLinks = Boolean(demo || repo)

  return (
    <Card
      className={`${styles.card} ${featured ? styles.featured : ''}`}
      cover={<ProjectCover title={title} image={image} />}
    >
      <Flex vertical gap={14} className={styles.cardBody}>
        <Flex justify="space-between" align="baseline" gap={12}>
          <Typography.Title level={3} className={styles.cardTitle}>
            {title}
          </Typography.Title>
          {year && <span className={styles.year}>{year}</span>}
        </Flex>

        <Typography.Paragraph type="secondary" className={styles.description}>
          {description}
        </Typography.Paragraph>

        <TagList tags={tags} />

        {hasLinks && (
          <Flex gap={8} wrap className={styles.links}>
            {demo && (
              <ExternalLink href={demo} icon={<GlobalOutlined />} size="small">
                Live site
              </ExternalLink>
            )}
            {repo && (
              <ExternalLink href={repo} icon={<GithubOutlined />} size="small">
                Code
              </ExternalLink>
            )}
          </Flex>
        )}
      </Flex>
    </Card>
  )
}
