import styles from './ResultFeed.module.scss';
import { ResultFeedCard } from './ResultFeedCard';

export const ResultFeed = ({ results, type }) => {
 return (
  <section className={styles.ResultFeed}>
   {results && results.map(result => {
    return (
    <ResultFeedCard key={result.id} result={result} type={type}></ResultFeedCard>
    )
   })}
  </section>
 )
}

