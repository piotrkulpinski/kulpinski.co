import { useState } from 'react'

export default function useModal() {
  let [modal, setModal] = useState(false)

  let handleModal = () => {
    setModal(!modal)
  }

  return { modal, handleModal }
}
