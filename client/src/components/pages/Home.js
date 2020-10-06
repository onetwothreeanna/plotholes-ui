import React, { useContext, useEffect } from 'react';
import Workouts from '../workouts/Workouts';
import WorkoutForm from '../workouts/WorkoutForm';
import WorkoutFilter from '../workouts/WorkoutFilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);

  return (
    <div className='grid-2'>
      <div>
        <WorkoutForm />
      </div>
      <div>
        <WorkoutFilter />
        <Workouts />
      </div>
    </div>
  );
};

export default Home;
