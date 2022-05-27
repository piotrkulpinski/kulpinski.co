import { useContext } from 'react'
import Link from 'next/link'
import { GlobalContext } from '@/pages/_app'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Contact from '@/components/Contact'
import Heading from '@/components/partials/Heading'
import styles from '@/styles/modules/Footer.module.scss'

export default function Footer() {
  const { siteName, contactOptions, footerLinks } = useContext(GlobalContext)

  return (
    <Section theme="light">
      <Container>
        <div className={styles.base}>
          {contactOptions && <>
            <Heading size="h3">Have a project in mind? Let's connect.</Heading>

            <div className={styles.contact}>
              <Contact options={contactOptions} />
            </div>

            <div className={styles.separator}></div>
          </>}

          <nav className={styles.bottom}>
            <p className={styles.copy}>
              &copy; 2008–{new Date().getFullYear()}&ensp;&ndash;&ensp;{siteName}
            </p>

            {footerLinks && footerLinks.map((link, index) =>
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
