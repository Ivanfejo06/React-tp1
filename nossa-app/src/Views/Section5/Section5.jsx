import "./Section5.css"
import Testimonial from "../../Components/Testimonial";

const Section5 = () =>
{
  return(
    <div class="section px-3 px-lg-4 pt-5" id="testimonials">
        <div class="container-narrow">
            <div class="text-center mb-5">
                <h2 class="marker marker-center">Recomendaciones</h2>
            </div>
            <div className="row">
                <Testimonial quote="Demostró ser un compañero de estudios excepcional. Siempre estuvo dispuesto a compartir sus conocimientos y aclarar cualquier duda que tuviéramos en clase. Su enfoque colaborativo y su capacidad para explicar conceptos complejos hicieron que nuestro proceso de aprendizaje fuera mucho más fluido y comprensible." delay={100} side="right" />
                <Testimonial quote="Iván se destacó como un estudiante comprometido y colaborativo. Siempre estuvo dispuesto a contribuir al éxito del equipo, aportando ideas creativas y soluciones innovadoras a nuestros proyectos. Su habilidad para trabajar en equipo y su motivación para aprender hicieron que fuera un activo invaluable para nuestro grupo." delay={300} side="left" />
                <Testimonial quote="Desde temprana edad, ha demostrado un compromiso excepcional con su educación y su crecimiento personal. Destaca por su dedicación, su capacidad para enfrentar desafíos y su deseo constante de superarse a sí mismo. Siempre está dispuesto a asumir nuevas responsabilidades y a colaborar con sus compañeros para lograr el éxito académico y profesional." delay={200} side="right" />
                <Testimonial quote="Sin duda alguna, Iván es uno de los estudiantes más destacados que he tenido el placer de conocer. Su pasión por el aprendizaje y su dedicación a sus estudios lo convierten en un modelo a seguir para sus compañeros. Siempre está dispuesto a ayudar a otros y a compartir sus conocimientos, lo que demuestra su compromiso con el éxito colectivo." delay={400} side="left" />
            </div>
        </div>
    </div>
  );
}
export default Section5;