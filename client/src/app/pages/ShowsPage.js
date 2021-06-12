import useFetch from '../hooks/fetch';
import { BaseLayout, Container } from '../layouts';
import { ResultFeed } from '../components/resultfeed/ResultFeed';
import { useState } from "react";
import Select from 'react-select';
import Pagination from 'rc-pagination';
import '../components/general/Pagination.css'
import styles from './ShowsPage.module.scss'
import { Spinner } from '../components/layout/Spinner';

const ShowsPage = () => {
 const [page, setPage] = useState(1);
 const [sort, setSort] = useState('popular');

 const [shows, error, isLoading] = useFetch(`tv/${sort}`, true, false, page);

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
    isLoading || !shows ? <Spinner /> :
   <BaseLayout>
    <Container>
     <div className={styles.title__wrapper}>
      <h1 className={styles.title}>Shows</h1>
      <Select styles={selectStyles} classNamePrefix={'dropdown'} className={styles.dropdown} onChange={handleSortChange} value={options.value} defaultValue={options[0]} options={options} />
     </div>
     {shows && <ResultFeed results={shows} type='show'></ResultFeed>}
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

export default ShowsPage;
