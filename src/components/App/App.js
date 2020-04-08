import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import styles from './App.module.css';
import Header from '../header/header';
import HomePage from '../../containers/homePage/home-page';
import GameInfoPage from '../../containers/gameInfoPage';

const App = () => (
  <div className={styles.app}>
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/game/:id">
            <GameInfoPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
