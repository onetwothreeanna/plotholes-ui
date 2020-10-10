import React, { useReducer } from 'react';
import axios from 'axios';
import MovieContext from './movieContext';
import movieReducer from './movieReducer';
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

const MovieState = (props) => {
  const initialState = {
    movies: null,
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(movieReducer, initialState);

  //Get Movies
  const getMovies = async () => {
    try {
      const res = await axios.get('/all');
      dispatch({
        type: GET_MOVIES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: MOVIE_ERROR,
        payload: err.message,
      });
    }
  };

  //Add Movie
  const addMovie = async (movie) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/addmovie', movie, config);
      dispatch({
        type: ADD_MOVIE,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: MOVIE_ERROR,
        payload: err.message,
      });
    }
  };

  //Delete Movie
  const deleteMovie = async (id) => {
    try {
      const res = await axios.delete(`/api/workouts/${id}`);
      dispatch({
        type: DELETE_MOVIE,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: MOVIE_ERROR,
        payload: err.message,
      });
    }
  };

  //Update movie
  const updateMovie = async (movie) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.put(
        `/api/workouts/${movie.id}`,
        movie,
        config
      );
      dispatch({
        type: UPDATE_MOVIE,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: MOVIE_ERROR,
        payload: err.message,
      });
    }
  };

  //Clear Movies
  const clearMovies = () => {
    dispatch({ type: CLEAR_MOVIES });
  };

  //Filter Movies
  const filterMovies = (text) => {
    dispatch({ type: FILTER_MOVIES, payload: text });
  };

  //Clear Movies
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  //Set Current Movies
  const setCurrent = (movie) => {
    dispatch({ type: SET_CURRENT, payload: movie });
  };

  //Clear Current Movies
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        filterMovies,
        clearFilter,
        setCurrent,
        clearCurrent,
        addMovie,
        updateMovie,
        deleteMovie,
        getMovies,
        clearMovies,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
