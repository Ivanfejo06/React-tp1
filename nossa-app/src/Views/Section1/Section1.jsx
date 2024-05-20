import "./Section1.css"

const Section1 = () =>
{
  return(
    <header>
      <div class="cover bg-light">
        <div class="container px-3">
          <div class="row">
            <div class="col-lg-6 p-2"><img class="img-fluid" src="https://ezebinker.github.io/images/illustrations/hello3.svg" alt="hello"></img>
            </div>
            <div class="col-lg-6">
              <div class="mt-5">
                <p class="lead text-uppercase mb-1">Hola!</p>
                <h1 class="intro-title marker aos-init aos-animate" data-aos="fade-left" data-aos-delay="50">Soy Ezequiel Binker</h1>
                <p class="lead fw-normal mt-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">Licenciado en Sistemas y
                  Profesor de Programación</p>
                <div class="social-nav aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                  <nav role="navigation">
                    <ul class="nav justify-content-left">
                      <li class="nav-item"><a class="nav-link" target="_blank" href="https://www.linkedin.com/" title="LinkedIn"><i class="fab fa-linkedin"></i><span class="menu-title sr-only">LinkedIn</span></a></li>
                      <li class="nav-item"><a class="nav-link" target="_blank" href="https://www.github.com/ezebinker" title="Github"><i class="fab fa-github"></i><span class="menu-title sr-only">LinkedIn</span></a></li>
                      <li class="nav-item"><a class="nav-link" target="_blank" href="https://www.behance.net/ezequielbinker" title="Behance"><i class="fab fa-behance"></i><span class="menu-title sr-only">Behance</span></a></li>
                    </ul>
                  </nav>
                </div>
                <div class="mt-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200"><a class="btn btn-primary shadow-sm mt-1 hover-effect" href="#contact">Contactame! <i class="fas fa-arrow-right"></i></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wave-bg"></div>
    </header>
  );
}

export default Section1;