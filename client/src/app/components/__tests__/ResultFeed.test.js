import React from "react";
import { ResultFeed } from "../resultfeed/ResultFeed";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";

const mockData = [
 {
     "adult": false,
     "backdrop_path": "/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg",
     "genre_ids": [
         35,
         80
     ],
     "id": 337404,
     "original_language": "en",
     "original_title": "Cruella",
     "overview": "In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.",
     "popularity": 5055.01,
     "poster_path": "/rTh4K5uw9HypmpGslcKd4QfHl93.jpg",
     "release_date": "2021-05-26",
     "title": "Cruella",
     "video": false,
     "vote_average": 8.7,
     "vote_count": 2435
 },
 {
     "adult": false,
     "backdrop_path": "/qi6Edc1OPcyENecGtz8TF0DUr9e.jpg",
     "genre_ids": [
         27,
         9648,
         53
     ],
     "id": 423108,
     "original_language": "en",
     "original_title": "The Conjuring: The Devil Made Me Do It",
     "overview": "Paranormal investigators Ed and Lorraine Warren encounter what would become one of the most sensational cases from their files. The fight for the soul of a young boy takes them beyond anything they'd ever seen before, to mark the first time in U.S. history that a murder suspect would claim demonic possession as a defense.",
     "popularity": 4432.301,
     "poster_path": "/xbSuFiJbbBWCkyCCKIMfuDCA4yV.jpg",
     "release_date": "2021-05-25",
     "title": "The Conjuring: The Devil Made Me Do It",
     "video": false,
     "vote_average": 8.3,
     "vote_count": 1735
 },
 {
     "adult": false,
     "backdrop_path": "/70AV2Xx5FQYj20labp0EGdbjI6E.jpg",
     "genre_ids": [
         80,
         28
     ],
     "id": 637649,
     "original_language": "en",
     "original_title": "Wrath of Man",
     "overview": "A cold and mysterious new security guard for a Los Angeles cash truck company surprises his co-workers when he unleashes precision skills during a heist. The crew is left wondering who he is and where he came from. Soon, the marksman's ultimate motive becomes clear as he takes dramatic and irrevocable steps to settle a score.",
     "popularity": 2701.607,
     "poster_path": "/M7SUK85sKjaStg4TKhlAVyGlz3.jpg",
     "release_date": "2021-04-22",
     "title": "Wrath of Man",
     "video": false,
     "vote_average": 7.9,
     "vote_count": 832
 }
];

describe('ResultFeed', () => {
 test('Renders a list of movies based on an array of objects', async () => {
  await act(async () => render(<BrowserRouter>
   <ResultFeed results={mockData} type="movie"/>
  </BrowserRouter>));
  expect(screen.getByText('Cruella')).toBeInTheDocument();
  expect(screen.getByText('Wrath of Man')).toBeInTheDocument();
  expect(screen.getByText('The Conjuring: The Devil Made Me Do It')).toBeInTheDocument();
 })
});