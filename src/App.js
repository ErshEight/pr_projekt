import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import Details from './components/Details';
import Home from './components/Home';
import AddMovie from './components/AddMovie';
import Login from './components/Login';
import Register from './components/Register';
import { MoviesProvider } from "./components/MoviesContext";

function App() {
  return (
    <MoviesProvider>
      <Router>
        <div>
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details/:title/:id" element={<Details />} />
              <Route path="/add" element={<AddMovie />} />
              <Route path="/signin" element={<Login />} />
              <Route path="/signup" element={<Register />} />
            </Routes>
          </div>
          <FooterComponent />
        </div>
      </Router>
    </MoviesProvider>
  );
}

export default App;