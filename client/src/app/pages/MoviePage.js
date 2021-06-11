import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MovieDetails } from "../components/movie/MovieDetails";
import useFetch from "../hooks/fetch";
import { BaseLayout, Container } from '../layouts';
import { MovieReviewList } from '../components/movie/MovieReviewList';

const MoviePage = () => {
  const { id } = useParams();

  const [movie, error, isLoading] = useFetch(`movie/${id}`);
 console.log(movie);

  return (
    <BaseLayout>
      <Container>
       <p>{id}</p>
      {movie && <MovieDetails movie={movie} /> }
      {movie && <MovieReviewList movieId={id} /> }
      </Container>
    </BaseLayout>
  );
};

export default MoviePage;