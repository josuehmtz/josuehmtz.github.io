import { Typography } from 'antd'
import { profile } from '../data/profile'
import { LabeledGroup, Reveal, Section, TagList } from '../components/common'
import styles from './sections.module.css'

export const AboutSection = () => (
  <Section id="about">
    <div className={styles.aboutGrid}>
      <Reveal>
        {profile.about.map((paragraph) => (
          <Typography.Paragraph key={paragraph} className={styles.aboutText}>
            {paragraph}
          </Typography.Paragraph>
        ))}
      </Reveal>
      <Reveal delay={100} className={styles.skillGroups}>
        {profile.skills.map(({ group, items }) => (
          <LabeledGroup key={group} label={group}>
            <TagList tags={items} />
          </LabeledGroup>
        ))}
      </Reveal>
    </div>
  </Section>
)
