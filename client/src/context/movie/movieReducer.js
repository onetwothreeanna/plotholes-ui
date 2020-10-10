import {
  ADD_MOVIE,
  DELETE_MOVIE,
  UPDATE_MOVIE,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_MOVIES,
  CLEAR_FILTER,
  MOVIE_ERROR,
  GET_MOVIES,
  CLEAR_MOVIES,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload.movies,
        loading: false,
      };
    case ADD_MOVIE:
      return {
        ...state,
        movies: [action.payload, ...state.movies],
        loading: false,
      };
    case UPDATE_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie) =>
        movie.id === action.payload.id ? action.payload : movie
        ),
        loading: false,
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(
          (movie) => movie.id !== action.payload
        ),
        loading: false,
      };
    case CLEAR_MOVIES:
      return {
        ...state,
        movies: null,
        filtered: null,
        error: null,
        current: null,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_MOVIES:
      return {
        ...state,
        filtered: state.movies.filter((movie) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return movie.title.match(regex) || movie.type.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case MOVIE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
