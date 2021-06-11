import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (query, page = 1) => {
 const [data, setData] = useState(null);
 const [error, setError] = useState(null);
 const [isLoading, setIsLoading] = useState(true);
 useEffect(() => {
  const getData = async () => { // expects something like movie/popular
   try {
    const response = await axios.get(`https://api.themoviedb.org/3/${query}/?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=${page}`);
    const results = response.data;
    setData(results.results);
   } catch (err) {
    setError(err)
   } finally {
    setIsLoading(false);
   }
  }

  getData();
 }, [query, page]);

 return [data, error, isLoading];
};

export default useFetch;