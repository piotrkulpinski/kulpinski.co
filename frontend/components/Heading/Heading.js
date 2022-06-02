import cn from 'classnames'
import styles from './Heading.module.scss'

export default function Heading({ children, size, tag, className }) {
  const Tag = tag ?? size ?? 'h2'

  return (
    <Tag className={cn(styles.base, styles[size ?? 'h2'], className)}>
      {children}
    </Tag>
  )
}
