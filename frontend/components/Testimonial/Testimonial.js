import Heading from '@/components/Heading/Heading'
import Profile from '@/components/Profile/Profile'
import styles from './Testimonial.module.scss'

export default function Testimonial({ testimonial }) {
  const quotes = testimonial.quotes

  return (
    <div className={styles.base}>
      {quotes && <Heading size="h2" tag="q" className={styles.title}>
        {quotes[0].content}
      </Heading>}

      <Profile profile={testimonial} />
    </div>
  )
}
