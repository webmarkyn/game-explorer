import {
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_SUCCESS,
  FETCH_GENRES_REQUEST,
  FETCH_GENRES_SUCCESS, UPDATE_GENRE_CONDITION,
  UPDATE_SEARCH_CONDITION, UPDATE_SORT_CONDITION,
} from '../types';

export const gamesRequested = () => ({ type: FETCH_GAMES_REQUEST });
export const gamesLoaded = games => ({ type: FETCH_GAMES_SUCCESS, payload: games });
export const genresRequested = () => ({ type: FETCH_GENRES_REQUEST });
export const genresLoaded = genres => ({ type: FETCH_GENRES_SUCCESS, payload: genres });
export const updateSearch = query => ({ type: UPDATE_SEARCH_CONDITION, payload: query });
export const updateSort = query => ({ type: UPDATE_SORT_CONDITION, payload: query });
export const updateGenre = genre => ({ type: UPDATE_GENRE_CONDITION, payload: genre });

export const fetchGames = dispatch => getData => {
  dispatch(gamesRequested());
  getData()
    .then(games => dispatch(gamesLoaded(games)))
    .catch(err => new Error(`Error occurred ${err}`));
};
export const fetchGenres = dispatch => getData => {
  dispatch(genresRequested());
  getData()
    .then(genres => {console.log(genres);dispatch(genresLoaded((genres)))})
    .catch(err => new Error(`Error occurred ${err}`));
};
