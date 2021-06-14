import * as Routes from '../routes';
import { Button } from "../components/button/Button";

import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <main className={styles.NotFound}>
        <div className={styles.NotFound__cta}>
         <h3 className={styles.NotFound__title}>Page not found (404)</h3>
          <Button content="Go back to home" type="primary" endpoint={Routes.HOME}/>
        </div>
    </main>
  );
};

export default NotFoundPage;