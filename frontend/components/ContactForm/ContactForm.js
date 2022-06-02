import { useContext } from 'react'
import cn from 'classnames'
import Form from '@/components/Form/Form'
import Heading from '@/components/Heading/Heading'
import styles from './ContactForm.module.scss'
import { GlobalContext } from '@/pages/_app'

export default function ContactForm() {
  const { global } = useContext(GlobalContext)

  return (
    <div className={styles.base}>
      <div className={styles.column}>
        {global.contactTitle && <Heading size="h2" tag="h3">{global.contactTitle}</Heading>}

        {global.contactDescription && <div className={styles.content}>
          <p>{global.contactDescription}</p>
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
