import React, { useEffect, useState } from 'react';
import MovieComponent from './MovieComponent';
import axios from 'axios';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://at.usermd.net/api/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  const refreshAll = () => {
    axios.get('https://at.usermd.net/api/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }

  return (
    <div className="movies-container">
      {movies.map((movie, index) => (
        <MovieComponent
          key={index}
          {...movie}
          refreshAll={refreshAll} />
      ))}
    </div>
  );
};

export default Home;
