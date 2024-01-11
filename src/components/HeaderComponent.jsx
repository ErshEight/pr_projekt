import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import logo from './images/logo.png'

const HeaderComponent = () => {
  const navigate = useNavigate();

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
    window.location.reload();
  };

  return (
    <header>
      <Link to="/">
        <img src={logo} alt='Logo' />
      </Link>
      <div className='search-bar-container'>
        <div className='search-bar'>
          <input type='text' placeholder='Szukaj filmów' />
        </div>
      </div>
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
  );
};

export default HeaderComponent;