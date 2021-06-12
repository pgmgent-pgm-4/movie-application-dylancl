import useFetch from '../hooks/fetch';
import { BaseLayout, Container } from '../layouts';
import { SearchFeed } from '../components/search/SearchFeed';
import { useState } from "react";
import Select from 'react-select';
import Pagination from 'rc-pagination';
import '../components/general/Pagination.css'
import styles from './MoviesPage.module.scss'
import { Spinner } from '../components/layout/Spinner';
import { useParams } from 'react-router';

const SearchPage = () => {
 const { query } = useParams();
 const [page, setPage] = useState(1);
 const [sort, setSort] = useState('popular');

 const [results, error, isLoading] = useFetch(`${query}`, true, true, page);

 const options = [
  { value: 'popular', label: 'Popular' },
  { value: 'upcoming', label: 'Upcoming' },
  { value: 'top_rated', label: 'Top rated' },
  { value: 'now_playing', label: 'Now playing' }
 ]

 const handleSortChange = (event) => {
  setSort(event.value);
  setPage(1);
 }

 const handlePageChange = (selectedPage) => {
  setPage(selectedPage)
 }

 const selectStyles = {
  option: (styles, { isFocused, isSelected }) => {
   const color = '#6703ff';
   return {
    ...styles,
    backgroundColor: isSelected
     ? color
     : isFocused
      ? 'rgb(103 3 255 / 50%)'
      : null,
    color: isSelected
     ? 'white'
     : 'black',
   };
  },
 }

 return (
  <>
   {error ? error :
    isLoading || !results ? <Spinner /> :
   <BaseLayout>
    <Container>
     <div className={styles.title__wrapper}>
      <h1 className={styles.title}>{`Search results for ${query}`}</h1>
      <Select styles={selectStyles} classNamePrefix={'dropdown'} className={styles.dropdown} onChange={handleSortChange} value={options.value} defaultValue={options[0]} options={options} />
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
