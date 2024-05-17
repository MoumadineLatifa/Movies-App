import React, { useState } from 'react';
import Form from './composent/Form';
import List from './composent/List';
import Details from './composent/Details';
import './App.css';
import './composent/Form.css';
const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (search) => {
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=fef55a6754f2f6d00a0038388915039c&include_adult=false&query=${search}`)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error('Error fetching data:', error));
  };

  const handleMovieClick = (movie) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedMovie(movie);
      setIsLoading(false);
    }, 1000);
  };

  const handleBack = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="App">
      <Form onSearch={handleSearch} />
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : selectedMovie ? (
        <Details movie={selectedMovie} onBack={handleBack} />
      ) : (
        <List movies={movies} onMovieClick={handleMovieClick} />
      )}
    </div>
  );
};

export default App;
