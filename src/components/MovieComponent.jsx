import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const MovieComponent = (props) => {
  const { title, description, rating, image } = props;

  return (
    <Link to="/details">
      <div className='movie'>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <div className='rating'>
          <img src='star.png' alt='Ocena' />
          <span>{rating.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  );
};
export default MovieComponent;