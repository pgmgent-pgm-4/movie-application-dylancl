
import styles from './ResultReviewListItem.module.scss';
import StarRatings from 'react-star-ratings';


export const ResultReviewListItem = ({ result }) => {
 const rating = result.rating;
 return (
  <article className={styles.review}>
   <div className={styles.title__wrapper}>
    <h3 className={styles.title}>{result.title}</h3>
    <div className={styles.stars}><StarRatings
     rating={rating}
     starRatedColor={'var(--main-color)'}
     starEmptyColor={'var(--darken-color)'}
     starDimension="1.8rem"
    /></div>
   </div>
   <p className={styles.review__content}>
    {result.review}
   </p>
  </article>
 )
};
