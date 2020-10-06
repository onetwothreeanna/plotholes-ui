import React, { useReducer } from 'react';
import axios from 'axios';
import WorkoutContext from './workoutContext';
import workoutReducer from './workoutReducer';
import {
  ADD_WORKOUT,
  DELETE_WORKOUT,
  UPDATE_WORKOUT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_WORKOUTS,
  CLEAR_FILTER,
  WORKOUT_ERROR,
  GET_WORKOUTS,
  CLEAR_WORKOUTS,
} from '../types';

const WorkoutState = (props) => {
  const initialState = {
    workouts: null,
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(workoutReducer, initialState);

  //Get Workouts
  const getWorkouts = async () => {
    try {
      const res = await axios.get('/api/workouts');
      dispatch({
        type: GET_WORKOUTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: WORKOUT_ERROR,
        payload: err.message,
      });
    }
  };

  //Add Workout
  const addWorkout = async (workout) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/workouts', workout, config);
      dispatch({
        type: ADD_WORKOUT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: WORKOUT_ERROR,
        payload: err.message,
      });
    }
  };

  //Delete Workout
  const deleteWorkout = async (id) => {
    try {
      const res = await axios.delete(`/api/workouts/${id}`);
      dispatch({
        type: DELETE_WORKOUT,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: WORKOUT_ERROR,
        payload: err.message,
      });
    }
  };

  //Update Workout
  const updateWorkout = async (workout) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.put(
        `/api/workouts/${workout._id}`,
        workout,
        config
      );
      dispatch({
        type: UPDATE_WORKOUT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: WORKOUT_ERROR,
        payload: err.message,
      });
    }
  };

  //Clear Workouts
  const clearWorkouts = () => {
    dispatch({ type: CLEAR_WORKOUTS });
  };

  //Filter Workouts
  const filterWorkouts = (text) => {
    dispatch({ type: FILTER_WORKOUTS, payload: text });
  };

  //Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  //Set Current Workout
  const setCurrent = (workout) => {
    dispatch({ type: SET_CURRENT, payload: workout });
  };

  //Clear Current Workout
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  return (
    <WorkoutContext.Provider
      value={{
        workouts: state.workouts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        filterWorkouts,
        clearFilter,
        setCurrent,
        clearCurrent,
        addWorkout,
        updateWorkout,
        deleteWorkout,
        getWorkouts,
        clearWorkouts,
      }}
    >
      {props.children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutState;
