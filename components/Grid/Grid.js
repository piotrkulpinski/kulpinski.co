import cn from 'classnames'
import styles from './Grid.module.scss'

export function Grid({ children, separated, narrow, direction }) {
  return (
    <div className={cn(styles.base, {
      [styles.separated]: separated,
      [styles.narrow]: narrow,
      [styles[direction]]: direction,
    })}>
      {children}
    </div>
  )
}

export function GridItem({ children }) {
  return (
    <div className={styles.item}>{children}</div>
  )
}
