import { combineReducers } from 'redux';
import gamesReducer from './games';
import conditionsReducer from './conditions';

const rootReducer = combineReducers({
  games: gamesReducer,
  conditions: conditionsReducer,
});

export default rootReducer;
