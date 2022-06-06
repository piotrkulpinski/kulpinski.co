import Heading from '@components/Heading/Heading'
import Profile from '@components/Profile/Profile'
import styles from './Testimonial.module.scss'

export default function Testimonial({ profile, quote }) {
  return (
    <div className={styles.base}>
      {quote && <Heading size="h2" tag="q" className={styles.title}>
        {quote.content}
      </Heading>}

      <Profile profile={profile} />
    </div>
  )
}
