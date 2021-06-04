import axios from 'axios'

const getRandomInt = (min, max) => {
 min = Math.ceil(min);
 max = Math.floor(max);
 return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const API = {
 getPopular: async (query) => {
  const url = `https://api.themoviedb.org/3/${query}/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=1`;
  try {
   const response = await axios.get(url);
   return response;
  } catch (error) {
   console.log(error);
  }
 },
 getGenreList: async (query) => {
  const url = `https://api.themoviedb.org/3/genre/${query}/list?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=1`
  try {
   const response = await axios.get(url);
   return response;
  } catch (error) {
   console.log(error);
  }
 },
 getMovieById: async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=1`
  try {
   const response = await axios.get(url);
   return response;
  } catch (error) {
   console.log(error);
  }
 },
 getRandomMovie: async () => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=${getRandomInt(1, 20)}`
  try {
   const response = await axios.get(url);
   const results = response.data.results;
   return results[getRandomInt(0, 20)];
  } catch (error) {
   console.log(error);
  }
 }
}

export default API;
