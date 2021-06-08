import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useAuth } from '../contexts/firebase/auth.context';
import styles from './SignInPage.module.scss';

const SignInPage = ({ children }) => {
 const history = useHistory();
 const [signInForm, setSignInForm] = useState({
  txtEmail: '',
  txtPassword: ''
 });
 const { currentUser, signInWithEmailAndPassword, signOut } = useAuth();

 const handleSubmit = async (ev) => {
  ev.preventDefault();

  const result = await signInWithEmailAndPassword(signInForm.txtEmail, signInForm.txtPassword);
  if (result) {
   history.goBack();
  }
 }

 const handleInputChange = async (ev) => {
  setSignInForm({
   ...signInForm,
   [ev.target.name]: ev.target.value
  })
 };

 return (
  <div className={styles.signin}>
   <h1 className={styles.signin__logo}>{`{MovC}`}</h1>
   <div className={styles.signin__form}>
   <h2 className={styles.signin__title}>Sign in or register</h2>
    {!!currentUser === false &&
     <form onSubmit={(ev) => handleSubmit(ev)}>
      <div className={styles.signin__form_group}>
       <label htmlFor="txtEmail">Email address</label>
       <input type="email" className={styles.input} id="txtEmail" name="txtEmail" aria-describedby="emailHelp" onChange={handleInputChange} value={signInForm.txtEmail} />
      </div>
      <div className="form-group">
       <label htmlFor="txtPassword">Password</label>
       <input type="password" className={styles.input} id="txtPassword" name="txtPassword" onChange={handleInputChange} value={signInForm.txtPassword} />
      </div>
      <button type="submit" className={styles.button}>Sign In</button>
      <button type="submit" className={`${styles.button} ${styles.register}`}>Register</button>
     </form>
    }
    {!!currentUser === true &&
     <div>
      <img src={currentUser.photoURL} alt={currentUser.email} />
      <button onClick={() => signOut()}>Sign out</button>
     </div>
    }
   </div>
  </div>
 );
};

export default SignInPage;