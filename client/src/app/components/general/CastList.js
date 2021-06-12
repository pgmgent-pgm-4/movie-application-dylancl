import { useState, useEffect } from 'react';
import styles from './CastList.module.scss';
import { IconContext } from 'react-icons';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import { CastListItem } from './CastListItem';

export const CastList = ({ castList }) => {
 const [pagedCast, setPagedCast] = useState([]);
 const [loadMoreCounter, setLoadMoreCounter] = useState(0);

 console.log(castList)

 useEffect(() => {
  const makeCastArray = () => {
   if (castList) {
    const castArray = [];
    const size = 8;
    for (let i = 0; i < castList.cast.length; i += size) {
     castArray.push(castList.cast.slice(i, i + size))
    }
    setPagedCast(castArray);
   }
  };

  makeCastArray();
 }, [castList]);

 const handleCastOnClick = () => {
  setLoadMoreCounter(prev => {
   if (prev === pagedCast.length - 1) {
    return 0;
   } else {
    return prev + 1;
   }
  });
 };

 return (
  <div className={styles.cast}>
   <div className={styles.cast__title}>
    <h3>Cast</h3>
    <div>
     <IconContext.Provider value={{ color: "white", verticalAlign: 'middle', className: 'chevron' }}>
      {pagedCast && <button onClick={handleCastOnClick}><BsChevronLeft /></button>}
      {pagedCast && <button onClick={handleCastOnClick}><BsChevronRight /></button>}
     </IconContext.Provider>
    </div>
   </div>
   <div className={styles.cast__list}>
    {pagedCast[loadMoreCounter] && pagedCast[loadMoreCounter].map((actor) => {
     return (
      <CastListItem key={actor.id} actor={actor} />
     )
    })}
   </div>
  </div>
 )
}