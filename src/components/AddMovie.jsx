import React, { useState } from 'react';
import './AddMovie.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddMovie = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    content: '',
    genre: '',
    rate: '',
    productionYear: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChangeRoute = () => {
    navigate('/');
    window.location.reload();
  };

  const handleAdd = async (event) => {
    event.preventDefault();

    if (!formData.title || !formData.image || !formData.content || !formData.genre || !formData.rate) {
      return;
    }

    axios
      .post('https://at.usermd.net/api/movies', {
        title: formData.title,
        image: formData.image,
        content: formData.content,
        genre: formData.genre,
        rate: formData.rate,
        productionYear: formData.productionYear
      })
      .then(() => {
        handleChangeRoute();
      })
      .catch((error) => {
        console.log(error);

        setFormData({
          title: '',
          image: '',
          content: '',
          genre: '',
          rate: '',
          productionYear: '',
        });
      });
  };

  return (
    <div className="container">
      <div className="add-movie-box">
        <div className="add-movie-container">
          <h2>Dodaj film</h2>
          <form className="add-movie-form">
            <label>
              Tytuł
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Tytuł"
                value={formData.title}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Zdjęcie
              <input
                type="text"
                id="image"
                name="image"
                placeholder="Link do zdjęcia"
                value={formData.image}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Gatunek
              <input
                type="text"
                id="genre"
                name="genre"
                placeholder="Gatunek"
                value={formData.genre}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Ocena
              <input
                type="text"
                id="rate"
                name="rate"
                placeholder="Ocena"
                value={formData.rate}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Rok wydania
              <input
                type="text"
                id="productionYear"
                name="productionYear"
                placeholder="Rok wydania"
                value={formData.productionYear}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Opis
              <textarea
                id="content"
                name="content"
                rows="10"
                placeholder="Wprowadź opis..."
                value={formData.content}
                onChange={handleInputChange}
              />
            </label>
            <button type="submit" onClick={handleAdd}>
              Dodaj film
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;