import {
  FETCH_GENRES_REQUEST,
  FETCH_GENRES_SUCCESS,
  UPDATE_GENRE_CONDITION,
  UPDATE_SEARCH_CONDITION,
  UPDATE_SORT_CONDITION,
} from '../types';

const initState = {
  sort: 'A-Z',
  genresList: [],
  genreQuery: 'All',
  search: '',
  loading: true,
};

const conditionsReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_GENRE_CONDITION:
      return {
        ...state,
        genreQuery: action.payload,
      };
    case UPDATE_SORT_CONDITION:
      return {
        ...state,
        sort: action.payload,
      };
    case UPDATE_SEARCH_CONDITION:
      return {
        ...state,
        search: action.payload,
      };
    case FETCH_GENRES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        loading: false,
        genresList: action.payload,
      };
    default:
      return state;
  }
};

export default conditionsReducer;
