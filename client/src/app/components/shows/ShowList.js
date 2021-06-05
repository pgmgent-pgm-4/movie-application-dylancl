import { useState, useEffect, useCallback } from 'react';
import MovieListItem from './ShowListItem';
import styles from './ShowList.module.scss';
import { IconContext } from 'react-icons';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import API from '../../services/dataService';

export const ShowList = (props) => {
 const [pagedShows, setPagedShows] = useState([]);
 const [shows, setShows] = useState();
 const [loadMoreCounter, setLoadMoreCounter] = useState(0);

 const fetchData = useCallback(async () => {
  const response = await API.getList('tv', props.query);
  const data = response.data;
  setShows(data.results);
 }, []);

 useEffect(() => {
  fetchData();
 }, [fetchData]);

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
    console.log(prev);
    return 0;
   } else {
    return prev + 1;
   }
  });
 };

 return (
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
  </section>
 )
}
