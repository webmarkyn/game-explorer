import { FETCH_GAMES_REQUEST, FETCH_GAMES_SUCCESS } from '../types';

export const gamesRequested = () => ({ type: FETCH_GAMES_REQUEST });
export const gamesLoaded = games => ({ type: FETCH_GAMES_SUCCESS, payload: games });

export const fetchGames = dispatch => getData => {
  dispatch(gamesRequested());
  getData()
    .then(games => dispatch(gamesLoaded(games)))
    .catch(err => new Error(`Error occurred ${err}`));
};
