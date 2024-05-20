import "./Navbar.css"

const Navbar = () =>
{
  return (
    <header class="bg-light">
      <nav class="navbar navbar-expand-lg navbar-light bg-light" id="header-nav" role="navigation">
        <div class="container"><a class="link-dark navbar-brand site-title mb-0" href="#">Ezequiel Binker</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto me-2">
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