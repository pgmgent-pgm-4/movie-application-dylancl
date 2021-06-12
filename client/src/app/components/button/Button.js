import styles from './Button.module.scss';

export const Button = ({ content, type, endpoint }) => {
 return (
  <button className={`${styles.button} ${styles[type]}`}>{content}</button>
 )
}
