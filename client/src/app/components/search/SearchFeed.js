import styles from '../resultfeed/ResultFeed.module.scss';
import { ResultFeedCard } from '../resultfeed/ResultFeedCard';

export const SearchFeed = ({ results }) => {
 return (
  <section className={styles.ResultFeed}>
   {results && results.map(result => {
    return (
    <ResultFeedCard key={result.id} result={result} type={result.media_type}></ResultFeedCard>
    )
   })}
  </section>
 )
}

