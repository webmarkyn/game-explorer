import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from '../header/header';
import HomePage from '../../containers/homePage/home-page';

const App = () => (
  <div className="app">
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
