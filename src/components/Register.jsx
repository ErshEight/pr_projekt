import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeRoute = () => {
    navigate('/signin');
    window.location.reload();
  };

  const handleRegistration = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      return;
    }

    axios
      .post('https://at.usermd.net/api/user/create', {
        name: formData.name,
        email: formData.email,
        password: formData.password
      })
      .then((response) => {
        handleChangeRoute();
      })
      .catch((error) => {
        console.log(error);

        setFormData({
          name: '',
          email: '',
          password: '',
        });
      });
  };

  return (
    <div className="registration-container">
      <div className="registration-box">
        <h2>Rejestracja</h2>
        <form>
          <label>
            Nazwa:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange} required />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange} required />
          </label>
          <br />
          <label>
            Hasło:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange} required />
          </label>
          <br />
          <button type="submit" onClick={handleRegistration}>Zarejestruj się</button>
        </form>
        <p className="have-account-text">
          Posiadasz już konto? <Link to="/signin">Zaloguj się tutaj!</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
