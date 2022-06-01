import { useContext } from 'react'
import cn from 'classnames'
import Container from '@/components/Container'
import Contact from '@/components/Contact'
import Nav from '@/components/partials/Nav'
import styles from '@/styles/modules/Overlay.module.scss'
import { GlobalContext } from '@/pages/_app'

export default function Overlay({ isOpen, items }) {
  const { contactOptions } = useContext(GlobalContext)

  return (
    <aside className={`${cn(styles.base, { [styles.open]: isOpen})} u-hidden-xl`}>
      <Container>
        <div className={styles.inner}>
          <Nav items={items} extraClass={styles.nav} />

          <div className={styles.contact}>
            <Contact options={contactOptions} direction="rtl" />
          </div>
        </div>
      </Container>
    </aside>
  )
}
