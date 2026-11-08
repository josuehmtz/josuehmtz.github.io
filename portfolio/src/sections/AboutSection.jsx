import { Typography } from 'antd'
import { profile } from '../data/profile'
import { sectionIndex } from '../config/navigation'
import { Reveal, Section, TagList } from '../components/common'
import styles from './sections.module.css'

const ID = 'sobre-mi'

export const AboutSection = () => (
  <Section id={ID} index={sectionIndex(ID)} title="Sobre mí">
    <div className={styles.aboutGrid}>
      <Reveal>
        {profile.about.map((paragraph) => (
          <Typography.Paragraph key={paragraph} className={styles.aboutText}>
            {paragraph}
          </Typography.Paragraph>
        ))}
      </Reveal>
      <Reveal delay={100}>
        <Typography.Text type="secondary" className={styles.label}>
          Herramientas
        </Typography.Text>
        <TagList tags={profile.skills} gap={8} />
      </Reveal>
    </div>
  </Section>
)
