import { useState, useCallback, useEffect } from "react";
import TrailerListItem from './TrailerListItem';
import 'simplebar/dist/simplebar.min.css';
import API from "../../services/dataService";
import SimpleBar from 'simplebar-react';
import styles from './TrailerList.module.scss';



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
   <SimpleBar style={{ height: '21rem'}}>
   <div className={styles.list}>
   {trailers && trailers.map((trailer) => {
    return (
      <TrailerListItem key={trailer.id} trailer={trailer} />
    );
   })}
  </div>
  </SimpleBar>
  </section>
 )
}