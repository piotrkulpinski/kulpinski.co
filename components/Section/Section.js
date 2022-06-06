import cn from 'classnames'
import styles from './Section.module.scss'

export default function Section({ children, theme, slug }) {
  return (
    <div className={cn(styles.base, styles[theme ?? 'white'])} id={slug ?? ''}>
      {children}
    </div>
  )
}
