import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

export const Button = ({ content, type, endpoint }) => {
 return (
  <Link className={styles.link} to={`${endpoint}`}><button className={`${styles.button} ${styles[type]}`}>{content}</button></Link>
 )
}