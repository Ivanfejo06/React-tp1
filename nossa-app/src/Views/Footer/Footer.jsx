import "./Footer.css"

const Footer = () =>
{
  return(
    <footer class="pt-4 pb-4 text-center bg-light">
        <div class="container">
          <div class="my-3">
            <div class="h4">Ivan Joaquin</div>
            <p>Estudiante de Programación</p>
            <div class="social-nav">
              <nav role="navigation">
                <ul class="nav justify-content-center">
                  <li class="nav-item"><a class="nav-link" target="_blank" href="https://www.linkedin.com/in/ezequielbinker/" title="LinkedIn"><i class="fab fa-linkedin"></i><span class="menu-title sr-only">LinkedIn</span></a></li>
                  <li class="nav-item"><a class="nav-link" target="_blank" href="https://www.github.com/ezebinker" title="Github"><i class="fab fa-github"></i><span class="menu-title sr-only">LinkedIn</span></a></li>
                  <li class="nav-item"><a class="nav-link" target="_blank" href="https://www.behance.net/ezequielbinker" title="Behance"><i class="fab fa-behance"></i><span class="menu-title sr-only">Behance</span></a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="text-small text-secondary">
            <div class="mb-1">©<script>document.write(new Date().getFullYear())</script>2024 Ivan Joaquin. Todos los derechos reservados</div>
          </div>
        </div>
      </footer>
  );
}
export default Footer;