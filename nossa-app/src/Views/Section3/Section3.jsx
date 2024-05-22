import ServiceCard from "../../Components/ServiceCard";

const Section2 = () =>
{
  return(
    <div class="section px-3 px-lg-4 pt-5" id="services">
        <div class="container-narrow">
          <div class="text-center mb-5">
            <h2 class="marker marker-center">Conocimientos</h2>
          </div>
          <div class="row py-3">
            <div className="row">
              <ServiceCard imgSrc="https://ezebinker.github.io/images/services/web-programming.svg" imgAlt="web design" title="Desarrollo Web" delay={100} />
              <ServiceCard imgSrc="https://ezebinker.github.io/images/services/app-development.svg" imgAlt="app development" title="Desarrollo Móvil" delay={400} />
              <ServiceCard imgSrc="https://ezebinker.github.io/images/services/blockchain.svg" imgAlt="blockchain" title="Blockchain & Criptomonedas" delay={200} />
              <ServiceCard imgSrc="https://ezebinker.github.io/images/services/ui-ux.svg" imgAlt="ui-ux" title="UX/UI" delay={300} />
            </div>
          </div>
        </div>
      </div>
  );
}
export default Section2;