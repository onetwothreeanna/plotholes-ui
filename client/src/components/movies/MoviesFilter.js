import React, { useContext, useRef, useEffect, useState } from 'react';
//useRef hook is a way to reference a dom object - alternative for forms.  use for simple forms
import MovieContext from '../../context/movie/movieContext';

const MovieFilter = () => {
  const movieContext = useContext(MovieContext);
  const { filterMovies, clearFilter, filtered, loading } = movieContext;
  const text = useRef('');

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.current.value !== '' || text.current.value !== undefined) {
      filterMovies(text.current.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        ref={text}
        disabled={loading}
        type='text'
        placeholder='Search for movies by Title'
      />
      <input
        type='submit'
        value={'Search'}
        className='btn btn-primary'
      />
    </form>
  );
};

export default MovieFilter;
