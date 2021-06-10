import { MainNavigation, Header } from '../components/layout';

import styles from './BaseLayout.module.scss';

const BaseLayout = ({children}) => {
  return (
    <>
      <MainNavigation />
      <Header />
      <main className={styles.main}>
        { children }
      </main>
    </> 
  )
};

export default BaseLayout;