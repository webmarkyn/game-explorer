import { combineReducers } from 'redux';
import gamesReducer from './games';
import conditionsReducer from './conditions';
import selectedGameReducer from './selected-game';

const rootReducer = combineReducers({
  games: gamesReducer,
  conditions: conditionsReducer,
  selectedGame: selectedGameReducer,
});

export default rootReducer;
