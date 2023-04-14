import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

function FormRegister() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [fetchError, setfetchError] = useState(null);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const nameMinLength = 8;
  const passwordMinLength = 6;

  const handleClick = async (e) => {
    e.preventDefault();
    await axios
      .post('http://localhost:3000/register', {
        name: userName,
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data));
        setfetchError(null);
        navigate('/establishments');
      })
      .catch((err) => {
        setfetchError(err.response.data.message);
      });
  };

  return (
    <div className="containerRegister">
      <form onSubmit={ handleClick }>
        <label htmlFor="nameInput">
          Nome
          <input
            type="text"
            id="nameInput"
            placeholder="Nome"
            value={ userName }
            onChange={ ({ target: { value } }) => setUserName(value) }
          />
        </label>
        <label htmlFor="emailInput">
          Login
          <input
            type="email"
            id="emailInput"
            placeholder="email@email.com"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            id="password"
            placeholder="******"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
          />
        </label>
        <button
          type="submit"
          disabled={ !(
            email.match(/\S+@\S+\.\S+/i)
            && password.length >= passwordMinLength
            && userName.length >= nameMinLength
          ) }
        >
          CADASTRAR
        </button>
      </form>
      {fetchError && (
        <span>
          {fetchError.message}
        </span>
      )}
    </div>
  );
}

export default FormRegister;
