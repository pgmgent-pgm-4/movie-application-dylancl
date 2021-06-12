import useFetch from '../hooks/fetch';
import { BaseLayout, Container } from '../layouts';
import { SearchFeed } from '../components/search/SearchFeed';
import { useState } from "react";
import Pagination from 'rc-pagination';
import '../components/general/Pagination.css'
import styles from './MoviesPage.module.scss'
import { Spinner } from '../components/layout/Spinner';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet';

const SearchPage = () => {
 const { query } = useParams();
 const [page, setPage] = useState(1);

 const [results, error, isLoading] = useFetch(`${query}`, true, true, page);

 const handlePageChange = (selectedPage) => {
  setPage(selectedPage)
 }

 return (
  <>
    <Helmet htmlAttributes title={`Search - ${query}`} description={'Movie Collection is a site that shows you the latest series and movies, with all the information you could ever need.'}/>

   {error ? error :
    isLoading || !results ? <Spinner /> :
   <BaseLayout>
    <Container>
     <div className={styles.title__wrapper}>
      <h1 className={styles.title}>{`Search results for ${query}`}</h1>
      {/* <Select styles={selectStyles} classNamePrefix={'dropdown'} className={styles.dropdown} onChange={handleSortChange} value={options.value} defaultValue={options[0]} options={options} /> */}
     </div>
     {results && <SearchFeed results={results}></SearchFeed>}
     <div className={styles.pagination__wrapper}>
      <Pagination
       onChange={handlePageChange}
       current={page}
       total={10000 / 20}
      />
     </div>
    </Container>
   </BaseLayout>}
  </>
 )
}

export default SearchPage;
