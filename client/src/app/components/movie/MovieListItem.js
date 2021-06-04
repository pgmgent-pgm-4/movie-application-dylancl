import { Link } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import API from '../../services/dataService';

import * as Routes from '../../routes';

import styles from './MovieListItem.module.scss';


const MovieListItem = ({ movie }) => {
	const [genres, setGenres] = useState();

	const fetchData = useCallback(async () => {
		const response = await API.getGenreList('movie');
		const data = response.data;
		setGenres(data.genres);
	}, []);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return (
		<article className={styles.movieListItem}>
			<picture className={styles.picture}>
				<img src={'https://image.tmdb.org/t/p/original/' + movie.backdrop_path} alt={movie.original_title} />
			</picture>
			<div className={styles.content}>
				<h3 className={styles.title}><Link to={Routes.MOVIE_DETAILS.replace(':id', movie.id)}>{movie.title}</Link></h3>
				<p className={styles.rating}>{movie.vote_average}</p>
				{genres && <p className={styles.genres}>{movie.genre_ids.map(element => {
					const foundGenre = genres && genres.find(genre => genre.id === element);
					return (<li key={foundGenre.id}>{foundGenre.name}</li>)
				})}</p>}
			</div>
		</article>
	)
};

export default MovieListItem;