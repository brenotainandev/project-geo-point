import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import './styles/app.css';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={ <Login /> } />
    </Routes>
  );
}

export default App;
