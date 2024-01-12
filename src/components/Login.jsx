import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    login: '',
    password: '',
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const [errors, setErrors] = useState({});
  const handleChangeRoute = () => {
    navigate('/');
    window.location.reload();
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!formData.login || !formData.password) {
      return;
    }

    axios
      .post('https://at.usermd.net/api/user/auth', {
        login: formData.login,
        password: formData.password
      })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        handleChangeRoute();
      })
      .catch((error) => {
        const errorMessages = {};
        errorMessages.password =
          "Błędne hasło, spróbuj ponownie";
        setErrors(errorMessages || {});
        console.log(error);

        setFormData({
          login: '',
          password: '',
        });
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <label>
            Login:
            <input 
            type="text" 
            name="login" 
            value={formData.login} 
            onChange={handleInputChange} 
            required />
          </label>
          <br />
          <label>
            Hasło:
            <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleInputChange} 
            required />
          </label>
          <br />
          <button type="submit" onClick={handleLogin}>Zaloguj się</button>
        </form>
        <p className="need-account-text">
          Potrzebujesz konto? <Link to="/signup">Zarejestruj się!</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
