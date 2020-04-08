import {
  FETCH_SELECTED_GAME_REQUEST,
  FETCH_SELECTED_GAME_SUCCESS,
} from '../types';

const initState = {
  game: {},
  loading: false,
};

const selectedGameReducer = (state = initState, action) => {
  switch (action.type) {
    case (FETCH_SELECTED_GAME_REQUEST):
      return {
        ...state,
        loading: true,
      };
    case (FETCH_SELECTED_GAME_SUCCESS):
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
