import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import rootReducer from './reducers';
import GameExplorerService from './services/game-explorer-service';
import GamesServiceContext from './contexts/gamesServiceContext';

import './index.css';


const gamesService = new GameExplorerService();

const store = createStore(
  rootReducer,
);

ReactDOM.render(
  <GamesServiceContext.Provider value={gamesService}>
    <Provider store={store}>
      <App />
    </Provider>
  </GamesServiceContext.Provider>,
  document.getElementById('root'),
);
