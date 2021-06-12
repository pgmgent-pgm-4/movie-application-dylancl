import { useState, useEffect } from 'react';
import { useFirestore } from "../../contexts/firebase/firestore.context";
import { ResultReviewListItem } from './ResultReviewListItem';
import styles from './ResultReviewList.module.scss';
import 'simplebar/dist/simplebar.min.css';
import '../general/SimpleBar.css'
import SimpleBar from 'simplebar-react';


export const ResultReviewList = ({ resultId, type }) => {
 const [resultReviews, setResultReviews] = useState();
 const { getResultReviews } = useFirestore();

 useEffect(() => {
  const fetchData = async () => {
   const data = await getResultReviews(resultId, type);
   setResultReviews(data);
  };

  fetchData();
 }, [getResultReviews, resultId, type])

 if (resultReviews && resultReviews.length) {
  return (
   <section className={styles.reviews}>
    <h1 className={styles.reviews__title}>Reviews</h1>
    <SimpleBar className={styles.test} style={{ height: '21rem' }}>
     <div className={styles.reviews__list}>
      {resultReviews && resultReviews.map(result => {
       return (
        <ResultReviewListItem key={result.uid} result={result} />
       )
      })}
     </div>
    </SimpleBar>
   </section>
  )
 }
 return (null);
 
};

