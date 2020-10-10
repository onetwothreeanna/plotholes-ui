import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MovieContext from '../../context/movie/movieContext';

const MovieItem = ({ movie }) => {
  const movieContext = useContext(MovieContext);
  const { deleteMovie, setCurrent, clearCurrent } = movieContext;
  const { id, Title, Cast, Director, Genre, OriginEthnicity, Plot, ReleaseYear, WikiPage} = movie;

  const onDelete = () => {
    deleteMovie(id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>{Title}</h3>
      <ul className='list'>{ReleaseYear && <li>Release Year: {ReleaseYear}</li>}</ul>
      <ul className='list'>{Cast && <li>Cast: {Cast}</li>}</ul>
      <ul className='list'>{Director && <li>Director: {Director}</li>}</ul>
      <ul className='list'>{Genre && <li>Genre: {Genre}</li>}</ul>
      <ul className='list'>{OriginEthnicity && <li>Origin/Ethnicity: {OriginEthnicity}</li>}</ul>
      <ul className='list'>{Plot && <li>Plot Summary: {Plot}</li>}</ul>
      <ul className='list'>{WikiPage && <li>More Info: {WikiPage}</li>}</ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(movie)}
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

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};
export default MovieItem;
