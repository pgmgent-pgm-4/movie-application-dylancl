import { useState } from "react";
import { Redirect } from "react-router";
import useFetch from "../../hooks/fetch";
import { SearchResults } from "./SearchResults";
import { Spinner } from '../layout/Spinner';
import styles from './Search.module.scss';
import * as Routes from '../../routes'

export const Search = () => {
 const [input, setInput] = useState();
 const [redirect, setRedirect] = useState(false);
 const [results, error, isLoading] = useFetch(input, true, true);

 const handleSubmit = e => {
  e.preventDefault();
  setRedirect(true);
 }
 if (redirect)  
  return <Redirect to={Routes.SEARCH_PAGE.replace(':query', input)} />

 return (
  <>
   {error ? error :
    !results && isLoading ? <Spinner /> :
     <form onSubmit={handleSubmit}>
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
