import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src='/pokeball.svg' alt='pokedex logo' className='logo' />
        </Link>
      </div>
      <div className="navbar-menu">
        <Link to="/" className='menu-item pokedex animated-content'></Link>
        <Link to="/battle" className='menu-item battle-mode  animated-content'></Link>
      </div>
      <div className="navbar-links">
        <Link to="/login" className='menu-item'><p>Log In</p></Link>
        <Link to="/signup" className='menu-item'><p>Sign Up</p></Link>
      </div>
    </nav>
  );
}

export default Navbar;
