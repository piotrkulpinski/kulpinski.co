import Button from '@/components/Button/Button'
import Image from '@/components/Image/Image'
import Heading from '@/components/Heading/Heading'
import styles from './Hero.module.scss'

export default function Hero({ title, description, buttons, image }) {
  return (
    <div className={styles.base}>
      <div className={styles.content}>
        <Heading size="h1" tag="h2" className={styles.title}>{title}</Heading>

        {description && <div className={`${styles.copy} c-copy u-visible-xl-block`}>
          <p>{description}</p>
        </div>}

        {buttons && <div className={styles.buttons}>
          {buttons.map((button, index) => (
            <Button button={button} key={index} />
          ))}
        </div>}
      </div>

      {image && image.data && <div className={styles.media}>
        <Image image={image.data} layout="raw" priority />
      </div>}
    </div>
  )
}
