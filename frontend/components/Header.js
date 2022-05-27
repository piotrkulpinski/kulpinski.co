import { useContext, useEffect, useState, useCallback } from 'react'
import cn from 'classnames'
import Container from '@/components/Container'
import Overlay from '@/components/Overlay'
import Button from '@/components/partials/Button'
import Logo from '@/components/partials/Logo'
import Nav from '@/components/partials/Nav'
import Hamburger from '@/components/partials/Hamburger'
import styles from '@/styles/modules/Header.module.scss'
import { GlobalContext } from '@/pages/_app'

export default function Header() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  const [isHeaderSticky, setIsHeaderSticky] = useState(false)
  const toggleOverlay = useCallback(() => setIsOverlayOpen(!isOverlayOpen), [isOverlayOpen, setIsOverlayOpen])
  const { contactButton } = useContext(GlobalContext)
  const menuItems = ['About', 'Work', 'Testimonials']

  useEffect(() => {
    window.addEventListener('scroll', isSticky)
    return () => window.removeEventListener('scroll', isSticky)
  })

  const isSticky = () => {
    setIsHeaderSticky(window.scrollY >= 250)
  }

  return (
    <div className={cn(styles.base, { [styles.open]: isOverlayOpen, [styles.sticky]: isHeaderSticky })}>
      <Container>
        <div className={styles.inner}>
          <Logo />
          <Nav items={menuItems} extraClass="u-visible-xl-flex" />
          <Hamburger isOverlayOpen={isOverlayOpen} clickHandler={toggleOverlay} />

          {contactButton && <div className={styles.cta}>
            <Button button={contactButton} size="small" />
          </div>}
        </div>
      </Container>

      <Overlay items={menuItems} isOpen={isOverlayOpen} />
    </div>
  )
}
