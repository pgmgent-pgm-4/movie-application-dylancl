import { Link } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import API from '../../services/dataService';
import * as Routes from '../../routes';
import styles from './ShowListItem.module.scss';

const ShowListItem = ({ show }) => {
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
		<article className={styles.showListItem}>
			<picture className={styles.picture}>
				<img src={'https://image.tmdb.org/t/p/original/' + show.backdrop_path} alt={show.original_title} />
			</picture>
			<div className={styles.content}>
				<h3 className={styles.title}><Link to={Routes.SHOW_DETAILS.replace(':id', show.id)}>{show.name}</Link></h3>
				<p className={styles.rating}>{show.vote_average}</p>
			</div>
			{genres && <p className={styles.genres}>{show.genre_ids.map(element => {
				const foundGenre = genres.find(genre => genre.id === element);
				return foundGenre && (<li key={foundGenre.id}>{foundGenre.name}</li>)
			})}</p>}
		</article>
	)
};

export default ShowListItem;