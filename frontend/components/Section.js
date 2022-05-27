import cn from 'classnames'
import styles from '@/styles/modules/Section.module.scss'

export default function Section({ children, theme }) {
  console.log(`sectionIs${(theme ?? 'white').toUpperCase()}`);
  return (
    <div className={cn(styles.section, styles[`section--${theme ?? 'white'}`])}>
      {children}
    </div>
  )
}
