import API from "../services/dataService";
import { BaseLayout, Container } from '../layouts';
import { MovieFeed } from '../components/moviefeed/MovieFeed';
import { useEffect, useState } from "react";
import Select from 'react-select';
import Pagination from 'rc-pagination';
import '../components/general/Pagination.css'

import styles from './MoviesPage.module.scss'

const MoviesPage = () => {
 const [movies, setMovies] = useState();
 const [page, setPage] = useState(1);
 const [sort, setSort] = useState('popular');

 useEffect(() => {
  const fetchData = async () => {
   console.log(page);
   const data = await API.getList('movie', sort, page);
   setMovies(data);
  };

  fetchData();
 }, [sort, page])

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
  <BaseLayout>
   <Container>
    <div className={styles.title__wrapper}>
     <h1 className={styles.title}>Movies</h1>
     <Select styles={selectStyles} classNamePrefix={'dropdown'} className={styles.dropdown} onChange={handleSortChange} value={options.value} defaultValue={options[0]} options={options} />
    </div>
    {movies && <MovieFeed movies={movies}></MovieFeed>}
    <div className={styles.pagination__wrapper}>
     <Pagination
      onChange={handlePageChange}
      current={page}
      total={10000 / 20}
     />
    </div>
   </Container>
  </BaseLayout>
 )
}

export default MoviesPage
