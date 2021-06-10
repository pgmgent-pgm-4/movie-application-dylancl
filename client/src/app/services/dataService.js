import axios from 'axios'

const getRandomInt = (min, max) => {
 min = Math.ceil(min);
 max = Math.floor(max);
 return Math.floor(Math.random() * (max - min) + min);
}

const API = {
 getList: async (query, method, page = 1) => {
  let url = `https://api.themoviedb.org/3/${query}/${method}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=${page}`;
  if (method === 'trending') {
   url = `https://api.themoviedb.org/3/${method}/${query}/week?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=${page}`;
  }
  try {
   const response = await axios.get(url);
   return response.data.results;
  } catch (error) {
   console.log(error);
  }
 },
 getGenreList: async (query) => {
  const url = `https://api.themoviedb.org/3/genre/${query}/list?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=1`;
  try {
   const response = await axios.get(url);
   return response.data;
  } catch (error) {
   console.log(error);
  }
 },
 getMovieById: async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=1`;
  try {
   const response = await axios.get(url);
   return response.data;
  } catch (error) {
   console.log(error);
  }
 },
 getRandomMovie: async () => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=${getRandomInt(1, 20)}`;
  try {
   const response = await axios.get(url);
   const results = response.data.results;
   return results[getRandomInt(0, 20)];
  } catch (error) {
   console.log(error);
  }
 },
 getMovieTrailers: async () => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=1`;
  let trailers = [];
  try {
   const response = await axios.get(url);
   const results = response.data.results.slice(0, 10).map((element) => {
    return element.id;
   });
   for (const item in results) {
    const url = `https://api.themoviedb.org/3/movie/${results[item]}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&append_to_response=videos`;
    const trailerResponse = await axios.get(url);
    const trailerResult = trailerResponse.data;
    trailers.push(trailerResult);
   };
   return trailers;
  } catch (error) {
   console.log(error);
  }
 },
 getCast: async (query, id) => {
  const url = `https://api.themoviedb.org/3/${query}/${id}/credits?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&append_to_response=videos`;
  try {
   const response = await axios.get(url);
   return response.data;
  } catch (error) {
   console.log(error);
  }
 }
}

export default API;
