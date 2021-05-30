import { useState, useEffect, useCallback, useReducer } from 'react';
import MovieListItem from './MovieListItem';
import styles from './MovieList.module.scss';
import { IconContext } from 'react-icons';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'

const API = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=1`;


export const MovieList = ({ itemsPerPage = 4 }) => {
	const [movies, setMovies] = useState();
	const [loadMoreCounter, setLoadMoreCounter] = useState(0);

	const fetchData = useCallback(async () => {
		const response = await fetch(API);
		const data = await response.json();
		console.log(data);
		setMovies(data.results.slice(loadMoreCounter, loadMoreCounter + 4));
	}, [loadMoreCounter]) 
	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return (
		<section className={styles.movies}>
			<div className={styles.movies__title}>
				<h3>Movies</h3>
				<div>
					<IconContext.Provider value={{ color: "white", verticalAlign: 'middle', className: 'chevron' }}>
					{movies && (movies.length <= itemsPerPage) && <button onClick={() => setLoadMoreCounter(loadMoreCounter - 4)}><BsChevronLeft /></button>}
					{movies && (movies.length >= itemsPerPage) && <button onClick={() => setLoadMoreCounter(loadMoreCounter + 4)}><BsChevronRight /></button>}
					</IconContext.Provider>
				</div>
			</div>
			<div className={styles.movies__list}>
				{movies && movies.map(movie => {
					return (
						<MovieListItem key={movie.id} movie={movie} />
					)
				})}
			</div>
		</section>
	)
}
