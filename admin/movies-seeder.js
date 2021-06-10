import fetch from 'node-fetch';
import { v4 as uuidv4 } from 'uuid';

import { admin, app, db, generateTimestamps } from './firebase';
import firebase from 'firebase';

const MOVIES_API = 'https://api.themoviedb.org/3/movie/popular?api_key=4ee2cdfcc72d40e3d831d4cc8ef4abf3';

(async () => {
  // Get movies collection
  let collectionRef = db.collection('movies');

  // Create a Movie
  const createMovie = (movie) => {
    // Add a document via movie object
    const data = {
      title: movie.title,
      description: movie.overview,
      thumbnailURL: 'https://image.tmdb.org/t/p/w1280' + movie.poster_path,
      ...generateTimestamps()
    };

    collectionRef.doc(movie.id.toString()).set(data).then(documentReference => {
      console.log(`Added movie.`);
    });
  };

  const createMovies = async (page) => {
    const response = await fetch(`${MOVIES_API}&page=${page}`);
    const jsonData = await response.json();
    const movieResults = jsonData.results;
    const promises = [];

    movieResults.forEach(movie => {
      promises.push(createMovie(movie));
    });
    return await Promise.all(promises);
  };
  const createMoreMovies = async () => {
    for (let i = 1; i < 5; i++) {
      await createMovies(i); 
    }
    const movieAmount = (await db.collection('movies').get()).size;
    db.collection('counters').doc('movies').set({numAmount: movieAmount}, {merge: true});
  }
  await createMoreMovies(); 
})();