import { useState, useEffect } from 'react';
import { useFirestore } from "../../contexts/firebase/firestore.context";
import { MovieReviewListItem } from './MovieReviewListItem';
import styles from './MovieReviewList.module.scss';
import 'simplebar/dist/simplebar.min.css';
import '../general/SimpleBar.css'
import SimpleBar from 'simplebar-react';


export const MovieReviewList = ({ movieId }) => {
 const [movieReviews, setMovieReviews] = useState();
 const { getMovieReviews } = useFirestore();

 useEffect(() => {
  const fetchData = async () => {
   const data = await getMovieReviews(movieId);
   setMovieReviews(data);
  };

  fetchData();
 }, [getMovieReviews, movieId])

 if (movieReviews && movieReviews.length) {
  return (
   <section className={styles.reviews}>
    <h1 className={styles.reviews__title}>Reviews</h1>
    <SimpleBar className={styles.test} style={{ height: '21rem' }}>
     <div className={styles.reviews__list}>
      {movieReviews && movieReviews.map(movieReview => {
       return (
        <MovieReviewListItem key={movieReview.uid} movieReview={movieReview} />
       )
      })}
     </div>
    </SimpleBar>
   </section>
  )
 }
 return (null);
 
};

