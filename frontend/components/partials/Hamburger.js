import styles from '@/styles/modules/Hamburger.module.scss'

export default function Hamburger({ toggle }) {
  return (
    <button className={styles.hamburger} data-toggle={toggle}>
      <span className="u-visible-md-block">Menu</span>

      <div className={styles.hamburgerIcon}>
        <span></span>
      </div>
    </button>
  )
}
