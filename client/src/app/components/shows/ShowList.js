import { useState, useEffect } from 'react';
import MovieListItem from './ShowListItem';
import styles from './ShowList.module.scss';
import { IconContext } from 'react-icons';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'

const API = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=1`;


export const ShowList = ({ itemsPerPage = 4 }) => {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [loadMoreCounter, setLoadMoreCounter] = useState(0);

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await fetch(API);
				if (!response.ok) {
					setError('There went something wrong, ara you sure the API link is right?');
				}
				const shows = await response.json();
				setData(shows.results.slice(loadMoreCounter, loadMoreCounter + 4));
			} catch (err) {
				setError(err)
			} finally {
				setIsLoading(false);
			}
		}
		getData();
	}, [loadMoreCounter]);
	
	return (
		<section className={styles.shows}>
			<div className={styles.shows__title}>
				<h3>TV Shows</h3>
				<div>
					<IconContext.Provider value={{ color: "white", verticalAlign: 'middle', className: 'chevron' }}>
					{data && (data.length <= itemsPerPage) && <button onClick={() => setLoadMoreCounter(loadMoreCounter - 4)}><BsChevronLeft /></button>}
					{data && (data.length >= itemsPerPage) && <button onClick={() => setLoadMoreCounter(loadMoreCounter + 4)}><BsChevronRight /></button>}
					</IconContext.Provider>
				</div>
			</div>
			<div className={styles.shows__list}>
				{data && data.map(show => {
					return (
						<MovieListItem key={show.id} show={show} />
					)
				})}
			</div>
		</section>
	)
}
