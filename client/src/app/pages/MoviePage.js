import { useParams } from "react-router";
import { MovieDetails } from "../components/movie/MovieDetails";
import useFetch from "../hooks/fetch";
import { BaseLayout, Container } from '../layouts';
import { Spinner } from "../components/layout/Spinner";
import { MovieReviewList } from '../components/movie/MovieReviewList';

const MoviePage = () => {
 const { id } = useParams();
 const [movie, error, isLoading] = useFetch(`movie/${id}`, false);

 return (
  <>
   {error ? error :
    isLoading || !movie ? <Spinner /> :
      <BaseLayout>
       <Container>
       {movie && <MovieDetails movie={movie} /> }
       {movie && <MovieReviewList movieId={id} /> }
       </Container>
     </BaseLayout>}
  </>
 );
};

export default MoviePage;