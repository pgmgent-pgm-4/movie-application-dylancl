import { useParams } from "react-router";
import { ResultDetails } from "../components/general/ResultDetails";
import useFetch from "../hooks/fetch";
import { BaseLayout, Container } from '../layouts';
import { Spinner } from "../components/layout/Spinner";
import { CastList } from "../components/general/CastList";

const ShowPage = () => {
 const { id } = useParams();
 const [show, error, isLoading] = useFetch(`tv/${id}`, false);
 const [castList] = useFetch(`tv/${id}/credits`, false, false);


 return (
  <>
   {error ? error :
    isLoading || !show ? <Spinner /> :
      <BaseLayout>
       <Container>
       {show && <ResultDetails result={show} /> }
       {castList && <CastList castList={castList} /> }
       {/* {show && <ShowReviewList movieId={id} /> } */}
       </Container>
     </BaseLayout>}
  </>
 );
};

export default ShowPage;