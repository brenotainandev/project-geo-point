import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import FormRegister from "./FormRegister";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("user"));
    if (storage) navigate("/establishments");
  }, [navigate]);

  return (
    <div className="text-center">
      <section className="form-signin w-100 m-auto text-center">
        <FormRegister />
      </section>
    </div>
  );
}

export default Register;
