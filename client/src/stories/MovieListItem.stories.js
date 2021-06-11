import React from 'react';
import fetch from 'node-fetch';

import {MovieListItem} from './MovieListItem';

export const MovieListItemStory = (args, { loaded: { movie } }) => <MovieListItem movie={movie} />
MovieListItemStory.loaders = [
 async () => ({
  movie: {
   "backdrop_path": "/h48Dpb7ljv8WQvVdyFWVLz64h4G.jpg",
   "first_air_date": "2016-01-25",
   "genre_ids": [
    80,
    10765
   ],
   "id": 63174,
   "name": "Lucifer",
   "origin_country": [
    "US"
   ],
   "original_language": "en",
   "original_name": "Lucifer",
   "overview": "Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape.",
   "popularity": 1456.689,
   "poster_path": "/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg",
   "vote_average": 8.5,
   "vote_count": 9159
  }
 })
];

export const LoggedIn = MovieListItemStory.bind({});
LoggedIn.args = {
  user: {},
};
