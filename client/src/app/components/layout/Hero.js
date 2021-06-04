import { useState, useEffect, useCallback } from 'react';
import API from '../../services/dataService';
import styles from './Hero.module.scss';

const Hero = () => {
	const [movie, setMovie] = useState();

	const fetchData = useCallback(async () => {
  const response = await API.getRandomMovie();
  const data = response;
		setMovie(data);
	}, []) 
 
	useEffect(() => {
		fetchData();
	}, [fetchData]);

 /**
  * @todo
  * Re-add genre tags
  */
	if (movie) {
		return (
			<section style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}"`}} className={styles.hero}>
				<div className={styles.content}>
					<div className={styles.titleWrapper}>
						<h2 className={styles.title}>{movie.title}</h2>	
						{/* <p className={styles.genres}>{movie.genre_ids.map(genre => {
							return (<li key={genre.id}>{genre.name}</li>)
						})}</p> */}
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