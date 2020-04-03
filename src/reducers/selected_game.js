import {FETCH_GAMES_REQUEST, FETCH_GAMES_SUCCESS} from '../types';

const initState = {
  game: {},
  loading: true,
};

const selectedGameReducer = (state = initState, action) => {
  switch (action.type) {
    case (FETCH_GAMES_REQUEST):
      return {
        ...state,
        loading: true,
      };
    case (FETCH_GAMES_SUCCESS):
      return {
        ...state,
        game: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default selectedGameReducer;
