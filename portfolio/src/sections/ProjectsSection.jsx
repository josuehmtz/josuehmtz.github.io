import { projects } from '../data/projects'
import { sectionIndex } from '../config/navigation'
import { useTagFilter } from '../hooks/useTagFilter'
import { Section, TagFilter } from '../components/common'
import { ProjectGrid } from '../components/projects'

const ID = 'proyectos'

export const ProjectsSection = () => {
  const { tags, active, setActive, filtered } = useTagFilter(projects)

  return (
    <Section
      id={ID}
      index={sectionIndex(ID)}
      title="Proyectos"
      extra={<TagFilter tags={tags} value={active} onChange={setActive} />}
    >
      <ProjectGrid projects={filtered} />
    </Section>
  )
}
