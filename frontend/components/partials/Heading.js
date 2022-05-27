import cn from 'classnames'
import styles from '@/styles/modules/Heading.module.scss'

export default function Heading({ children, size, tag }) {
  const Tag = tag ?? size ?? 'h2'

  return (
    <Tag className={cn(styles.base, styles[size ?? 'h2'])}>
      {children}
    </Tag>
  )
}
