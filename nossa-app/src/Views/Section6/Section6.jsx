import "./Section6.css"

const Section6 = () =>
{
  return(
    <div class="section px-3 px-lg-4 pt-5" id="education">
        <div class="container-narrow">
          <div class="text-center mb-5">
            <h2 class="marker marker-center">Educación</h2>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="cardd mb-3 aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
                <div class="cardd-header px-3 py-2">
                  <div class="d-flex justify-content-between">
                    <div>
                      <h3 class="h5 mb-1">Licenciado en Sistemas</h3>
                      <div class="text-muted text-small">Universidad de Palermo <small>(2018-2020)</small></div>
                    </div>
                  </div>
                </div>
                <div class="cardd-body px-3 py-2">
                  <p>
                    Trabajo Final de Grado : "Bot Docente". Proyecto desarrollado en Python utilizando Telegram Bot API
                    y librerías de IA, como SpaCy y NLTK. Despliegue de un bot conversacional disponible en la
                    plataforma Telegram, como apoyo complementario a la labor docente.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="cardd mb-3 aos-init aos-animate" data-aos="fade-left" data-aos-delay="300">
                <div class="cardd-header px-3 py-2">
                  <div class="d-flex justify-content-between">
                    <div>
                      <h3 class="h5 mb-1">Analista de Sistemas</h3>
                      <div class="text-muted text-small">Instituto Tecnológico ORT <small>(2013-2017)</small></div>
                    </div>
                  </div>
                </div>
                <div class="cardd-body px-3 py-2">
                  <p>Proyecto Final destacado: Desarrollo de una aplicación web PHP para un emprendimiento de Yoga y
                    Pilates. </p>
                  <p> Tecnologías: Symfony Framework (PHP), MySQL, Amazon Web Services</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-6 mx-0">
              <div class="cardd mb-3 aos-init aos-animate" data-aos="fade-right" data-aos-delay="200">
                <div class="cardd-header px-3 py-2">
                  <div class="d-flex justify-content-between">
                    <div>
                      <h3 class="h5 mb-1">Bachiller Técnico con orientación en Informática</h3>
                      <div class="text-muted text-small">Escuela ORT <small>(2007-2012)</small></div>
                    </div>
                  </div>
                </div>
                <div class="cardd-body px-3 py-2">
                  <p>Proyecto final Destacado: Desarrollo de una aplicación desktop para la creación de partituras
                    musicales utilizando la tecnología de Microsoft Kinect, en el framework .NET .</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default Section6;