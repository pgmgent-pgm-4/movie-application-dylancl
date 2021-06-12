import { useParams } from "react-router";
import { ResultDetails } from "../components/general/ResultDetails";
import useFetch from "../hooks/fetch";
import { BaseLayout, Container } from '../layouts';
import { Spinner } from "../components/layout/Spinner";
import { ResultReviewList } from '../components/general/ResultReviewList';
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
       {movie && <ResultReviewList resultId={id} type='movie' /> }
       </Container>
     </BaseLayout>}
  </>
 );
};

export default MoviePage;