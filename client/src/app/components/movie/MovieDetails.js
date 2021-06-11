import { useState, useEffect, useCallback } from 'react';
import { CastCard } from '../general/CastCard';
import API from '../../services/dataService';
import styles from './MovieDetails.module.scss';
import { IconContext } from 'react-icons';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'


export const MovieDetails = ({ movie }) => {
 const [pagedCast, setPagedCast] = useState([]);
 const [cast, setCast] = useState();
 const [loadMoreCounter, setLoadMoreCounter] = useState(0);

 const fetchData = useCallback(async () => {
  const response = await API.getCast('movie', movie.id);
  const data = response;
  setCast(data.cast);
 }, [movie.id]);


 useEffect(() => {
  fetchData();
 }, [fetchData]);


 useEffect(() => {
  const makeCastArray = () => {
   if (cast) {
    const castArray = [];
    const size = 8;
    for (let i = 0; i < cast.length; i += size) {
     castArray.push(cast.slice(i, i + size))
    }
    setPagedCast(castArray);
   }
  };

  makeCastArray();
 }, [cast]);

 const handleCastOnClick = () => {
  setLoadMoreCounter(prev => {
   if (prev === pagedCast.length - 1) {
    return 0;
   } else {
    return prev + 1;
   }
  });
 };

 return (
  <>
   <section style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}"` }} className={styles.hero}>
    <div className={styles.content}>
     <div className={styles.titleWrapper}>
      <h2 className={styles.title}>{movie.title}</h2>
      <p className={styles.genres}>{movie.genres.map(genre => {
       return (<li key={genre.id}>{genre.name}</li>)
      })}</p>
     </div>
     <p className={styles.description}>{movie.overview}</p>
     <div className={styles.buttonContainer}>
      <button className={styles.buttonLearn}>Add to watchlist</button>
      <button className={styles.buttonTrailer}>Watch trailer</button>
     </div>
    </div>
   </section>
   <section className={styles.cast}>
    <div className={styles.cast__title}>
    <h3>Cast</h3>
     <div>
      <IconContext.Provider value={{ color: "white", verticalAlign: 'middle', className: 'chevron' }}>
       {pagedCast && <button onClick={handleCastOnClick}><BsChevronLeft /></button>}
       {pagedCast && <button onClick={handleCastOnClick}><BsChevronRight /></button>}
      </IconContext.Provider>
     </div>
    </div>
    <div className={styles.cast__list}>
     {pagedCast[loadMoreCounter] && pagedCast[loadMoreCounter].map((actor) => {
      return (
       <CastCard key={actor.id} actor={actor} />
      )
     })}
    </div>
   </section>
  </>
 )
};
