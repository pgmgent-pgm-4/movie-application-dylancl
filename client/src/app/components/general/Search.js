import { useState } from "react";
import useFetch from "../../hooks/fetch";
import { SearchResults } from "./SearchResults";
import { Spinner } from '../layout/Spinner';
import styles from './Search.module.scss';

export const Search = () => {
 const [input, setInput] = useState();
 const [results, error, isLoading] = useFetch(input, true, true)
 return (
  <>
   {error ? error :
    !results && isLoading ? <Spinner /> :
     <form>
      <input
       className={styles.search}
       placeholder="Search for movies, shows & people"
       onChange={(e) => setInput(e.target.value)}
      />
       {results && <SearchResults results={results} /> }
     </form>}
  </>
 )
}
