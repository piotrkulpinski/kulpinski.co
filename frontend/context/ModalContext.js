import { createContext } from 'react'
import useModal from '@/hooks/useModal'
import Modal from '@/components/Modal/Modal'

const ModalContext = createContext()

let ModalProvider = ({ children }) => {
  return (
    <ModalContext.Provider value={useModal()}>
      <Modal />
      {children}
    </ModalContext.Provider>
  )
}

export { ModalContext, ModalProvider }
