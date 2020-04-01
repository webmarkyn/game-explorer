import { FETCH_GAMES_REQUEST, FETCH_GAMES_SUCCESS } from '../actions';

const initState = {
  data: [],
  loading: false,
  error: false,
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case (FETCH_GAMES_REQUEST):
      return {
        ...state,
        loading: true,
        error: false,
      };
    case (FETCH_GAMES_SUCCESS):
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default gamesReducer;
