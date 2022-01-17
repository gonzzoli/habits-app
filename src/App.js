import React from 'react';
import classes from './App.module.scss';
import Main from './Main/Main';
import Nav from './Nav/Nav';

function App() {
  return (
    <div className={classes.App}>
      <Nav />
      <Main />
    </div>
  );
}

export default App;
