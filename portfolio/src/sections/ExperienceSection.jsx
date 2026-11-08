import { experience } from '../data/profile'
import { sectionIndex } from '../config/navigation'
import { Reveal, Section } from '../components/common'
import { ExperienceItem } from '../components/experience'

const ID = 'experiencia'

export const ExperienceSection = () => (
  <Section id={ID} index={sectionIndex(ID)} title="Experiencia">
    {experience.map((job, i) => (
      <Reveal key={`${job.title}-${job.period}`} delay={i * 60}>
        <ExperienceItem {...job} />
      </Reveal>
    ))}
  </Section>
)
