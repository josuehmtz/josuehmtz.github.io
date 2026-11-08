import styles from './projects.module.css'

/** Imagen del proyecto o, si no tiene, una portada generada con su inicial. */
export const ProjectCover = ({ title, image }) => (
  <div className={styles.cover}>
    {image ? (
      <img src={image} alt={`Vista previa de ${title}`} loading="lazy" className={styles.coverImage} />
    ) : (
      <span className={styles.coverInitial} aria-hidden>
        {title.charAt(0)}
      </span>
    )}
  </div>
)
