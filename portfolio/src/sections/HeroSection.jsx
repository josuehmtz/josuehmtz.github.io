import { Button, Flex, Typography } from 'antd'
import { ArrowDownOutlined } from '@ant-design/icons'
import { profile } from '../data/profile'
import { ExternalLink, Reveal, StatusBadge } from '../components/common'
import styles from './sections.module.css'

export const HeroSection = () => {
  const { name, role, location, headline, available, links } = profile

  return (
    <section id="inicio" className={styles.hero}>
      {available && (
        <Reveal>
          <StatusBadge>Disponible para proyectos</StatusBadge>
        </Reveal>
      )}

      <Reveal delay={80}>
        <Typography.Title className={styles.heroTitle}>{name}</Typography.Title>
      </Reveal>

      <Reveal delay={160}>
        <Typography.Paragraph type="secondary" className={styles.heroLead}>
          <Typography.Text strong>{role}</Typography.Text>
          {location && ` en ${location}`}. {headline}
        </Typography.Paragraph>
      </Reveal>

      <Reveal delay={240}>
        <Flex wrap gap={10}>
          <Button type="primary" size="large" href="#proyectos" icon={<ArrowDownOutlined />}>
            Ver proyectos
          </Button>
          {links.map(({ label, href }) => (
            <ExternalLink key={label} href={href} size="large">
              {label}
            </ExternalLink>
          ))}
        </Flex>
      </Reveal>
    </section>
  )
}
