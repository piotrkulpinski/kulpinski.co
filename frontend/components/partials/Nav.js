import Link from 'next/link'
import styles from '@/styles/modules/Nav.module.scss'

export default function Nav({ items }) {
  return (
    <>
      {items && <nav className={`${styles.nav} u-visible-xl-flex`}>
        {items.map((item) =>
          <Link href="#">
            <a>{item}</a>
          </Link>
        )}
      </nav>}
    </>
  )
}
