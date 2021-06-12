import fetch from 'node-fetch';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';

import { admin, app, db, generateTimestamps } from './firebase';
import firebase from 'firebase';

const TVSHOWS_API = 'https://api.themoviedb.org/3/discover/tv';
const API_KEY= '4ee2cdfcc72d40e3d831d4cc8ef4abf3';

(async () => {
  // Get tv-shows collection
  let collectionRef = db.collection('tv-shows');

  const createTvShow = (tvShow) => {
    const data = {
      ...generateTimestamps()
    };

    collectionRef.doc((tvShow.id).toString()).set(data).then(documentReference => {
      console.log(`Added tv-show.`);
    });
  };

  const createTvShows = async () => {
    let data = [];
    for (let i = 1; i < 6; i++) {
      const response = await fetch(`${TVSHOWS_API}?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${i}&include_null_first_air_dates=false`);
      const jsonData = await response.json();
      data = [...data, ...jsonData.results ] 
    }

    db.collection('counters').doc('tv-shows').set({numAmount: data.length}, {merge: true});

    const promises = [];
    data.forEach(tvShow => {
      promises.push(createTvShow(tvShow));
    });
    return await Promise.all(promises);
  };

  await createTvShows(); 
})();
