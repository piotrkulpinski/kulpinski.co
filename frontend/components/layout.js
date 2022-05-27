import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '@/styles/modules/Layout.module.scss'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={styles.base}>
        {children}
      </div>
      <Footer />
    </>
  )
}
