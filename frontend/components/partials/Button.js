import cn from 'classnames'
import Link from 'next/link'
import styles from '@/styles/modules/Button.module.scss'

export default function Button({ button, size }) {
  return (
    <Link href={button.url} passHref>
      <a className={cn(styles.base, styles[size ?? 'medium'])} target={button.target}>
        {button.title}
      </a>
    </Link>
  )
}
