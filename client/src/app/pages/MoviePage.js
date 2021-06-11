import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MovieDetails } from "../components/movie/MovieDetails";
import API from "../services/dataService";
import { BaseLayout, Container } from '../layouts';
import { MovieReviewList } from '../components/movie/MovieReviewList';

const MoviePage = () => {
  const { id } = useParams();
  const [ movie, setMovie ] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await API.getMovieById(id);
      setMovie(data);
    };

    fetchData();    
  }, [id])

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