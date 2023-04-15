import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(true);
  const [logged, setLogged] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
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
      .post("http://localhost:3000/login", {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data));

        navigate("/establishments");
      })
      .catch((err) => {
        console.log(err.response.data);
        setErrorMessage(err.response.data.message);
        setLogged(false);
      });
  };

  return (
    <>
      <form>
        <img
          className="mb-4 img-login"
          src="https://icons.veryicon.com/png/o/miscellaneous/travel-flat-colorful-icon/maps-46.png"
          alt=""
          width="100"
          height="100"
        />
        <h1 className="h3 mb-3 fw-normal">Geo Ponto</h1>

        <div className="form-floating mb-3">
          <input
            label="Login"
            placeholder="email@geopoint.com"
            className="input-email form-control"
            onChange={({ target: { value } }) => setEmail(value)}
          />
          <label htmlFor="email-login">Usuario</label>
        </div>

        <div className="form-floating mb-3">
          <input
            label="Senha"
            htmlFor="password-login"
            placeholder="******"
            className="input-senha form-control"
            type="password"
            onChange={({ target: { value } }) => setPassword(value)}
          />
          <label htmlFor="password-login">Senha</label>
        </div>

        <button
          onClick={() => handleClick()}
          className="botao-login btn btn-primary mb-3"
          type="button"
          disabled={disable}
        >
          LOGIN
        </button>
      </form>

      <button
        className="botao-login btn btn-outline-secondary mb-3"
        onClick={() => navigate("/register")}
        type="button"
      >
        Ainda não tenho conta
      </button>
      {!logged && (
        <div className="alert alert-warning" role="alert">
          {" "}
          {errorMessage}{" "}
        </div>
      )}
    </>
  );
}

export default LoginForm;
