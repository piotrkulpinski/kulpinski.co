import { useContext, useEffect, useState, useCallback } from 'react'
import cn from 'classnames'
import Container from '@/components/Container/Container'
import Overlay from '@/components/Overlay/Overlay'
import Button from '@/components/Button/Button'
import Logo from '@/components/Logo/Logo'
import Menu from '@/components/Menu/Menu'
import Hamburger from '@/components/Hamburger/Hamburger'
import styles from './Header.module.scss'
import { GlobalContext } from '@/pages/_app'

export default function Header() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  const [isHeaderCondensed, setIsHeaderCondensed] = useState(false)
  const toggleOverlay = useCallback(() => setIsOverlayOpen(!isOverlayOpen), [isOverlayOpen, setIsOverlayOpen])
  const { global } = useContext(GlobalContext)

  useEffect(() => {
    window.addEventListener('scroll', isCondensed)
    return () => window.removeEventListener('scroll', isCondensed)
  })

  const isCondensed = () => {
    setIsHeaderCondensed(window.scrollY >= 25)
  }

  return (
    <div className={cn(styles.base, {
      [styles.open]: isOverlayOpen,
      [styles.condensed]: isHeaderCondensed,
    })}>
      <Container>
        <div className={styles.inner}>
          <Logo />
          <Menu menu="header" extraClass="u-visible-xl-flex" />
          <Hamburger isOverlayOpen={isOverlayOpen} clickHandler={toggleOverlay} />

          {global.contactButton && <div className="u-visible-sm-block">
            <Button button={global.contactButton} size="small" />
          </div>}
        </div>
      </Container>

      <Overlay isOpen={isOverlayOpen} />
    </div>
  )
}
