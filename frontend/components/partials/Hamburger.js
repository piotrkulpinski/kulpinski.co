import cn from 'classnames'
import styles from '@/styles/modules/Hamburger.module.scss'

export default function Hamburger({ clickHandler, isOverlayOpen }) {
  return (
    <button className={`${styles.hamburger} u-hidden-xl`} onClick={clickHandler}>
      <span className="u-visible-md-block">Menu</span>

      <div className={cn(styles.hamburgerIcon, { [styles['hamburgerIcon--open']]: isOverlayOpen })}>
        <span></span>
      </div>
    </button>
  )
}
