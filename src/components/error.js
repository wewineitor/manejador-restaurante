import styles from '../app/styles/error.module.css'
export default function Error({mensaje}) {
  return (
    <p className={styles.error}>{mensaje}</p>
  )
}
