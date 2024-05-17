import React, {useState} from 'react';
import './List.css';

const List = ({ movies, onMovieClick }) => {
  const imageUrlBase = "https://image.tmdb.org/t/p/w500";
  const errorImage = "/error.png";
  const itemsPerPage = 10;

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const moviesToShow = movies.slice(startIndex, endIndex);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <ul className="movie-list">
        {moviesToShow.map((movie) => (
          <li key={movie.id} onClick={() => onMovieClick(movie)}>
            <img
              src={movie.poster_path ? `${imageUrlBase}${movie.poster_path}` : errorImage}
              alt={movie.name || "No image available"}
            />
            <p>{movie.name}</p>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button onClick={goToPrevPage} disabled={currentPage === 1}>Previous</button>
        <span><b>Page {currentPage}</b></span>
        <button onClick={goToNextPage} disabled={endIndex >= movies.length}>Next</button>
      </div>
    </div>
  );
};

export default List;
