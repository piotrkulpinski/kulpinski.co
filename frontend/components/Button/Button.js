import cn from 'classnames'
import Link from 'next/link'
import { useContext } from 'react'
import { ModalContext } from '@context/modalContext'
import styles from './Button.module.scss'

export default function Button({ button, size, disabled }) {
  let { handleModal } = useContext(ModalContext)
  let classes = cn(styles.base, styles[size ?? 'medium'])

  let buttons = {
    link: <Link href={button.url}>
      <a className={classes} target={button.target}>
        {button.title}
      </a>
    </Link>,

    modal: <button className={classes} onClick={handleModal}>
      {button.title}
    </button>,

    submit: <button className={classes} type="submit" disabled={disabled}>
      {button.title}
    </button>,
  }

  return (
    (button.url
      ? button.url.includes('#contact')
        ? buttons.modal
        : buttons.link
      : buttons.submit
    )
  )
}
