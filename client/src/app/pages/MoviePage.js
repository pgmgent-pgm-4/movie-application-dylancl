import { useParams } from "react-router";
import { ResultDetails } from "../components/general/ResultDetails";
import useFetch from "../hooks/fetch";
import { BaseLayout, Container } from '../layouts';
import { Spinner } from "../components/layout/Spinner";
import { MovieReviewList } from '../components/movie/MovieReviewList';
import { CastList } from "../components/general/CastList";

const MoviePage = () => {
 const { id } = useParams();
 const [movie, error, isLoading] = useFetch(`movie/${id}`, false);
 const [castList] = useFetch(`movie/${id}/credits`, false, false);


 return (
  <>
   {error ? error :
    isLoading || !movie ? <Spinner /> :
      <BaseLayout>
       <Container>
       {movie && <ResultDetails result={movie} /> }
       {castList && <CastList castList={castList} /> }
       {movie && <MovieReviewList movieId={id} /> }
       </Container>
     </BaseLayout>}
  </>
 );
};

export default MoviePage;