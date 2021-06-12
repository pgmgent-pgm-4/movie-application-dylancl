import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app';
import reportWebVitals from './reportWebVitals';
import { Helmet } from 'react-helmet';

ReactDOM.render(
 <React.StrictMode>
  <Helmet htmlAttributes>
   <html lang="en" />
   <title>MovieCollection</title>
   <meta name="description" content="Movie Collection is a site that shows you the latest series and movies, with all the information you could ever need." />
  </Helmet>
  <App />
 </React.StrictMode>,
 document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);