import React, { useContext } from 'react';
import 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

import { useFirebase } from './firebase.context';

const FirestoreContext = React.createContext(null);
const useFirestore = () => useContext(FirestoreContext);

const FirestoreProvider = ({ children }) => {
 const { app } = useFirebase();
 const db = app.firestore();

 const getResults = async (type) => {
  const query = type === 'movie' ? db.collection('movies').orderBy('createdAt', 'desc') : db.collection('movies').orderBy('createdAt', 'desc');
  const querySnapshot = await query.get();
  const movies = querySnapshot.docs.map((doc) => {
   return {
    uid: doc.id,
    ...doc.data()
   }
  });
  return movies;
 };

 const getPagedMovies = async (itemsPerPage = 10, lastVisible = null) => {
  let query = null;

  if (lastVisible === null) {
   query = db.collection('movies')
    .orderBy('createdAt', 'desc')
    .limit(itemsPerPage);
  } else {
   query = db.collection('movies')
    .orderBy('createdAt', 'desc')
    .startAfter(lastVisible)
    .limit(itemsPerPage);
  }

  const querySnapshot = await query.get();
  const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
  const movies = querySnapshot.docs.map((doc) => {
   return {
    uid: doc.id,
    ...doc.data()
   }
  });
  return { movies, itemsPerPage, lastVisibleDoc };
 };

 const getMovieById = async (movieId) => {
  const docRef = db.collection('projects').doc(movieId);
  const doc = await docRef.get();
  if (!doc.exists) {
   throw new Error('Document does not exist!');
  }

  return {
   uid: doc.id,
   ...doc.data()
  }
 };

 const getResultReviews = async (resultId, type) => {
  const query =
   (type === 'movie'
    ? db.collection('movies').doc(resultId).collection('reviews').orderBy('createdAt', 'desc')
    : db.collection('tv-shows').doc(resultId).collection('reviews').orderBy('createdAt', 'desc'));
  const querySnapshot = await query.get();
  const resultReviews = querySnapshot.docs.map((doc) => {
   return {
    uid: doc.id,
    ...doc.data()
   }
  });
  return resultReviews;
 };

 const addReview = async (projectRef, review) => {
  var reviewRef = projectRef.collection('reviews').doc(uuidv4());

  return db.runTransaction((transaction) => {
   return transaction.get(projectRef).then((res) => {
    if (!res.exists) {
     throw new Error('Document does not exist!');
    }

    // Compute new number of reviews
    var newNumReviews = res.data().numReviews + 1;

    // Compute new average rating
    var oldRatingTotal = res.data().avgRating * res.data().numReviews;
    var newAvgRating = (oldRatingTotal + review.rating) / newNumReviews;

    // Commit to Firestore
    transaction.update(projectRef, {
     numReviews: newNumReviews,
     avgRating: newAvgRating
    });
    transaction.set(reviewRef, review);
   });
  });
 }

 return (
  <FirestoreContext.Provider value={{ addReview, getPagedMovies, getMovieById, getResults, getResultReviews }}>
   {children}
  </FirestoreContext.Provider>
 );
};

export {
 FirestoreContext,
 FirestoreProvider,
 useFirestore,
};