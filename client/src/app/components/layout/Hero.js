import { useState, useEffect, useCallback } from 'react';
import styles from './Hero.module.scss';

const API = `https://api.themoviedb.org/3/movie/545609?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=1`;


const Hero = () => {
	const [movie, setMovie] = useState();
	const [genres, setGenres] = useState();
	const fetchData = useCallback(async () => {
		const response = await fetch(API);
		const data = await response.json();
		setMovie(data);
	}, []) 
	useEffect(() => {
		fetchData();
	}, [fetchData]);

	if (movie) {
		return (
			<section style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}"`}} className={styles.hero}>
				<div className={styles.content}>
					<div className={styles.titleWrapper}>
						<h2 className={styles.title}>{movie.title}</h2>	
						<p className={styles.genres}>{movie.genres.map(genre => {
							return (<li key={genre.id}>{genre.name}</li>)
						})}</p>
					</div>
					<p className={styles.description}>{movie.overview}</p>
					<div className={styles.buttonContainer}>
						<button className={styles.buttonLearn}>Learn more</button>
						<button className={styles.buttonTrailer}>Watch trailer</button>
					</div>
				</div>
			</section>
		)
	}
	return (null)
}

export default Hero;