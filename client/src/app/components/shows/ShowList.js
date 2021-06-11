import { useState, useEffect } from 'react';
import MovieListItem from './ShowListItem';
import styles from './ShowList.module.scss';
import { IconContext } from 'react-icons';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import useFetch from '../../hooks/fetch';
import { Spinner } from './../layout/Spinner';

export const ShowList = ({ query }) => {
 const [pagedShows, setPagedShows] = useState([]);
 const [loadMoreCounter, setLoadMoreCounter] = useState(0);

 const [shows, error, isLoading] = useFetch(query, true);

 useEffect(() => {
  const makeShowsArray = () => {
   if (shows) {
    const showsArray = [];
    const size = 4;
    for (let i = 0; i < shows.length; i += size) {
     showsArray.push(shows.slice(i, i + size))
    }
    setPagedShows(showsArray);
   }
  };

  makeShowsArray();
 }, [shows]);

 const handleshowsOnClick = () => {
  setLoadMoreCounter(prev => {
   if (prev === pagedShows.length - 1) {
    return 0;
   } else {
    return prev + 1;
   }
  });
 };

 return (
  <>
   {error ? error :
    isLoading || !shows ? <Spinner /> :
     <section className={styles.shows}>
      <div className={styles.shows__title}>
       <h3>TV Shows</h3>
       <div>
        <IconContext.Provider value={{ color: "white", verticalAlign: 'middle', className: 'chevron' }}>
         {pagedShows && <button onClick={handleshowsOnClick}><BsChevronLeft /></button>}
         {pagedShows && <button onClick={handleshowsOnClick}><BsChevronRight /></button>}
        </IconContext.Provider>
       </div>
      </div>
      <div className={styles.shows__list}>
       {pagedShows[loadMoreCounter] && pagedShows[loadMoreCounter].map(show => {
        return (
         <MovieListItem key={show.id} show={show} />
        );
       })}
      </div>
     </section>}
  </>
 )
}
