import styles from './Label.module.scss'

export default function Label({ children, tag }) {
  const Tag = tag ?? 'h2'

  return (
    <Tag className={styles.base}>{children}</Tag>
  )
}
