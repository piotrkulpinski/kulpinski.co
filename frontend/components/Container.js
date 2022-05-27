import styles from '@/styles/modules/Container.module.scss'

export default function Container({ children }) {
  return (
    <div className={styles.base}>
      {children}
    </div>
  )
}
