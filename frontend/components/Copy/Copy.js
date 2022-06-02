import Markdown from 'react-markdown';
import styles from './Copy.module.scss'

export default function Copy({ children }) {
  return (
    <Markdown children={children} className={styles.base} />
  )
}
