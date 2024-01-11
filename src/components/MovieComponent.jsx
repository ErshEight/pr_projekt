import React from 'react';
import { Link } from 'react-router-dom';

const MovieComponent = (props) => {
  const { id, title, rate, image } = props;

  return (
    <Link to={`/details/${encodeURIComponent(title)}/${id}`}>
      <div className='movie'>
        <img src={image} alt={title} />
        <h3 className='movie-title'>{title}</h3>
        <div className='rating'>
          <img src='star.png' alt='Ocena' />
          <span>{rate.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  );
};

export default MovieComponent;