import "./Section4.css"

const Section4 = () =>
{
  return(
    <div class="section px-3 px-lg-4 pt-5" id="experience">
        <div class="container-narrow">
          <div class="text-center mb-5">
            <h2 class="marker marker-center">Experiencia Laboral</h2>
          </div>
          <div class="row">
            <div>
              <div class="cardd mb-3 aos-init aos-animate" data-aos="fade-left" data-aos-delay="300">
                <div class="cardd-header px-4 py-3">
                  <div class="d-flex justify-content-between">
                      <div>
                        <h3 class="h5 mb-1">Estudiante de ORT Almagro</h3>
                        <div class="text-muted text-small">ORT Argentina. <small>(2016-actual)</small></div>
                      </div><img src="images/services/web-programming.svg" width="48" height="48" alt="web development"></img>
                  </div>
                </div>
                <div class="cardd-body px-4 py-3">
                    <p>Estudiante en ORT Almagro desde hace 6 años, he adquirido conocimientos en UX/UI y soy Fullstack con altos conocimientos en diversos lenguajes y programas informáticos, entre ellos: C#, HTML, JavaScript, PseInt, C++, CSS, Excel, Word, Photoshop, Illustrator, Processing, Node.js, Trello, Figma, Canva, Google Slides, Postman, SQL Server, MVC, Python, React.js, y jQuery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default Section4;