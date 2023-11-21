import React, { Component } from 'react';

const MovieComponent = (props) => {
  const { title, description, rating, image } = props;

  return (
    <div className='movie'>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className='rating'>
        <img src='star.png' alt='Ocena' />
        <span>{rating.toFixed(1)}</span>
      </div>
    </div>
  );
};

export default MovieComponent;