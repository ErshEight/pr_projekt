import React from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import MovieComponent from './components/MovieComponent';

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
    <div>
      <HeaderComponent/>
      <main className='movies-container'>
        {movies.map((movie, index) => (
          <MovieComponent key={index} {...movie} />
        ))}
      </main>
      <FooterComponent/>
    </div>
  );
}

export default App;