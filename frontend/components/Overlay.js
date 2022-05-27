import { useContext } from 'react'
import cn from 'classnames'
import Container from '@/components/Container';
import Contact from '@/components/Contact';
import Nav from '@/components/partials/Nav';
import styles from '@/styles/modules/Overlay.module.scss'
import { GlobalContext } from '@/pages/_app'

export default function Overlay({ isOpen, items }) {
  const { contactOptions } = useContext(GlobalContext)

  return (
    <aside className={`${cn(styles.overlay, { [styles['overlay--open']]: isOpen})} u-hidden-xl`}>
      <Container>
        <div className={styles.overlayInner}>
          <Nav items={items} extraClass={styles.overlayNav} />

          <div className={styles.overlayContact}>
            <Contact options={contactOptions} />
          </div>
        </div>
      </Container>
    </aside>
  )
}
