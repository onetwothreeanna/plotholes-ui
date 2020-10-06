import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import WorkoutContext from '../../context/workout/workoutContext';

const WorkoutItem = ({ workout }) => {
  const workoutContext = useContext(WorkoutContext);
  const { deleteWorkout, setCurrent, clearCurrent } = workoutContext;
  const { _id, name, type } = workout;

  const onDelete = () => {
    deleteWorkout(_id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>{name}</h3>
      <ul className='list'>{type && <li>{type}</li>}</ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(workout)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

WorkoutItem.propTypes = {
  workout: PropTypes.object.isRequired,
};
export default WorkoutItem;
