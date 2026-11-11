import { experience } from '../data/profile'
import { Reveal, Section } from '../components/common'
import { ExperienceItem } from '../components/experience'

export const ExperienceSection = () => (
  <Section id="experience">
    {experience.map((job, i) => (
      <Reveal key={`${job.title}-${job.period}`} delay={i * 60}>
        <ExperienceItem {...job} />
      </Reveal>
    ))}
  </Section>
)
