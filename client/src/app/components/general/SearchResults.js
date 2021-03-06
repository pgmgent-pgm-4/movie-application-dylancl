import styles from './SearchResults.module.scss';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { Link } from 'react-router-dom';
import * as Routes from '../../routes';

export const SearchResults = ({ results }) => {
 return (
  <ul className={styles.result}>
   <SimpleBar style={{ height: '50vh'}}>
    {results && results.map((result) => {
     return (
      <Link key={result.id} to={result.media_type === 'movie' ? Routes.MOVIE_DETAILS.replace(':id', result.id) : Routes.SHOW_DETAILS.replace(':id', result.id)}><li className={styles.result__item}>{result.name ? result.name : result.title} <span className={styles.result__item_type}>({result.media_type})</span></li></Link>)
    })}
   </SimpleBar> 
  </ul>
 )
}

