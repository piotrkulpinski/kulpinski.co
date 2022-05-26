import { useContext } from 'react'
import Link from 'next/link'
import { GlobalContext } from '@/pages/_app'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Contact from '@/components/Contact'
import styles from '@/styles/modules/Footer.module.scss'

export default function Footer() {
  const { siteName, contactOptions, footerLinks } = useContext(GlobalContext)

  return (
    <Section theme="light">
      <Container>
        <div className={styles.footer}>
          {contactOptions && <>
            <h3 className="c-heading c-heading--h3">
              Have a project in mind? Let's connect.
            </h3>

            <div className={styles.footerContact}>
              <Contact options={contactOptions} />
            </div>

            <div className={styles.footerSeparator}></div>
          </>}

          <nav className={styles.footerBottom}>
            <p className={styles.footerCopy}>
              &copy; 2008–{new Date().getFullYear()}&ensp;&ndash;&ensp;{siteName}
            </p>

            {footerLinks && footerLinks.map((link) =>
              <Link href={link.url} key={link.id}>
                <a target={link.target}>{link.title}</a>
              </Link>
            )}
          </nav>
        </div>
      </Container>
    </Section>
  )
}
