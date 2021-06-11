import { useEffect, useState } from 'react';
import axios from 'axios';
/**
 * @param {string} query What results to get from the API, for example 'movie/popular'
 * @param {int} page What page to get from the API
 * @param {boolean} isList Is it a singular item, or a list of items?
 * @returns array if isList true, else an object
 */
const useFetch = (query, isList, page = 1) => {
 const [data, setData] = useState(null);
 const [error, setError] = useState(null);
 const [isLoading, setIsLoading] = useState(true);
 useEffect(() => {
  const getData = async () => { 
   try {
    const response = await axios.get(`https://api.themoviedb.org/3/${query}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=${page}`);
    const results = isList ? response.data.results : response.data;
    setData(results);
   } catch (err) {
    setError(err)
   } finally {
    setIsLoading(false);
   }
  }

  getData();
 }, [query, page, isList]);

 return [data, error, isLoading];
};

export default useFetch;