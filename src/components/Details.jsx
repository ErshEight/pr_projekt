import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import './Details.css';

const Details = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://at.usermd.net/api/movies/${id}`);
        if (!response.data) {
          throw new Error('Network response was not ok');
        }

        const movieDetailsData = response.data;
        setMovieDetails(movieDetailsData);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className="details-box">
      <div className="detail-first-column">
        <img src={movieDetails.image} alt={movieDetails.title} />
      </div>
      <div className="detail-second-column">
        <h2>{movieDetails.title}</h2>
        <p>Genre: {movieDetails.genre}</p>
        <p>Publication Year: {movieDetails.publicationYear}</p>
        <p>Rate: {movieDetails.rate}</p>
        <p>{movieDetails.content}</p>
      </div>
    </div>
  );
};

export default Details;