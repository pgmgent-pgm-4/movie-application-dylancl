import { Link } from 'react-router-dom';

import * as Routes from '../../routes';

import styles from './MovieListItem.module.scss';

const GENRES = [
  {
     "id":28,
     "name":"Action"
  },
  {
     "id":12,
     "name":"Adventure"
  },
  {
     "id":16,
     "name":"Animation"
  },
  {
     "id":35,
     "name":"Comedy"
  },
  {
     "id":80,
     "name":"Crime"
  },
  {
     "id":99,
     "name":"Documentary"
  },
  {
     "id":18,
     "name":"Drama"
  },
  {
     "id":10751,
     "name":"Family"
  },
  {
     "id":14,
     "name":"Fantasy"
  },
  {
     "id":36,
     "name":"History"
  },
  {
     "id":27,
     "name":"Horror"
  },
  {
     "id":10402,
     "name":"Music"
  },
  {
     "id":9648,
     "name":"Mystery"
  },
  {
     "id":10749,
     "name":"Romance"
  },
  {
     "id":878,
     "name":"Science Fiction"
  },
  {
     "id":10770,
     "name":"TV Movie"
  },
  {
     "id":53,
     "name":"Thriller"
  },
  {
     "id":10752,
     "name":"War"
  },
  {
     "id":37,
     "name":"Western"
  }
]

const MovieListItem = ({ movie }) => {
  return (
    <article className={styles.movieListItem}>
      <picture className={styles.picture}>
        <img src={'https://image.tmdb.org/t/p/original/' + movie.backdrop_path} alt={movie.original_title} />
      </picture>
      <div className={styles.content}>
        <h3 className={styles.title}><Link to={Routes.MOVIE_DETAILS.replace(':id', movie.id)}>{movie.title}</Link></h3>
        <p className={styles.rating}>{movie.vote_average}</p>
        <p className={styles.genres}>{movie.genre_ids.map(element => {
        const foundGenre = GENRES.find(genre => genre.id === element);
        return (<li key={foundGenre.id}>{foundGenre.name}</li>)
      })}</p>
      </div>
    </article>
  )
};

export default MovieListItem;