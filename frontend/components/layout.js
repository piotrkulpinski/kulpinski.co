import Header from '@/components/Header'
import styles from '@/styles/modules/Layout.module.scss'

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
    </div>
  )
}
