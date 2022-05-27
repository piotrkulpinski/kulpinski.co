import styles from '@/styles/modules/Note.module.scss'

export default function Note({note}) {
  return (
    <p className={styles.base}>{note}</p>
  )
}
