import React, { useState, useContext, useEffect } from 'react';
import MovieContext from '../../context/movie/movieContext';

const MovieForm = () => {
  const movieContext = useContext(MovieContext);
  const { addMovie, current, clearCurrent, updateMovie } = movieContext;

  useEffect(() => {
    if (current !== null) {
      setMovie(current);
    } else {
      setMovie({
        Title: '',
        Cast: '',
        Director: '',
        Genre: '',
        OriginEthnicity: '',
        Plot: '',
        ReleaseYear: '',
        WikiPage: ''
      });
    }
  }, [movieContext, current]);

  const [movie, setMovie] = useState({
    Title: '',
    Cast: '',
    Director: '',
    Genre: '',
    OriginEthnicity: '',
    Plot: '',
    ReleaseYear: '',
    WikiPage: ''
  });

  const { id, Title, Cast, Director, Genre, OriginEthnicity, Plot, ReleaseYear, WikiPage} = movie;

  const onChange = (e) =>
    setMovie({ ...movie, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addMovie(movie);
      setMovie({
        Title: '',
        Cast: '',
        Director: '',
        Genre: '',
        OriginEthnicity: '',
        Plot: '',
        ReleaseYear: '',
        WikiPage: ''
      });
    } else {
      updateMovie(movie);
    }
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit Movie' : 'Add Movie'}
      </h2>
      <input
        type='text'
        placeholder='Title'
        name='Title'
        value={Title}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Release Year'
        name='ReleaseYear'
        value={ReleaseYear}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Cast'
        name='Cast'
        value={Cast}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Director'
        name='Director'
        value={Director}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Genre'
        name='Genre'
        value={Genre}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Origin/Ethnicity'
        name='OriginEthnicity'
        value={OriginEthnicity}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Plot'
        name='Plot'
        value={Plot}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Wiki Page Link'
        name='WikiPage'
        value={WikiPage}
        onChange={onChange}
      />
      <div>
        <input
          type='submit'
          value={current ? 'Update Movie' : 'Add Movie'}
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

export default MovieForm;
