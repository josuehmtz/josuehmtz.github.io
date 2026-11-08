import { useInView } from '../../hooks/useInView'
import styles from './common.module.css'

/** Envuelve contenido para que aparezca suavemente al entrar en pantalla. */
export const Reveal = ({ children, delay = 0, as: Tag = 'div', className = '' }) => {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${styles.reveal} ${inView ? styles.revealVisible : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}
