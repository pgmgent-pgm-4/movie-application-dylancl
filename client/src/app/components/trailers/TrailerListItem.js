import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as Routes from '../../routes';
import styles from './TrailerListItem.module.scss';
import './react-modal.scss';
import ModalVideo from 'react-modal-video';
import { BsPlayFill } from 'react-icons/bs';

const TrailerListItem = ({ trailer }) => {
 const [isOpen, setOpen] = useState(false);

 return (
  <>
   <>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={trailer.videos.results[0].key} onClose={() => setOpen(false)} />
   </>
   <article className={styles.TrailerListItem}>
    <div className={styles.pictureWrapper}>
      <div className={styles.picture} onClick={() => setOpen(true)} style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original/${trailer.backdrop_path}"` }} alt={trailer.name}><BsPlayFill /></div>
    </div>
    <div className={styles.content}>
     <h3 className={styles.title}><Link to={Routes.MOVIE_DETAILS.replace(':id', trailer.id)}>{trailer.title}</Link></h3>
     <p className={styles.name}>{trailer.videos.results[0].name}</p>
    </div>
   </article>
  </>
 )
};

export default TrailerListItem;