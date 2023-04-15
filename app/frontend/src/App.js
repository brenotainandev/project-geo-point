import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';
import Login from './pages/Login/Login';
import Establishments from './pages/Establishments/Establishments';
import Register from './pages/Register/Register';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={ <Login /> } />
      <Route path="/establishments" element={ <Establishments /> } />
      <Route path="/register" element={ <Register /> } />
    </Routes>
  );
}

export default App;
