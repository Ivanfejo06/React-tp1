const Section2 = () =>
{
  return(
    <div class="section pt-4 px-3 px-lg-4" id="about">
        <div class="container-narrow">
            <div class="row">
            <div class="col-md-6">
                <h2 class="h4 my-2">Hola! Me llamo Ezequiel Binker.</h2>
                <p>Soy Licenciado en Sistemas recibido en la Universidad de Palermo. Además, hace más de <span id="yearsEducator">9</span> años que
                trabajo en educación IT, transmitiendo los conceptos de programación a cientos de jóvenes de nivel
                secundario y terciario.</p>
                <div class="row mt-3">
                <div class="col-sm-2">
                    <div class="pb-1">Edad:</div>
                </div>
                <div class="col-sm-10">
                    <div class="pb-1 fw-bolder"><span id="age">29</span> años</div>
                </div>
                <div class="col-sm-2">
                    <div class="pb-1">Email:</div>
                </div>
                <div class="col-sm-10">
                    <div class="pb-1 fw-bolder">ezebinker@gmail.com</div>
                </div>
                <br></br>
                <div class="col-sm-10">
                    <div class="pb-1">
                    <p>Mis conocimientos en educación me permiten comunicar mis pensamientos e intenciones de una manera
                        clara y eficiente. Además, cuento con muchas ganas de participar en proyectos que exploren
                        tecnologías emergentes e innovadoras.</p>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-md-5 offset-md-1 aos-init aos-animate" data-aos="fade-left" data-aos-delay="100"><img class="avatar img-fluid mt-2 rounded-circle" src="https://github.com/ezebinker.png" width="400" height="400" alt="Walter Patterson"></img>
            </div>
            </div>
        </div>
    </div>
  );
}

export default Section2;