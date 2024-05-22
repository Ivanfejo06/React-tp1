import "./Section6.css"
import EducationCard from "../../Components/EducationCard";

const Section6 = () =>
{
  return(
    <div class="section px-3 px-lg-4 pt-5" id="education">
        <div class="container-narrow">
          <div class="text-center mb-5">
            <h2 class="marker marker-center">Educación</h2>
          </div>
          <div class="row">
              <EducationCard
                title="Estudios Primarios"
                institution="Instituto Orsino"
                date="20XX-20XX"
                description="Estudié desde jardín hasta primaria completa en el Instituto Orsino. El mismo contaba con una buena cantidad de material de las materias centrales y más importantes como matemática, lengua e historia. Además de ello, contaba con inglés de alta calidad, lo que me ayudó a alcanzar mi actual nivel de inglés (C2)."
                delay={100}
              />
              <EducationCard
                title="Analista de Sistemas"
                institution="Instituto Tecnológico ORT"
                date="2019-2024"
                description="Proyecto Final destacado: Desarrollo de una aplicación móvil Android/iOS para un emprendimiento de donaciones y Tzedaká enfocada a medicamentos y logística médica. Tecnologías: Node.js, PostGres, JavaScript."
                delay={300}
              />
          </div>
        </div>
      </div>
  );
}
export default Section6;