import React from "react";
import { ResultDetails } from "../general/ResultDetails";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";


const mockData = {
 "poster_path": "/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg",
 "adult": false,
 "overview": "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
 "release_date": "2016-08-03",
 "genres": [
  {
      "id": 27,
      "name": "Horror"
  },
  {
      "id": 9648,
      "name": "Mystery"
  },
  {
      "id": 53,
      "name": "Thriller"
  }

 ],
 "id": 297761,
 "original_title": "Suicide Squad",
 "original_language": "en",
 "title": "Suicide Squad",
 "backdrop_path": "/ndlQ2Cuc3cjTL7lTynw6I4boP4S.jpg",
 "popularity": 48.261451,
 "vote_count": 1466,
 "video": false,
 "vote_average": 5.91
};


describe('ResultDetails', () => {
 test('Renders a detail page based on a received object', async () => {
  await act(async () => render(<BrowserRouter>
   <ResultDetails result={mockData} />
  </BrowserRouter>));
  expect(screen.getByText('Suicide Squad')).toBeInTheDocument();
  expect(screen.getByText("From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.")).toBeInTheDocument();
 })
});
