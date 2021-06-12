import { useParams } from "react-router";
import { ResultDetails } from "../components/general/ResultDetails";
import useFetch from "../hooks/fetch";
import { BaseLayout, Container } from '../layouts';
import { Spinner } from "../components/layout/Spinner";
import { CastList } from "../components/general/CastList";
import { ResultReviewList } from "../components/general/ResultReviewList";
import { Helmet } from "react-helmet";

const ShowPage = () => {
 const { id } = useParams();
 const [show, error, isLoading] = useFetch(`tv/${id}`, false);
 const [castList] = useFetch(`tv/${id}/credits`, false, false);


 return (
  <>
    <Helmet htmlAttributes title={show && show.name} description={'Movie Collection is a site that shows you the latest series and movies, with all the information you could ever need.'}/>
   {error ? error :
    isLoading || !show ? <Spinner /> :
      <BaseLayout>
       <Container>
       {show && <ResultDetails result={show} /> }
       {castList && <CastList castList={castList} /> }
       {show && <ResultReviewList resultId={id} type='shows' /> }
       </Container>
     </BaseLayout>}
  </>
 );
};

export default ShowPage;