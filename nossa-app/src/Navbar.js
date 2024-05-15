// Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <header class="">
      <nav class="navbar" id="header-nav" role="navigation">
        <div class="container">
          <a class="navbar-brand titulo" href="#">Ivan y Pala</a>
          <div class="" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item"><a class="nav-link" href="#about">Acerca de Mí</a></li>
              <li class="nav-item"><a class="nav-link" href="#services">Conocimientos</a></li>
              <li class="nav-item"><a class="nav-link" href="#experience">Experiencia</a></li>
              <li class="nav-item"><a class="nav-link" href="#education">Educación</a></li>
              <li class="nav-item"><a class="nav-link" href="#certifications">Certificaciones</a></li>
              <li class="nav-item"><a class="nav-link" href="#contact">Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;