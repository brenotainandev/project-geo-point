import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import './styles/app.css';

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
    </Routes>
  );
}

export default App;
