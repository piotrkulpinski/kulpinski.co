import { useContext } from 'react'
import { GlobalContext } from '@pages/_app'
import Section from '@components/Section/Section'
import Container from '@components/Container/Container'
import Contact from '@components/Contact/Contact'
import Heading from '@components/Heading/Heading'
import Menu from '@components/Menu/Menu'
import styles from './Footer.module.scss'

export default function Footer() {
  const { global } = useContext(GlobalContext)

  return (
    <Section theme="light">
      <Container>
        <div className={styles.base}>
          {global.contactOptions && <>
            <div className={styles.contact}>
              {global.footerTitle && <Heading size="h3">{global.footerTitle}</Heading>}
              <Contact options={global.contactOptions} />
            </div>

            <div className={styles.separator}></div>
          </>}

          <nav className={styles.bottom}>
            <p className={styles.copy}>
              &copy; 2008–{new Date().getFullYear()}&ensp;&ndash;&ensp;{global.siteName}
            </p>

            <Menu menu="footer" ghostStyle />
          </nav>
        </div>
      </Container>
    </Section>
  )
}
