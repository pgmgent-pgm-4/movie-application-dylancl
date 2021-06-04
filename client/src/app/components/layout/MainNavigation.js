import {
    NavLink,
    useLocation
} from "react-router-dom";

import * as Routes from '../../routes';
import { BsHouseFill, BsTvFill, BsPersonSquare, BsHeartFill } from "react-icons/bs";
import { MdMovie } from "react-icons/md";

import styles from './MainNavigation.module.scss';

const MainNavigation = () => {
    return (
        <nav className={styles.mainNavigation}>
            <ul>
                <h1 className={styles.title}>{`{MovC}`}</h1>
                <li className={styles.homeIcon}>
                    <NavLink activeStyle={{ color: '#6703ff' }} to={Routes.LANDING}><BsHouseFill /></NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{ color: '#6703ff' }} to={Routes.MOVIES}><MdMovie /></NavLink>
                </li>
                <li className={styles.showsIcon}>
                    <NavLink activeStyle={{ color: '#6703ff' }} to={Routes.SHOWS}><BsTvFill /></NavLink>
                </li>
                <li className={styles.personIcon}>
                    <NavLink activeStyle={{ color: '#6703ff' }} to={Routes.SHOWS}><BsPersonSquare /></NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{ color: '#6703ff' }} to={Routes.SHOWS}><BsHeartFill /></NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default MainNavigation;