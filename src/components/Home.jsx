import React from 'react';
import MovieComponent from './MovieComponent';

const Home = ({ movies }) => {
  return (
    <div className="movies-container">
      {movies.map((movie, index) => (
        <MovieComponent key={index} {...movie} />
      ))}
    </div>
  );
};

export default Home;