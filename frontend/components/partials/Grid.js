import cn from 'classnames'
import styles from '@/styles/modules/Grid.module.scss'

export function Grid({children, separated, narrow}) {
  return (
    <div className={cn(styles.base, {[styles.separated]: separated, [styles.narrow]: narrow})}>
      {children}
    </div>
  )
}

export function GridItem({children}) {
  return (
    <div className={styles.item}>{children}</div>
  )
}
