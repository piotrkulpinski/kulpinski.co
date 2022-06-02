import cn from 'classnames'
import Button from '@/components/Button/Button'
import styles from './Form.module.scss'

export default function Form() {
  let handleOnSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form className={styles.base} onSubmit={handleOnSubmit}>
      <div className={styles.field}>
        <input type="text" name="name" placeholder="Name" required className={styles.input} />
      </div>

      <div className={styles.field}>
        <input type="email" name="email" placeholder="Email" required className={styles.input} />
      </div>

      <div className={cn(styles.field, styles.fieldFull)}>
        <textarea name="message" placeholder="Message" rows="6" required className={styles.input}></textarea>
      </div>

      <div className={cn(styles.field, styles.fieldFull, styles.fieldAction)}>
        <Button button={{ title: 'Submit' }} />
      </div>
    </form>
  )
}
