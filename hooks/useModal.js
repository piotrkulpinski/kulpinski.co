import { useState } from 'react'

export default function useModal() {
  let [modal, setModal] = useState(false)

  let handleModal = (state) => {
    setModal(state ?? !modal)
  }

  return { modal, handleModal }
}
