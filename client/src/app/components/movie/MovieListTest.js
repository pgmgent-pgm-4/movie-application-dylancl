import { useState, useEffect, useCallback } from 'react';
import MovieListItem from './MovieListItem';
import styles from './MovieList.module.scss';
import { IconContext } from 'react-icons';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import API from '../../services/dataService';

export const MovieListTest = ({ itemsPerPage = 4 }) => {
 const [pagedMovies, setPagedMovies] = useState([]);
 const [movies, setMovies] = useState(null);
 const [loadMoreCounter, setLoadMoreCounter] = useState(0);

 const fetchData = useCallback(async () => {
  const response = await API.getPopular('movie');
  const data = response.data;
  console.log(data.results);
  setMovies(data.results);
 }, [])

 // const updateMoviesArray = () => {
 //  console.log(movies);
 //  if (movies) {
 //   const moviesArray = [];
 //   const size = 4;
 //   for (let i = 0; i < movies.length; i += size) {
 //    moviesArray.push(movies.slice(i, i + size))
 //   }
 //   setPagedMovies(pagedMovies => pagedMovies = moviesArray);
 //  }
 // };

 useEffect(() => {
  fetchData();
 }, [fetchData]);

 useEffect(() => {
  const makeMovieArray = () => {
   console.log(movies);
   if (movies) {
    console.log(movies);
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
  </section>
 )
}

