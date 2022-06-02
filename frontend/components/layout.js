import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ModalProvider } from '@/context/modalContext'
import styles from '@/styles/modules/Layout.module.scss'

export default function Layout({ children }) {
  return (
    <div className={styles.base}  id="modal-root">
      <ModalProvider>
        <Header />

        <div className={styles.main}>
          {children}
        </div>

        <Footer />
      </ModalProvider>
    </div>
  )
}
