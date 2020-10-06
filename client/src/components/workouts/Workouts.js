import React, { Fragment, useContext, useEffect } from 'react';
import WorkoutItem from './WorkoutItem';
import Spinner from '../../components/layout/Spinner';
import WorkoutContext from '../../context/workout/workoutContext';

const Workouts = () => {
  const workoutContext = useContext(WorkoutContext);
  const { workouts, filtered, getWorkouts, loading } = workoutContext;

  useEffect(() => {
    getWorkouts();
    //eslint-disable-next-line
  }, []);

  if (workouts !== null && workouts.length === 0 && !loading) {
    return <h4>Please add a workout.</h4>;
  }

  return (
    <Fragment>
      {workouts !== null && !loading ? (
        filtered !== null ? (
          filtered.map((workout) => (
            <WorkoutItem key={workout._id} workout={workout} />
          ))
        ) : (
          workouts.map((workout) => (
            <WorkoutItem key={workout._id} workout={workout} />
          ))
        )
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Workouts;
