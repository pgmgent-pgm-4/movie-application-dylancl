import styles from './CastCard.module.scss';

export const CastCard = ({ actor }) => {
 return (
  <div className={styles.card}>
   <img className={styles.card__image} src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} onError={(e) => {e.target.onError = null; e.target.src = 'https://ibcces.org/wp-content/uploads/2019/03/blank-profile-picture.jpg'}} alt={actor.name} />
   <div className={styles.card__content}>
    <p className={styles.card__name}>{actor.name}</p> 
    <p className={styles.card__character}>{actor.character}</p>
   </div>
  </div>
 )
}
