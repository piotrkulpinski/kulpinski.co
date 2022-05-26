import Link from 'next/link'
import styles from '@/styles/modules/Button.module.scss'

export default function Button({ button, size }) {
  return (
    <Link href={button.url} passHref>
      <a className={`${styles['button']} ${styles[`button--${size || 'md'}`]}`} target={button.target}>
        {button.title}
      </a>
    </Link>
  )
}
