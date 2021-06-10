import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MovieDetails } from "../components/movie/MovieDetails";
import API from "../services/dataService";
import { BaseLayout, Container } from '../layouts';

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
      {!!movie && <MovieDetails movie={movie} /> }
      {/* {!!project && <ProjectReviewList projectId={project.uid} /> } */}
      </Container>
    </BaseLayout>
  );
};

export default MoviePage;