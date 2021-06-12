import styles from './ResultDetails.module.scss';
import { Button } from '../button/Button';

export const ResultDetails = ({ result }) => {
 return (
  <>
   <section style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original${result.backdrop_path}"` }} className={styles.hero}>
    <div className={styles.content}>
     <div className={styles.titleWrapper}>
      <h2 className={styles.title}>{result.title ? result.title : result.name}</h2>
      <p className={styles.genres}>{result.genres.map(genre => {
       return (<li key={genre.id}>{genre.name}</li>)
      })}</p>
     </div>
     <p className={styles.description}>{result.overview}</p>
     <div className={styles.buttonContainer}>
      <Button type="primary" content="Add to watchlist" />
     </div>
    </div>
   </section>
  </>
 )
};
