import React, { useState, useContext, useEffect } from 'react';
import WorkoutContext from '../../context/workout/workoutContext';

const WorkoutForm = () => {
  const workoutContext = useContext(WorkoutContext);
  const { addWorkout, current, clearCurrent, updateWorkout } = workoutContext;

  useEffect(() => {
    if (current !== null) {
      setWorkout(current);
    } else {
      setWorkout({
        name: '',
        type: '',
      });
    }
  }, [workoutContext, current]);

  const [workout, setWorkout] = useState({
    name: '',
    type: '',
  });

  const { name, type } = workout;

  const onChange = (e) =>
    setWorkout({ ...workout, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      workoutContext.addWorkout(workout);
      setWorkout({
        name: '',
        type: '',
      });
    } else {
      updateWorkout(workout);
    }
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit Workout' : 'Add Workout'}
      </h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Type'
        name='type'
        value={type}
        onChange={onChange}
      />
      <div>
        <input
          type='submit'
          value={current ? 'Update Workout' : 'Add Workout'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default WorkoutForm;
