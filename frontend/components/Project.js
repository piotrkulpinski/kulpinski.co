import Heading from '@/components/partials/Heading'
import styles from '@/styles/modules/Project.module.scss'

export default function Project({ project }) {
  return (
    <div className={styles.base}>
      <Heading size="h4" tag="h4">
        <a href={project.website} rel="noopener" target="_blank">
          {project.name}
        </a>
      </Heading>

      { project.description && <p className={styles.description}>{project.description}</p>}
    </div>
  )
}
