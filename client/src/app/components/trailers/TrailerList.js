import { useState, useCallback, useEffect } from "react";
import TrailerListItem from './TrailerListItem'
import styles from './TrailerList.module.scss';
import API from "../../services/dataService";
import { Scrollbars } from 'react-custom-scrollbars-2';


export const TrailerList = () => {
 const [trailers, setTrailers] = useState([]);

 const fetchData = useCallback(async() => {
  const response = await API.getMovieTrailers();
  setTrailers(response);
 }, []) 

 useEffect(() => {
  fetchData();
 }, [fetchData])


 return (
  <section className={styles.TrailerList}>
   <h2 className={styles.title}>Latest trailers</h2>
   <Scrollbars style={{ width: '100%', height: '20rem'}}>
   <div className={styles.list}>
   {trailers && trailers.map((trailer) => {
    return (
      <TrailerListItem key={trailer.id} trailer={trailer} />
    );
   })}
  </div>
  </Scrollbars>
  </section>
 )
}