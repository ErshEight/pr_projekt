import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const HeaderComponent = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/signin');
  };

  const handleRegisterClick = () => {
    navigate('/signup');
  };

  const handleAddClick = () => {
    navigate('/add');
  };

  return (
    <header>
      <Link to="/">
        <img src='logo.png' alt='Logo' />
      </Link>
      <div className='add-button' onClick={handleAddClick}>
        <button>Dodaj Film</button>
      </div>
      <div className='search-bar'>
        <input type='text' placeholder='Szukaj filmów' />
      </div>
      <div className='buttons-wrapper'>
        <div className='login-button' onClick={handleLoginClick}>
          <button>Zaloguj się</button>
        </div>
        <div className='register-button' onClick={handleRegisterClick}>
          <button>Zarejestruj się</button>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;