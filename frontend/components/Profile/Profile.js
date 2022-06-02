import Image from '@/components/Image/Image'
import styles from './Profile.module.scss'

export default function Profile({ profile }) {
  return (
    <div className={styles.base}>
      {profile.image && <Image image={profile.image.data} layout="raw" className={styles.image} />}

      <div className="t-sm">
        <strong>{profile.name}</strong>

        <div className={styles.meta}>
          <span className={styles.role}>{profile.role}</span>

          {profile.website
            ? <a href={profile.website} rel="noopener" target="_blank" tabIndex="-1" className={styles.link}>
                {profile.company}
              </a>
            : profile.company
          }
        </div>
      </div>
    </div>
  )
}
