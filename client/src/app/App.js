import { AuthProvider, FirebaseProvider, FirestoreProvider } from './contexts/firebase';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';

import * as Routes from './routes';
import styles from './App.module.scss';
import { HomePage, SignInPage, MoviePage, MoviesPage } from './pages';
import { ThemeContext } from './lib/context'

function App() {

 const [theme, setTheme] = useState('dark');

 return (
  <ThemeContext.Provider value={{ theme, setTheme }}>
   <div className={styles.app} data-theme={theme}>
    <FirebaseProvider>
     <AuthProvider>
      <FirestoreProvider>
       <Router>
        <Switch>
         <Route exact path={Routes.HOME} component={HomePage} />
         <Route exact path={Routes.MOVIES} component={MoviesPage} />
         <Route exact path={Routes.MOVIE_DETAILS} component={MoviePage} />
         <Route exact path={Routes.AUTH_SIGN_IN} component={SignInPage} />
        </Switch>
       </Router>
      </FirestoreProvider>
     </AuthProvider>
    </FirebaseProvider>
   </div>
  </ThemeContext.Provider>
 );
}

export default App;