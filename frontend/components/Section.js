import cn from 'classnames'
import styles from '@/styles/modules/Section.module.scss'

export default function Section({ children, theme }) {
  return (
    <div className={cn(styles.base, styles[theme ?? 'white'])}>
      {children}
    </div>
  )
}
