import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../App.css';
import logo from './images/logo.png';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import './SearchBar.css';

import axios from 'axios';

const HeaderComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const handleLoginClick = () => {
    navigate('/signin');
  };

  const handleAddClick = () => {
    navigate('/add');
  };

  const handleRegisterClick = () => {
    navigate('/signup');
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
    window.location.reload();
  };

  //search VVVV

  useEffect(() => {
    axios.get('https://at.usermd.net/api/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  const handleSearch = (results) => {
    setFilteredMovies(results);
  };

  useEffect(() => {
    setFilteredMovies([]);
  }, [location.pathname]);

  return (
    <div>
      <header>
        <Link to="/">
          <img src={logo} alt='Logo' />
        </Link>
        <SearchBar onSearch={handleSearch}></SearchBar>
        <div className="buttons-wrapper">
          {isLoggedIn && (<div className='add-button' onClick={handleAddClick}>
            <button>Dodaj Film</button>
          </div>)}
          {isLoggedIn ? (
            <div className="login-button" onClick={handleLogout}>
              <button>Wyloguj się</button>
            </div>
          ) : (
            <div className='login-button' onClick={handleLoginClick}>
              <button>Zaloguj się</button>
            </div>
          )}
          {!isLoggedIn && (
            <div className='login-button' onClick={handleRegisterClick}>
              <button>Zarejestruj się</button>
            </div>
          )}
        </div>
      </header>
      {filteredMovies.length > 0 && (
        <SearchResults
          filteredMovies={filteredMovies}
        />
      )}
    </div>
  );
};

export default HeaderComponent;