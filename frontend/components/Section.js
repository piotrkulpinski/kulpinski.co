import styles from '@/styles/modules/Section.module.scss'

export default function Section({ children, theme }) {
  console.log(theme);
  return (
    <div className={`${styles['section']} ${styles[`section--${theme || 'white'}`]}`}>
      {children}
    </div>
  )
}
