import { admin, app, auth, db, generateTimestamps, generateValueBetweenMinAndMax } from './firebase';
import { v4 as uuidv4 } from 'uuid';
import faker from 'faker';


(async () => {
  // Get all users
  let users = await auth.listUsers(1000, undefined);

  // Get all tv-shows
  let tvShowsRef = db.collection('tv-shows');
  const query = tvShowsRef.orderBy('createdAt', 'desc');
  const querySnapshot = await query.get();
  const tvShows = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data()
    }
  });

  tvShows.forEach(tvShow => {
    let reviewsRef = db.collection('tv-shows').doc(tvShow.id).collection('reviews');
    // Make reviews
    let numReviews = generateValueBetweenMinAndMax(0, 10), usersCopy = JSON.parse(JSON.stringify(users.users)), sumRatings = 0, userStart = null, rating = 0, userId = 0;
    const userIds = [];
    for (let i = 0; i < numReviews; i++) {
      userStart = generateValueBetweenMinAndMax(0, usersCopy.length - 1);
      userId = usersCopy.slice(userStart, userStart + 1)[0].uid;
      while (userIds.includes(userId)) {
        userStart = generateValueBetweenMinAndMax(0, usersCopy.length - 1);
        userId = usersCopy.slice(userStart, userStart + 1)[0].uid;
      }
      userIds.push(userId);
      rating = generateValueBetweenMinAndMax(0, 5);
      reviewsRef.doc(userId).set({
       title: faker.lorem.sentence(generateValueBetweenMinAndMax(1, 5)),
        review: faker.lorem.paragraphs(generateValueBetweenMinAndMax(1, 5)),
        rating: rating,
        ...generateTimestamps()
      });
      sumRatings += rating;
    }

    tvShowsRef.doc(tvShow.id).update({
      numReviews: numReviews,
      avgRating: sumRatings/numReviews,
      modifiedAt: Date.now(),
    });  
  });
})();