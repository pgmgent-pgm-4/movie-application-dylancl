import { useState, useEffect, useCallback } from 'react';
import MovieListItem from './MovieListItem';
import styles from './MovieList.module.scss';
import { IconContext } from 'react-icons';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import useFetch from '../../hooks/fetch';
import { Spinner } from './../layout/Spinner';

export const MovieList = ({ query, isList }) => {
 const [pagedMovies, setPagedMovies] = useState([]);
 const [loadMoreCounter, setLoadMoreCounter] = useState(0);

 const [movies, error, isLoading] = useFetch(query, isList);

 useEffect(() => {
  const makeMovieArray = () => {
   if (movies) {
    const moviesArray = [];
    const size = 4;
    for (let i = 0; i < movies.length; i += size) {
     moviesArray.push(movies.slice(i, i + size))
    }
    setPagedMovies(moviesArray);
   }
  };

  makeMovieArray();
 }, [movies]);

 const handleMoviesOnClick = () => {
  setLoadMoreCounter(prev => {
   if (prev === pagedMovies.length - 1) {
    console.log(prev);
    return 0;
   } else {
    return prev + 1;
   }
  });
 };

 return (
  <>
   {error ? error :
    isLoading || !movies ? <Spinner /> :
     <section className={styles.movies}>
      <div className={styles.movies__title}>
       <h3>Movies</h3>
       <div>
        <IconContext.Provider value={{ color: "white", verticalAlign: 'middle', className: 'chevron' }}>
         {pagedMovies && <button onClick={handleMoviesOnClick}><BsChevronLeft /></button>}
         {pagedMovies && <button onClick={handleMoviesOnClick}><BsChevronRight /></button>}
        </IconContext.Provider>
       </div>
      </div>
      <div className={styles.movies__list}>
       {pagedMovies[loadMoreCounter] && pagedMovies[loadMoreCounter].map(movie => {
        return (
         <MovieListItem key={movie.id} movie={movie} />
        )
       })}
      </div>
     </section>}
  </>
 )
}
