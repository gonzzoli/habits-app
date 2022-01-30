import React from 'react';
import classes from './App.module.scss';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import Nav from './Nav/Nav';
function App() {
  return (
    <div className={classes.App}>
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
