import {
  ADD_WORKOUT,
  GET_WORKOUTS,
  DELETE_WORKOUT,
  CLEAR_WORKOUTS,
  UPDATE_WORKOUT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_WORKOUTS,
  CLEAR_FILTER,
  WORKOUT_ERROR,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_WORKOUTS:
      return {
        ...state,
        workouts: action.payload,
        loading: false,
      };
    case ADD_WORKOUT:
      return {
        ...state,
        workouts: [action.payload, ...state.workouts],
        loading: false,
      };
    case UPDATE_WORKOUT:
      return {
        ...state,
        workouts: state.workouts.map((workout) =>
          workout._id === action.payload._id ? action.payload : workout
        ),
        loading: false,
      };
    case DELETE_WORKOUT:
      return {
        ...state,
        workouts: state.workouts.filter(
          (workout) => workout._id !== action.payload
        ),
        loading: false,
      };
    case CLEAR_WORKOUTS:
      return {
        ...state,
        workouts: null,
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
    case FILTER_WORKOUTS:
      return {
        ...state,
        filtered: state.workouts.filter((workout) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return workout.name.match(regex) || workout.type.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case WORKOUT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
