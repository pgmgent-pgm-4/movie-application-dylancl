import { BaseLayout } from '../layouts';
import { MovieList } from '../components/movie/MovieList';
import { ShowList } from '../components/shows/ShowList';
import { Hero } from '../components/layout';
import { Container } from '../layouts';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <BaseLayout>
      <Hero />
      <Container>
        <h2 className={styles.title}>Popular movies and TV shows</h2>
        <MovieList />
        <ShowList />
      </Container>
    </BaseLayout>

  );
};

export default HomePage;