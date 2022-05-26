import { useContext, useEffect } from 'react'
import Container from '@/components/Container'
import Overlay from '@/components/Overlay'
import Button from '@/components/partials/Button'
import Logo from '@/components/partials/Logo'
import Hamburger from '@/components/partials/Hamburger'
import styles from '@/styles/modules/Header.module.scss'
import { GlobalContext } from '@/pages/_app'

export default function Header() {
  const { contactButton } = useContext(GlobalContext)

  useEffect(() => {
    window.addEventListener('scroll', isSticky)
    return () => window.removeEventListener('scroll', isSticky)
  })

  const isSticky = () => {
    const header = document.querySelector(styles.header)
    const scrollTop = window.scrollY
    scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky')
  }

  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <Logo />
          <Hamburger toggle="nav" />

          {contactButton && <div className={styles.headerCta}>
            <Button button={contactButton} size="sm" />
          </div>}
        </div>
      </Container>

      <Overlay />
    </div>
  )
}
