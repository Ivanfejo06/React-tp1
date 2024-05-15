// Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-brand">Tu Nombre</span>
      </div>
      <div className="navbar-right">
        <ul className="navbar-list">
          <li><a href="#acerca">Acerca de Mí</a></li>
          <li><a href="#conocimientos">Conocimientos</a></li>
          <li><a href="#experiencia">Experiencia</a></li>
          <li><a href="#educacion">Educación</a></li>
          <li><a href="#certificaciones">Certificaciones</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;