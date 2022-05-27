import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/partials/Button'
import styles from '@/styles/modules/Hero.module.scss'

export default function Hero({ title, description, buttons }) {
  return (
    <Section theme="dark">
      <Container>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h2 className="c-hero__title c-heading c-heading--h1">{title}</h2>

            {description && <div className="c-hero__copy c-copy u-visible-xl-block">
              {description}
            </div>}

            {buttons && <div className={styles.heroButtons}>
              {buttons.map((button, index) => (
                <Button button={button} key={index} />
              ))}
            </div>}
          </div>

          {/* {{ with .Site.Params.hero.image }}
            <div className="c-hero__media">
              <img src="{{ . }}" alt="">
            </div>
          {{ end }} */}
        </div>
      </Container>
    </Section>
  )
}
