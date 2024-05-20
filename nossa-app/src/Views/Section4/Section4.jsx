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
            <div class="col-md-6">
              <div class="cardd mb-3 aos-init aos-animate" data-aos="fade-left" data-aos-delay="400">
                <div class="cardd-header px-4 py-3">
                  <div class="d-flex justify-content-between">
                    <div>
                      <h3 class="h5 mb-1">Desarrollador Backend</h3>
                      <div class="text-muted text-small">Wadiah Capital. <small>(2021-2023)</small></div>
                    </div><img src="images/services/server.svg" width="48" height="48" alt="full stack"></img>
                  </div>
                </div>
                <div class="cardd-body px-4 py-3">
                  <p>Trabajé durante 2 años en el rediseño funcional del sistema informático de Wadiah Capital. Comencé a cargo de un módulo que realiza una integración con servicios crypto, para luego quedar a cargo del core bancario. <br></br>

                    El stack de backend utilizado está comprendido por Nest.js (Express) conectado a una base de datos SQL Server. Además, otras herramientas utilizadas durante mi trabajo día a día son : Redis, CircleCI, Docker, Sentry y Azure. <br></br>
                    
                    Dentro de mis tareas de I+D realicé algunos proyectos crypto, en los cuales puse en práctica conocimientos de Solidity, Pinata Cloud y OpenSea</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="cardd mb-3 aos-init aos-animate" data-aos="fade-left" data-aos-delay="400">
                <div class="cardd-header px-4 py-3">
                  <div class="d-flex justify-content-between">
                    <div>
                      <h3 class="h5 mb-1">Desarrollador Full Stack</h3>
                      <div class="text-muted text-small">Freelance. <small>(2019-actual)</small></div>
                    </div><img src="images/services/full-stack.svg" width="48" height="48" alt="full stack"></img>
                  </div>
                </div>
                <div class="cardd-body px-4 py-3">
                  <p>Durante este tiempo, he adquirido experiencia en proyectos personales, tanto en el desarrollo Frontend utilizando tecnologías como HTML, CSS, y React.js, como en el desarrollo Backend empleando TypeScript, Node.js y Nest.js. Además, he incursionado en el desarrollo móvil utilizando React Native. <br></br>

                    Mis habilidades destacadas se centran en el uso de NestJS y TypeScript, áreas en las que he acumulado experiencia significativa a lo largo de mi trayectoria profesional.</p>
                   </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="cardd mb-3 aos-init aos-animate" data-aos="fade-left" data-aos-delay="300">
                <div class="cardd-header px-4 py-3">
                  <div class="d-flex justify-content-between">
                    <div>
                      <h3 class="h5 mb-1">Profesor de Informática</h3>
                      <div class="text-muted text-small">Escuela ORT. <small>(2016-actual)</small></div>
                    </div><img src="images/services/web-programming.svg" width="48" height="48" alt="web development"></img>
                  </div>
                </div>
                <div class="cardd-body px-4 py-3">
                  <p>Mi experiencia docente en ORT Argentina ha sido variada y enriquecedora, desempeñando múltiples roles que han moldeado mi trayectoria en educación informática. En "Taller de Programación", enseño fundamentos en desarrollo informático: desde C# hasta HTML, CSS, Bootstrap, MVC en .NET Core, Dapper ORM y JavaScript para bases de datos y vistas dinámicas. <br></br>

                    En "Proyectos de Producción", guío a alumnos en la integración de sus conocimientos en un proyecto propio, destacando buenas prácticas de programación, trabajo en equipo, gestión de recursos y metodologías ágiles. <br></br>
                    
                    Como profesor de Diseño Web, priorizo el enfoque centrado en el usuario, UX, UI y Design Thinking con HTML, CSS para productos digitales significativos. <br></br>
                    
                    En "Bases de Datos" y "Tecnologías de la Información", complemento el estudio técnico con bases de hardware para soluciones informáticas acordes a las necesidades del cliente.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="cardd mb-3 aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
                <div class="cardd-header px-4 py-3">
                  <div class="d-flex justify-content-between">
                    <div>
                      <h3 class="h5 mb-1">Profesor de Taller de Programación</h3>
                      <div class="text-muted text-small">Instituto ORT. <small>(2020-2021)</small></div>
                    </div><img src="images/services/algorithm.svg" width="48" height="48" alt="programming"></img>
                  </div>
                </div>
                <div class="cardd-body px-4 py-3">
                  <p>Impartí conocimientos en el "Taller de Herramientas de Programación", abordando desde algoritmos simples en Java hasta programación orientada a objetos y estructuras de control, preparando a los estudiantes de nivel terciario para comprender las complejidades del desarrollo informático.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default Section4;