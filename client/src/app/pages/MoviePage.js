import { useParams } from "react-router";
import { ResultDetails } from "../components/general/ResultDetails";
import useFetch from "../hooks/fetch";
import { BaseLayout, Container } from '../layouts';
import { Spinner } from "../components/layout/Spinner";
import { ResultReviewList } from '../components/general/ResultReviewList';
import { CastList } from "../components/general/CastList";
import { Helmet } from "react-helmet";

const MoviePage = () => {
 const { id } = useParams();
 const [movie, error, isLoading] = useFetch(`movie/${id}`, false);
 const [castList] = useFetch(`movie/${id}/credits`, false, false);


 return (
  <>
  <Helmet htmlAttributes title={movie && movie.title} description={'Movie Collection is a site that shows you the latest series and movies, with all the information you could ever need.'}/>
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