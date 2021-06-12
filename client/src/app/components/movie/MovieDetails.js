import styles from './MovieDetails.module.scss';
import { Button } from './../button/Button';

export const MovieDetails = ({ movie }) => {
 return (
  <>
   <section style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}"` }} className={styles.hero}>
    <div className={styles.content}>
     <div className={styles.titleWrapper}>
      <h2 className={styles.title}>{movie.title}</h2>
      <p className={styles.genres}>{movie.genres.map(genre => {
       return (<li key={genre.id}>{genre.name}</li>)
      })}</p>
     </div>
     <p className={styles.description}>{movie.overview}</p>
     <div className={styles.buttonContainer}>
      <Button type="primary" content="Add to watchlist" />
     </div>
    </div>
   </section>
  </>
 )
};
