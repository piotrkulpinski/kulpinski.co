import cn from 'classnames'
import { useForm, ValidationError } from '@formspree/react'
import Button from '@components/Button/Button'
import styles from './Form.module.scss'

export default function Form({ confirmation }) {
  const [state, handleSubmit] = useForm('contactForm')

  if (state.succeeded) {
    return <p className={styles.message}>{confirmation}</p>
  }

  return (
    <form className={cn(styles.base, { [styles.isLoading]: state.submitting })} onSubmit={handleSubmit} noValidate>
      <div className={cn(styles.content, { [styles.contentIsLoading]: state.submitting })}>
        <div className={styles.field}>
          <input type="text" name="name" placeholder="Name" required className={styles.input} />
          <ValidationError prefix="Name" field="name" errors={state.errors} className={styles.error} />
        </div>

        <div className={styles.field}>
          <input type="email" name="email" placeholder="Email" required className={styles.input} />
          <ValidationError prefix="Email" field="email" errors={state.errors} className={styles.error} />
        </div>

        <div className={cn(styles.field, styles.fieldFull)}>
          <textarea name="message" placeholder="Message" rows="6" required className={styles.input}></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} className={styles.error} />
        </div>

        <div className={cn(styles.field, styles.fieldFull, styles.fieldAction)}>
          <Button button={{ title: 'Submit' }} disabled={state.submitting} />
        </div>
      </div>
    </form>
  )
}
