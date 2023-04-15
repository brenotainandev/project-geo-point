import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import LoginForm from "./LoginForm";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("user"));
    if (storage) navigate("/establishments");
  }, [navigate]);

  return (
    <div className="text-center">
      <section className="form-signin w-100 m-auto text-center">
        <LoginForm />
      </section>
    </div>
  );
}

export default Login;
