import { Link } from 'react-router-dom';
import styles from './MovieFeedCard.module.scss';
import * as Routes from '../../routes';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../general/CircularProgressBar.css'

export const MovieFeedCard = ({ movie }) => {
 const percentage = movie.vote_average * 10;

 return (
  <Link className={styles.card}  to={Routes.MOVIE_DETAILS.replace(':id', movie.id)}>
   <div className={styles.card}>
    <img className={styles.card__image} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
     <div styles={{ width: '3rem', height: '3rem' }}>
      <CircularProgressbar background={true} value={percentage} text={`${percentage}%`} />
     </div>
    <div className={styles.card__content}>
     <div className={styles.card__content__wrapper}>
      <p className={styles.card__title}>{movie.title}</p>
     </div>
     <p className={styles.card__date}>{movie.release_date && movie.release_date.split("-").reverse().join("-")}</p>
    </div>
   </div>
  </Link>
 )
}
