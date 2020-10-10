import React, { useContext, useEffect } from 'react';
import Movies from '../movies/Movies';
import MovieForm from '../movies/MovieForm';
import MoviesFilter from '../movies/MoviesFilter';

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <MovieForm />
      </div>
      <div>
        <MoviesFilter />
        <Movies />
      </div>
    </div>
  );
};

export default Home;
