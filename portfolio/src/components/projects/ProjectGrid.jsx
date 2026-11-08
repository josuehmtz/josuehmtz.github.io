import { Empty } from 'antd'
import { Reveal } from '../common'
import { ProjectCard } from './ProjectCard'
import styles from './projects.module.css'

/** Cuadrícula responsiva de proyectos. Los destacados ocupan dos columnas. */
export const ProjectGrid = ({ projects }) => {
  if (projects.length === 0) {
    return <Empty description="No hay proyectos con esta etiqueta" />
  }

  return (
    <div className={styles.grid}>
      {projects.map((project, i) => (
        <Reveal
          key={project.title}
          delay={(i % 2) * 80}
          className={project.featured ? styles.featuredCell : ''}
        >
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  )
}
