import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Pokedex from './pages/pokedex/Pokedex';
import Navbar from './components/Navbar';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path='login' element={<Login/>} />
        <Route path='signup' element={<Signup/>} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
