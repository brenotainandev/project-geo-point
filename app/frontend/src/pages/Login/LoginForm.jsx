import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disable, setDisable] = useState(true);
  const [logged, setLogged] = useState(true);
  const navigate = useNavigate();


  const validateEmail = (email, password) => {
    const regex = /\S+@+\S+\.\S+/;
    const result = regex.test(email);
    const minLength = 6;
    if (!result || password.length < minLength) return false;
    return result;
  };

  useEffect(() => {
    if (validateEmail(email, password)) setDisable(false);
    else {
      setDisable(true);
    }
  }, [email, password]);

  const handleClick = async () => {
    await axios
      .post('http://localhost:3000/login', {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data));

        navigate('/establishments');
      })
      .catch((err) => {
        console.log(err.response.data);
        setLogged(false);
      });
  };

  return (
    <>
      <form>
        <input
          label="Login"
          placeholder="email@geopoint.com"
          className="input-email"
          onChange={ ({ target: { value } }) => setEmail(value) }
        />
        <input
          label="Senha"
          placeholder="******"
          className="input-senha"
          type="password"
          onChange={ ({ target: { value } }) => setPassword(value) }
        />
        <button
          onClick={ () => handleClick() }
          className="botao-login"
          type="button"
          disabled={ disable }
        >
          LOGIN
        </button>
      </form>
      <button
        onClick={ () => navigate('/register') }
        type="button"
      >
        Ainda não tenho conta
      </button>
      {!logged
      && <p>Usuário inválido</p>}
    </>
  );
}

export default LoginForm;
