import { projects } from '../data/projects'
import { Section } from '../components/common'
import { ProjectGrid } from '../components/projects'

export const ProjectsSection = () => (
  <Section id="projects">
    <ProjectGrid projects={projects} />
  </Section>
)
