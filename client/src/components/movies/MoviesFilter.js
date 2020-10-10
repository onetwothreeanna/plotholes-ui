import React, { useContext, useRef, useEffect } from 'react';
//useRef hook is a way to reference a dom object - alternative for forms.  use for simple forms
import MovieContext from '../../context/movie/movieContext';

const MovieFilter = () => {
  const movieContext = useContext(MovieContext);
  const { filterMovies, clearFilter, filtered } = movieContext;
  const text = useRef('');

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });
  const onChange = (e) => {
    if (text.current.value !== '') {
      filterMovies(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter movies...'
        onChange={onChange}
      />
    </form>
  );
};

export default MovieFilter;
