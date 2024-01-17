import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMovies } from "../components/MoviesContext";
import axios from 'axios';
import '../App.css';
import './Details.css';

const Details = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, [id]);

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  const handleDelete = () => {
    const token = localStorage.getItem('token');

    axios.delete(`https://at.usermd.net/api/movie/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        console.log('Film został usunięty:', response);
        window.location.href = '/';
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="details-box">
      <div className="detail-first-column">
        <img src={movieDetails.image} alt={movieDetails.title} />
      </div>
      <div className="detail-second-column">
        <h2>{movieDetails.title}</h2>
        <p>Gatunek: {movieDetails.genre}</p>
        <p>Rok wydania: {movieDetails.productionYear}</p>
        <p>Ocena: {movieDetails.rate}</p>
        <p>{movieDetails.content}</p>
        {isLoggedIn && (
          <button className='delete-button' onClick={handleDelete}>
            Usuń film
          </button>
        )}
      </div>
    </div>
  );
};

export default Details;