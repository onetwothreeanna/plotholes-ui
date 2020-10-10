import React, { Fragment, useContext, useEffect } from 'react';
import MovieItem from './MovieItem';
import Spinner from '../layout/Spinner';
import MovieContext from '../../context/movie/movieContext';
import PaginatedContent from './PaginatedContent';

const Movies = () => {
  const movieContext = useContext(MovieContext);
  const { movies, filtered, getMovies, loading } = movieContext;

  useEffect(() => {
    getMovies();
    //eslint-disable-next-line
  }, []);

  if (movies !== null && movies.length === 0 && !loading) {
    return <h4>Please add a movie.</h4>;
  }

  return (
    <Fragment>
      {movies !== null && !loading ? (
        filtered !== null ? (
          filtered.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))
        ) : (
          <PaginatedContent />
        )
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Movies;
