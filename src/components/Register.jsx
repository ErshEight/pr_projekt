import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    login: '',
    nazwa: '',
    email: '',
    haslo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration data:', formData);
  };

  return (
    <div className="registration-container">
      <div className="registration-box">
        <h2>Rejestracja</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Login:
            <input type="text" name="login" value={formData.login} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Nazwa:
            <input type="text" name="nazwa" value={formData.nazwa} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Hasło:
            <input type="password" name="haslo" value={formData.haslo} onChange={handleChange} required />
          </label>
          <br />
          <button type="submit">Zarejestruj się</button>
        </form>
        <p className="have-account-text">
          Posiadasz już konto? <Link to="/signin">Zaloguj się tutaj!</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
