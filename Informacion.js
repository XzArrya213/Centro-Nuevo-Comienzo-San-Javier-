export default function Informacion() {
  return (
    <section id="informacion" className="section informacion">
      <div className="container">

        
        <h2>

        </h2>
    {/* --- Tarjeta 1: INFORMACION DE LUGAR --- */}    
   <div className="info-card">
            <div className="card-image">
              <img src="/imgs/edificio1.2.1.jpeg" alt="Visión" />
            </div>
            <div className="info-text">
               <h3>Información del lugar</h3>
              <p>
          Los Centros de Impulso Social (CIS) como los establecidos en Salamanca Guanajuato tienen el propósito 
          de contribuir al desarrollo integral de la población en zonas urbanas y rurales, ofreciendo talleres, 
          cursos y servicios que fortalecen capacidades y habilidades para el bienestar y la inclusión social.
          En ese marco, la disponibilidad de un canal digital claro, actualizado y accesible no es únicamente 
          un soporte de difusión: es un activo estratégico para la movilización comunitaria, la transparencia 
          y la rendición de cuentas.
              </p>
            </div>
          </div>

<h2>

</h2>
        <div className="info-cards">
          
          {/* --- Tarjeta 2: Misión --- */}
          <div className="info-card">
            <div className="card-image">
              <img src="/imgs/mision.svg" alt="Misión" />
            </div>
            <div className="info-text">
              <h3>Misión</h3>
              <p>
                La misión del Centro Nuevo Comienzo San Xavier es impulsar el desarrollo humano y social de la comunidad, 
                mediante la promoción de actividades educativas, formativas y de convivencia que fortalezcan a las familias, 
                fomenten valores y generen oportunidades de crecimiento personal. El centro busca contribuir a la 
                construcción de una comunidad más unida, participativa y solidaria, ofreciendo espacios de apoyo, 
                orientación y aprendizaje para todas las personas.
              </p>
            </div>
          </div>

          {/* --- Tarjeta 3: Visión --- */}
          <div className="info-card">
            <div className="card-image">
              <img src="/imgs/vision.svg" alt="Visión" />
            </div>
            <div className="info-text">
              <h3>Visión</h3>
              <p>
                La visión del Centro Nuevo Comienzo San Xavier es consolidarse como un referente comunitario que promueva 
                el bienestar social, la inclusión y la participación activa de la población. Se aspira a que el centro 
                sea reconocido como un espacio que impulsa el desarrollo integral de las personas, fortalece el tejido 
                social y contribuye a la creación de entornos más justos, seguros y con mayores oportunidades para todos.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}