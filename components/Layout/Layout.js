import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import { ModalProvider } from '@context/ModalContext'
import styles from './Layout.module.scss'

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
