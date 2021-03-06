import { useCallback, useEffect, useContext } from 'react'
import { createPortal } from 'react-dom'
import ContactForm from '@components/ContactForm/ContactForm'
import { ModalContext } from '@context/ModalContext'
import styles from './Modal.module.scss'

export default function Modal() {
  let { handleModal, modal } = useContext(ModalContext)

  const handleEscKey = useCallback((event) => {
    if (event.key === 'Escape') {
      handleModal(false)
    }
  }, [handleModal])

  useEffect(() => {
    document.addEventListener('keydown', handleEscKey, false)
    return () => document.removeEventListener('keydown', handleEscKey, false)
  }, [handleEscKey])

  if (modal) {
    return createPortal(
      <div className={styles.base} onClick={(e) => e.target === e.currentTarget ? handleModal(false) : ''}>
        <div className={styles.content}>
          <button className={styles.close} onClick={(e) => handleModal(false)}>
            <svg viewBox="0 0 36 36" className={styles.icon}>
              <path d="M.335 1.707 1.749.293l33.94 33.941-1.413 1.415z"/>
              <path d="M.335 34.234 34.275.294l1.415 1.413L1.749 35.65z"/>
            </svg>
          </button>

          <div className={styles.inner}>
            <ContactForm />
          </div>
        </div>
      </div>,

      document.querySelector("#modal-root")
    )
  }

  return
}
