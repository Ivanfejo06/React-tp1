import "./Section2.css"

const Section2 = () =>
{
  return(
    <div class="section pt-4 px-3 px-lg-4" id="about">
        <div class="container-narrow">
            <div class="row">
            <div class="col-md-6">
                <h2 class="h4 my-2">Hola! Me llamo Ivan Joaquin.</h2>
                <p>Inicié mis estudios en el Colegio Técnico ORT Almagro hace 6 años, donde comencé a desarrollar una base sólida en tecnología y ciencias aplicadas. Aunque aún no he completado mi formación en esa institución, los conocimientos y habilidades técnicas adquiridas durante ese tiempo han sido invaluables para mi desarrollo profesional.

Además, poseo un alto nivel de inglés, certificado como C2 según el Marco Común Europeo de Referencia para las Lenguas (MCER). Esta competencia lingüística avanzada me ha permitido comunicarme de manera efectiva en entornos internacionales y acceder a recursos educativos y profesionales en el idioma inglés.</p>
                <div class="row mt-3">
                <div class="col-sm-2">
                    <div class="pb-1">Edad:</div>
                </div>
                <div class="col-sm-10">
                    <div class="pb-1 fw-bolder"><span id="age">17</span> años</div>
                </div>
                <div class="col-sm-2">
                    <div class="pb-1">Email:</div>
                </div>
                <div class="col-sm-10">
                    <div class="pb-1 fw-bolder">ivanfejo06@gmail.com</div>
                </div>
                <br></br>
                <div class="col-sm-10">
                    <div class="pb-1">
                    <p>Mis conocimientos en educación me permiten expresar mis ideas y propósitos de manera clara y eficaz. Además, estoy muy motivado para participar en proyectos que exploren tecnologías emergentes e innovadoras. Como estudiante, estoy constantemente aprendiendo y estoy emocionado de aplicar mis habilidades y conocimientos en nuevos desafíos y oportunidades en el campo de la tecnología.</p>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-md-5 offset-md-1 aos-init aos-animate" data-aos="fade-left" data-aos-delay="100"><img class="avatar img-fluid mt-2 rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-viDs6HUT_Yn97XEiphmW-ORZD7H4o3s-ZamPPJdeWQ&s" width="400" height="400" alt="Walter Patterson"></img>
            </div>
            </div>
        </div>
    </div>
  );
}

export default Section2;