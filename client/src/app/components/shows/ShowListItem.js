import { Link } from 'react-router-dom';

import * as Routes from '../../routes';

import styles from './ShowListItem.module.scss';

// const GENRES = [
//   {
//      "id":28,
//      "name":"Action"
//   },
//   {
//      "id":12,
//      "name":"Adventure"
//   },
//   {
//      "id":16,
//      "name":"Animation"
//   },
//   {
//      "id":35,
//      "name":"Comedy"
//   },
//   {
//      "id":80,
//      "name":"Crime"
//   },
//   {
//      "id":99,
//      "name":"Documentary"
//   },
//   {
//      "id":18,
//      "name":"Drama"
//   },
//   {
//      "id":10751,
//      "name":"Family"
//   },
//   {
//      "id":14,
//      "name":"Fantasy"
//   },
//   {
//      "id":36,
//      "name":"History"
//   },
//   {
//      "id":27,
//      "name":"Horror"
//   },
//   {
//      "id":10402,
//      "name":"Music"
//   },
//   {
//      "id":9648,
//      "name":"Mystery"
//   },
//   {
//      "id":10749,
//      "name":"Romance"
//   },
//   {
//      "id":878,
//      "name":"Science Fiction"
//   },
//   {
//      "id":10770,
//      "name":"TV Movie"
//   },
//   {
//      "id":53,
//      "name":"Thriller"
//   },
//   {
//      "id":10752,
//      "name":"War"
//   },
//   {
//      "id":37,
//      "name":"Western"
//   }
// ]

const ShowListItem = ({ show }) => {
  // console.log(movie.genre_ids.forEach(element => {
  //   console.log(GENRES.find((genre) => { return genre.id === element }))
  // }));
  return (
    <article className={styles.showListItem}>
      <picture className={styles.picture}>
        <img src={'https://image.tmdb.org/t/p/original/' + show.backdrop_path} alt={show.original_title} />
      </picture>
      <div className={styles.content}>
        <h3 className={styles.title}><Link to={Routes.SHOW_DETAILS.replace(':id', show.id)}>{show.name}</Link></h3>
        <p className={styles.rating}>{show.vote_average}</p>
      </div>
      {/* <p className={styles.rating}>{movie.genre_ids.map(element => {
        const foundGenre = GENRES.find(genre => genre.id === element);
        console.log(foundGenre)
        return (<li>{foundGenre}</li>)
      })}</p> */}
    </article>
  )
};

export default ShowListItem;