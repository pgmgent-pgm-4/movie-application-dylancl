import { Link } from 'react-router-dom';
import styles from './ResultFeedCard.module.scss';
import * as Routes from '../../routes';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../general/CircularProgressBar.css'

export const ResultFeedCard = ({ result, type }) => {
 console.log(type);
 const percentage = result.vote_average * 10;

 if (result.media_type !== 'person') {
  return (
   <Link className={styles.card}  to={type === 'movie' ? Routes.MOVIE_DETAILS.replace(':id', result.id) : Routes.SHOW_DETAILS.replace(':id', result.id)}>
    <div className={styles.card}>
     <img className={styles.card__image} src={result.poster_path !== null && result.poster_path !== undefined ? `https://image.tmdb.org/t/p/original${result.poster_path}` : 'http://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png'} alt={result.title} />
      <div styles={{ width: '3rem', height: '3rem' }}>
       <CircularProgressbar background={true} value={percentage} text={`${percentage}%`} />
      </div>
     <div className={styles.card__content}>
      <div className={styles.card__content__wrapper}>
       <p className={styles.card__title}>{result.title ? result.title : result.name}</p>
      </div>
      <p className={styles.card__date}>{result.release_date ? result.release_date && result.release_date.split("-").reverse().join("-") : result.first_air_date && result.first_air_date.split("-").reverse().join("-")}</p>
     </div>
    </div>
   </Link>
  )
 }
 return (null)
}
