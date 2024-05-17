import React from 'react';
import './Details.css';

const Details = ({ movie, onBack }) => {
  const imageUrlBase = "https://image.tmdb.org/t/p/w500";
  const errorImage = "/error.png";
  const isImageError = !movie.poster_path;

  return (
    <div className="movie-details">
      <button onClick={onBack}>Back</button>
      <h2>{movie.name}</h2>
      <img className={isImageError ? 'error-image' : ''}
        src={movie.poster_path ? `${imageUrlBase}${movie.poster_path}` : errorImage}
        alt={movie.name || "No image available"}/>
      <div className='movie-info'>
        <p>{movie.overview}</p>
        <p><strong>First Air Date:</strong> {movie.first_air_date}</p>
        <p><strong>Vote Average:</strong> {movie.vote_average}</p>
      </div>
    </div>
  );
};

export default Details;
