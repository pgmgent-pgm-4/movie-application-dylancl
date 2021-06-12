import {
 NavLink,
 Link
} from "react-router-dom";
import ThemeToggler from './ThemeToggler';
import * as Routes from '../../routes';
import { BsHouseFill, BsTvFill } from "react-icons/bs";
import { MdMovie } from "react-icons/md";
import { useAuth } from '../../contexts/firebase/auth.context';
import styles from './MainNavigation.module.scss';
import { Search } from "../general/Search";

const MainNavigation = () => {
 const { currentUser, signOut } = useAuth();
 return (
  <header>
   <nav className={styles.mainNavigation}>
    <ul>
     <h1 className={styles.title}>{`{MovC}`}</h1>
     <li className={styles.homeIcon}>
      <NavLink activeStyle={{ color: '#6703ff' }} exact to={Routes.HOME}><BsHouseFill /></NavLink>
     </li>
     <li>
      <NavLink activeStyle={{ color: '#6703ff' }} to={Routes.MOVIES}><MdMovie /></NavLink>
     </li>
     <li className={styles.showsIcon}>
      <NavLink activeStyle={{ color: '#6703ff' }} to={Routes.SHOWS}><BsTvFill /></NavLink>
     </li>
    </ul>
   </nav>
   <div className={styles.mainNavigation__header}>
    <Search />
    <div className={styles.mainNavigation__header_login}>
     <ThemeToggler />
     {!!currentUser
      ? <button onClick={signOut}><img className={styles.avatar} src={currentUser.photoURL} alt={currentUser.email} />Logout</button>
      : <Link to={Routes.AUTH_SIGN_IN}>Sign In</Link>
     }
    </div>
   </div>
  </header>
 );
};

export default MainNavigation;