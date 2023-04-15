import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function FormRegister() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [fetchError, setfetchError] = useState(null);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const nameMinLength = 8;
  const passwordMinLength = 6;

  const handleClick = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3000/register", {
        name: userName,
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data));
        setfetchError(null);
        navigate("/establishments");
      })
      .catch((err) => {
        setfetchError(err.response.data.message);
      });
  };

  return (
    <div className="containerRegister">
      <form onSubmit={handleClick}>
      <img
          className="mb-4 img-login"
          src="https://cdn-icons-png.flaticon.com/128/1782/1782873.png"
          alt=""
          width="100"
          height="100"
        />
        <h1 className="h3 mb-3 fw-normal">Criar Usuario</h1>

        <div className="form-floating mb-3">
          <input
            type="text"
            id="nameInput"
            className="form-control"
            placeholder="Nome"
            value={userName}
            onChange={({ target: { value } }) => setUserName(value)}
          />
          <label htmlFor="nameInput">Nome</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            id="emailInput"
            className="form-control"
            placeholder="email@email.com"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />
          <label htmlFor="emailInput">Email</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="******"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          />
          <label htmlFor="password">Senha</label>
        </div>

        <button
          type="submit"
          className="botao-register mb-3 btn btn-success"
          disabled={
            !(
              email.match(/\S+@\S+\.\S+/i) &&
              password.length >= passwordMinLength &&
              userName.length >= nameMinLength
            )
          }
        >
          CADASTRAR
        </button>
      </form>
      {fetchError && <span>{fetchError.message}</span>}
    </div>
  );
}

export default FormRegister;
