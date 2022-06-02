import { useContext } from 'react'
import cn from 'classnames'
import Form from '@/components/partials/Form'
import Heading from '@/components/partials/Heading'
import styles from '@/styles/modules/ContactForm.module.scss'
import { GlobalContext } from '@/pages/_app'

export default function ContactForm() {
  const { contactTitle, contactDescription } = useContext(GlobalContext)

  return (
    <div className={styles.base}>
      <div className={styles.column}>
        {contactTitle && <Heading size="h2" tag="h3">{contactTitle}</Heading>}

        {contactDescription && <div className={styles.content}>
          <p>{contactDescription}</p>
        </div>}

        <div className={styles.form}>
          <Form />
        </div>
      </div>

      <div className={`${cn(styles.column, styles.columnDark)} u-visible-lg-flex`}>

      </div>
    </div>
  )
}
