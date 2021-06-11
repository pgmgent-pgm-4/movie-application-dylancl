
import styles from './MovieReviewListItem.module.scss';
import StarRatings from 'react-star-ratings';


export const MovieReviewListItem = ({ movieReview }) => {
 const rating = movieReview.rating;
 return (
  <article className={styles.review}>
   <div className={styles.title__wrapper}>
    <h3 className={styles.title}>{movieReview.title}</h3>
    <div className={styles.stars}><StarRatings
     rating={rating}
     starRatedColor={'var(--main-color)'}
     starEmptyColor={'var(--darken-color)'}
     starDimension="1.8rem"
    /></div>
   </div>
   <p className={styles.review__content}>
    {movieReview.review}
   </p>
  </article>
 )
};
