import Link from 'next/link'
import styles from '@/styles/modules/Nav.module.scss'

export default function Nav({ items, extraClass }) {
  return (
    <>
      {items && <nav className={`${styles.nav} ${extraClass ?? ''}`}>
        {items.map((item) =>
          <Link href="#">
            <a>{item}</a>
          </Link>
        )}
      </nav>}
    </>
  )
}
