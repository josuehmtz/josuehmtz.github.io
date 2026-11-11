import { Button, Flex, Typography } from 'antd'
import { ArrowDownOutlined } from '@ant-design/icons'
import { profile } from '../data/profile'
import { HOME_ID } from '../config/navigation'
import { ExternalLink, FactList, Reveal, StatusBadge } from '../components/common'
import styles from './sections.module.css'

export const HeroSection = () => {
  const { name, role, location, headline, available, availabilityLabel, facts, links } = profile

  return (
    <section id={HOME_ID} className={styles.hero}>
      {available && (
        <Reveal>
          <StatusBadge>{availabilityLabel ?? 'Available for work'}</StatusBadge>
        </Reveal>
      )}

      <Reveal delay={80}>
        <Typography.Title className={styles.heroTitle}>{name}</Typography.Title>
      </Reveal>

      <Reveal delay={160}>
        <Typography.Paragraph type="secondary" className={styles.heroLead}>
          <Typography.Text strong>{role}</Typography.Text>
          {location && ` based in ${location}`}. {headline}
        </Typography.Paragraph>
      </Reveal>

      <Reveal delay={240}>
        <Flex wrap gap={10}>
          <Button type="primary" size="large" href="#projects" icon={<ArrowDownOutlined />}>
            View projects
          </Button>
          {links.map(({ label, href }) => (
            <ExternalLink key={label} href={href} size="large">
              {label}
            </ExternalLink>
          ))}
        </Flex>
      </Reveal>

      <Reveal delay={320}>
        <FactList facts={facts} />
      </Reveal>
    </section>
  )
}
