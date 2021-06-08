import { Link } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import API from '../../services/dataService';
import * as Routes from '../../routes';
import styles from './ShowListItem.module.scss';

const ShowListItem = ({ show }) => {
 const [genres, setGenres] = useState();
 const fetchData = useCallback(async () => {
  const response = await API.getGenreList('movie'); // shows & movies use the same genre IDs so movie genre IDs can be used for shows.
  setGenres(response.genres);
 }, []);

 useEffect(() => {
  fetchData();
 }, [fetchData]);

 return (
  <article className={styles.showListItem}>
   <Link to={Routes.SHOW_DETAILS.replace(':id', show.id)}>
    <picture className={styles.picture}>
     <img src={'https://image.tmdb.org/t/p/original/' + show.backdrop_path} alt={show.original_title} />
    </picture>
    <div className={styles.content}>
     <h3 className={styles.title}>{show.name}</h3>
     <p className={styles.rating}>{show.vote_average}</p>
    </div>
    {genres && <p className={styles.genres}>{show.genre_ids.map(element => {
     const foundGenre = genres.find(genre => genre.id === element);
     return foundGenre && (<li key={foundGenre.id}>{foundGenre.name}</li>)
    })}</p>}
   </Link>
  </article>
 )
};

export default ShowListItem;