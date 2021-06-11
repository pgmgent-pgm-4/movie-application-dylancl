import { BaseLayout } from '../layouts';
import { MovieList } from '../components/movie/MovieList';
import { ShowList } from '../components/shows/ShowList';
import { TrailerList } from '../components/trailers/TrailerList'
import { Hero } from '../components/layout';
import { Container } from '../layouts';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <BaseLayout>
      <Hero />
      <Container>
        <h2 className={styles.title}>Popular movies and TV shows</h2>
        <MovieList query='movie/popular' />
        <ShowList  query='popular' />
        <TrailerList />
        <h2 className={styles.title}>Trending movies and TV shows</h2>
        <MovieList query='trending/movie/week' />
        <ShowList  query='trending' />
      </Container>
    </BaseLayout>

  );
};

export default HomePage;