import "./Section8.css"

const Section8 = () =>
{
  return(
    <div class="section px-2 px-lg-4 pb-4 pt-5 mb-5" id="contact">
        <div class="container-narrow">
          <div class="text-center mb-5">
            <h2 class="marker marker-center">Contacto</h2>
          </div>
          <div class="row">
            <div class="col-md-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
              <div class="bg-light my-2 p-3 pt-2">
                <form method="POST">
                  <div class="form-group my-2">
                    <label for="nombre" class="form-label fw-bolder">Nombre</label>
                    <input class="form-control" type="text" id="nombre" name="nombre" required=""></input>
                  </div>
                  <div class="form-group my-2">
                    <label for="email" class="form-label fw-bolder">Email</label>
                    <input class="form-control" type="email" id="email" name="_replyto" required=""></input>
                  </div>
                  <div class="form-group my-2">
                    <label for="mensaje" class="form-label fw-bolder">Mensaje</label>
                    <textarea class="form-control" id="mensaje" name="mensaje" rows="4" required=""></textarea>
                  </div>
                  <button class="btnn btnn-primary mt-2" type="submit">Enviar</button>
                </form>
              </div>
            </div>
            <div class="col-md-6 aos-init aos-animate" data-aos="fade-left" data-aos-delay="300">
              <div class="mt-3 px-1">
                <div class="h5">Sigamos en contacto!</div>
                <p>Consultame lo que necesites a través del formulario o enviandome un mail a mi correo personal</p>
                <p>¡Gracias por visitar mi sitio web!</p>
              </div>
              <div class="mt-53 px-1">
                <div class="row">
                  <div class="col-sm-2">
                    <div class="pb-1">Email:</div>
                  </div>
                  <div class="col-sm-10">
                    <div class="pb-1 fw-bolder">ivanfejo06@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default Section8;