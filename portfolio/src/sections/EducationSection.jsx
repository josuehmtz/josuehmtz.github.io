import { certifications, education, languages } from '../data/profile'
import { LabeledGroup, Reveal, Section } from '../components/common'
import { CredentialList } from '../components/credentials'
import styles from './sections.module.css'

// Adaptadores: convierten cada tipo de dato al formato { title, detail }
const joinDetail = (...parts) => parts.filter(Boolean).join(' · ')

const columns = [
  {
    label: 'Degree',
    items: education.map((e) => ({ title: e.title, detail: joinDetail(e.institution, e.period) })),
  },
  {
    label: 'Languages',
    items: languages.map((l) => ({ title: l.name, detail: l.level })),
  },
  {
    label: 'Certifications',
    items: certifications.map((c) => ({ title: c.title, detail: joinDetail(c.issuer, c.year) })),
  },
]

export const EducationSection = () => (
  <Section id="education">
    <div className={styles.educationGrid}>
      {columns.map(({ label, items }, i) => (
        <Reveal key={label} delay={i * 80}>
          <LabeledGroup label={label}>
            <CredentialList items={items} />
          </LabeledGroup>
        </Reveal>
      ))}
    </div>
  </Section>
)
