import styles from './MovieFeed.module.scss';
import { MovieFeedCard } from './MovieFeedCard';

export const MovieFeed = ({ movies }) => {
 return (
  <section className={styles.MovieFeed}>
   {movies && movies.map(movie => {
    return (
     <MovieFeedCard movie={movie}></MovieFeedCard>
    )
   })}
  </section>
 )
}

