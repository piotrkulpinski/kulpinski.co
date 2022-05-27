import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/partials/Button'
import Image from '@/components/partials/Image'
import Heading from '@/components/partials/Heading'
import styles from '@/styles/modules/Hero.module.scss'

export default function Hero({ title, description, buttons, image }) {
  return (
    <Section theme="dark">
      <Container>
        <div className={styles.base}>
          <div className={styles.content}>
            <Heading size="h1" tag="h2">{title}</Heading>

            {description && <div className={`${styles.copy} c-copy u-visible-xl-block`}>
              <p>{description}</p>
            </div>}

            {buttons && <div className={styles.buttons}>
              {buttons.map((button, index) => (
                <Button button={button} key={index} />
              ))}
            </div>}
          </div>

          {image && <div className={styles.media}>
            <Image image={image} layout="raw" priority />
          </div>}
        </div>
      </Container>
    </Section>
  )
}