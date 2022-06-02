import { useContext } from 'react'
import cn from 'classnames'
import Container from '@/components/Container/Container'
import Contact from '@/components/Contact/Contact'
import Menu from '@/components/Menu/Menu'
import styles from './Overlay.module.scss'
import { GlobalContext } from '@/pages/_app'

export default function Overlay({ isOpen }) {
  const { global } = useContext(GlobalContext)

  return (
    <aside className={`${cn(styles.base, { [styles.open]: isOpen})} u-hidden-xl`}>
      <Container>
        <div className={styles.inner}>
          <Menu menu="header" extraClass={styles.nav} />

          {global.contactOptions && <div className={styles.contact}>
            <Contact options={global.contactOptions} direction="rtl" />
          </div>}
        </div>
      </Container>
    </aside>
  )
}
