import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { FindMovie } from './components/FindMovie';
import data from './api/movies.json';

export const App = () => {
  const [movies, setMovies] = useState(data);

  return (
    <div className="page">
      <div className="page-content">
        {movies.length > 0 && (
          <MoviesList movies={movies} />
        )}
      </div>
      <div className="sidebar">
        <FindMovie addMovie={setMovies} movies={movies} />
      </div>
    </div>
  );
};
