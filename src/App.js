// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Form from './composent/Form';
import List from './composent/List';
import Details from './composent/Details';
import Home from './composent/Home';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (search) => {
    console.log('Search term:', search); // Log the search term
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=fef55a6754f2f6d00a0038388915039c&include_adult=false&query=${search}`)
      .then(response => response.json())
      .then(data => {
        console.log('API response data:', data); // Log the API response
        setMovies(data.results);
      })
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
    <Router>
      <div className="App">
        <div className="navbar">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/search" className="navbar-link">Search</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={
            <>
              <Form onSearch={handleSearch} />
              {isLoading ? (
                <div className="loading">Loading...</div>
              ) : selectedMovie ? (
                <Details movie={selectedMovie} onBack={handleBack} />
              ) : (
                <List movies={movies} onMovieClick={handleMovieClick} />
              )}
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
