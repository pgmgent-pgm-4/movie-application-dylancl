import styles from './Header.module.scss';
import {
  Link
} from "react-router-dom";
import * as Routes from '../../routes';
import { useAuth } from '../../contexts/firebase/auth.context';
// import { BsSearch } from 'react-icons/bs';
import ThemeToggler from './ThemeToggler';


const Header = () => {
  const { currentUser, signOut } = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
      <form action="/" method="get">
        <label htmlFor="header-search">
          <span className="visually-hidden">Search movies, series, tags, ...</span>
        </label>
        <input
          type="text"
          className={styles.header__search}
          placeholder="Search movies, series, tags, ..."
          name="search"
        />
      </form>
      <div className={styles.header__login}>
        <ThemeToggler/>
        {!!currentUser
          ? <button onClick={signOut}><img className={styles.header__avatar} src={currentUser.photoURL} alt={currentUser.email} />Logout</button>
          : <Link to={Routes.AUTH_SIGN_IN}>Sign In</Link>
        }
      </div>
      </div>
    </header>
  );
};

export default Header;