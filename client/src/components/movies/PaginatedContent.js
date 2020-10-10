import React, { useState, useContext } from "react";
import Pagination from "react-js-pagination";
import MovieItem from './MovieItem';
import MovieContext from '../../context/movie/movieContext'

const PaginatedContent = () => {
  // Data to be rendered using pagination.
   const movieContext = useContext(MovieContext);
   const { movies, loading } = movieContext;
   const moviesPerPage = 10;
   const [ activePage, setCurrentPage ] = useState( 1 );

   // Logic for displaying current todos
   const indexOfLastMovie  = activePage * moviesPerPage;
   const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
   const currentMovies     = movies.slice( indexOfFirstMovie, indexOfLastMovie );

   const renderMovies = currentMovies.map( ( movie ) => {
      return <MovieItem key={movie.id} movie={movie}/>;
   } );

   const handlePageChange = ( pageNumber ) => {
      setCurrentPage( pageNumber )
   };

   return (
      <div>
         <div className="result">
            { renderMovies }
         </div>
         <div className="pagination">
            <Pagination
               activePage={ activePage }
               itemsCountPerPage={ 10 }
               totalItemsCount={ movies.length }
               pageRangeDisplayed={ 10 }
               onChange={ handlePageChange }
            />
         </div>
      </div>
   )

}

export default PaginatedContent;