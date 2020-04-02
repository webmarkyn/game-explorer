import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from '../header/header';
import HomePage from '../../containers/homePage/home-page';

const App = () => (
  <div className="app">
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
