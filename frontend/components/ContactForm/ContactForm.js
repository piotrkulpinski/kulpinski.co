import { useState, useEffect, useContext } from 'react'
import cn from 'classnames'
import Form from '@/components/Form/Form'
import Heading from '@/components/Heading/Heading'
import Testimonial from '@/components/Testimonial/Testimonial'
import styles from './ContactForm.module.scss'
import { GlobalContext } from '@/pages/_app'
import { fetchAPI } from '@/lib/api'

export default function ContactForm() {
  const { global } = useContext(GlobalContext)
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    (async () => {
      const response = await fetchAPI(`/testimonials`, {
        populate: '*',
      })

      setTestimonials(response.data)
    })()
  }, [])

  let quotes, profile, testimonial

  if (testimonials.length) {
    if (testimonial = testimonials[Math.floor(Math.random() * testimonials.length)]) {
      ({ quotes, ...profile } = testimonial.attributes)
    }
  }

  return (
    <div className={styles.base}>
      <div className={styles.column}>
        {global.contactTitle && <Heading size="h2" tag="h3">{global.contactTitle}</Heading>}

        {global.contactDescription && <div className={styles.content}>
          <p>{global.contactDescription}</p>
        </div>}

        <div className={styles.form}>
          <Form confirmation={global.contactConfirmation} />
        </div>
      </div>

      <div className={`${cn(styles.column, styles.columnDark)} u-visible-lg-flex`}>
        {testimonial && <Testimonial profile={profile} quote={quotes[Math.floor(Math.random() * quotes.length)]} />}
      </div>
    </div>
  )
}
