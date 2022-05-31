import Flickity from 'react-flickity-component'
import styles from '@/styles/modules/Carousel.module.scss'

export default function Carousel({ children }) {
  const flickityOptions = {
    wrapAround: true,
    autoPlay: 7000,
    adaptiveHeight: true,
    pageDots: false,
    arrowShape: 'M1.15 47.45l20.41-20.31a3.9 3.9 0 015.51 5.54L13.37 46.3h82.72a3.9 3.9 0 110 7.82H13.37l13.7 13.63a3.9 3.9 0 11-5.51 5.54L1.15 52.99a3.91 3.91 0 010-5.54z',
  }

  return (
    <Flickity
      className={styles.base}
      options={flickityOptions}
      reloadOnUpdate
      static
    >
      {children}
    </Flickity>
  )
}
