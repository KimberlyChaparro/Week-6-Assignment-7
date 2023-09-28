//bring in bootstrap css file with responsive media queries
import '../styles/bootstrap.min.css';

import '../styles/globals.css';


//define next.js master MyApp
function MyApp( {Component, pageProps} ){
  return(
    <Component {...pageProps} />
  );
}

export default MyApp;
