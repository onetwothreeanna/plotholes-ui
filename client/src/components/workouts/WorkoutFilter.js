import React, { useContext, useRef, useEffect } from 'react';
//useRef hook is a way to reference a dom object - alternative for forms.  use for simple forms
import WorkoutContext from '../../context/workout/workoutContext';

const WorkoutFilter = () => {
  const workoutContext = useContext(WorkoutContext);
  const { filterWorkouts, clearFilter, filtered } = workoutContext;
  const text = useRef('');

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });
  const onChange = (e) => {
    if (text.current.value !== '') {
      filterWorkouts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter workouts...'
        onChange={onChange}
      />
    </form>
  );
};

export default WorkoutFilter;
