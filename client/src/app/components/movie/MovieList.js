import { useState, useEffect, useCallback } from 'react';
import MovieListItem from './MovieListItem';
import styles from './MovieList.module.scss';
import { IconContext } from 'react-icons';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import API from '../../services/dataService';

export const MovieList = (props) => {
 const [pagedMovies, setPagedMovies] = useState([]);
	const [movies, setMovies] = useState();
	const [loadMoreCounter, setLoadMoreCounter] = useState(0);

	const fetchData = useCallback(async () => {
		const response = await API.getList('movie', props.query);
  console.log(response);
		setMovies(response);
	}, []);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

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
