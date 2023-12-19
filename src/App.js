import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import MovieComponent from './components/MovieComponent';
import Details from './components/Details';
import Home from './components/Home';
import AddMovie from './components/AddMovie';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const movies = [
    { title: 'Film', description: 'Przykładowy opis', rating: 0, image: 'poster-placeholder.png' },
    { title: 'Film', description: 'Przykładowy opis', rating: 0, image: 'poster-placeholder.png' },
    { title: 'Film', description: 'Przykładowy opis', rating: 0, image: 'poster-placeholder.png' },
    { title: 'Film', description: 'Przykładowy opis', rating: 0, image: 'poster-placeholder.png' },
    { title: 'Film', description: 'Przykładowy opis', rating: 0, image: 'poster-placeholder.png' },
    { title: 'Film', description: 'Przykładowy opis', rating: 0, image: 'poster-placeholder.png' },
    { title: 'Film', description: 'Przykładowy opis', rating: 0, image: 'poster-placeholder.png' },
    { title: 'Film', description: 'Przykładowy opis', rating: 0, image: 'poster-placeholder.png' },
    { title: 'Film', description: 'Przykładowy opis', rating: 0, image: 'poster-placeholder.png' },
    { title: 'Film', description: 'Przykładowy opis', rating: 0, image: 'poster-placeholder.png' },
  ];

  return (
    <Router>
      <div>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home movies={movies} />} />
            <Route path="/details" element={<Details />} />
            <Route path="/add" element={<AddMovie />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register />} />
          </Routes>
        </div>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;