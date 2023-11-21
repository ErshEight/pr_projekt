import React, { Component } from 'react';

const HeaderComponent = () => {
  return (
    <header>
      <img src='logo.png' alt='Logo' />
      <div className='search-bar'>
        <input type='text' placeholder='Szukaj filmów' />
      </div>
      <div className='login-button'>
        <button type="button">Zaloguj się</button>
      </div>
    </header>
  );
};

export default HeaderComponent;