import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import LoginForm from './LoginForm';

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('user'));
    if (storage) navigate('/establishments');
  }, [navigate]);

  return (
    <div className="loginContainer">
      <section className="loginForm">
        <LoginForm />
      </section>

    </div>
  );
}

export default Login;
