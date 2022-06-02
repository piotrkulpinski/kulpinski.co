import { useContext } from 'react'
import Link from 'next/link'
import { GlobalContext } from '@/pages/_app'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Contact from '@/components/Contact'
import Heading from '@/components/partials/Heading'
import Menu from '@/components/partials/Menu'
import styles from '@/styles/modules/Footer.module.scss'

export default function Footer() {
  const { global } = useContext(GlobalContext)

  return (
    <Section theme="light">
      <Container>
        <div className={styles.base}>
          {global.contactOptions && <>
            <div className={styles.contact}>
              <Heading size="h3">Have a project in mind? Let's connect.</Heading>
              <Contact options={global.contactOptions} />
            </div>

            <div className={styles.separator}></div>
          </>}

          <nav className={styles.bottom}>
            <p className={styles.copy}>
              &copy; 2008–{new Date().getFullYear()}&ensp;&ndash;&ensp;{global.siteName}
            </p>

            <Menu menu="footer" />

            {global.footerLinks && global.footerLinks.map((link, index) =>
              <Link href={link.url} key={index}>
                <a target={link.target}>{link.title}</a>
              </Link>
            )}
          </nav>
        </div>
      </Container>
    </Section>
  )
}
