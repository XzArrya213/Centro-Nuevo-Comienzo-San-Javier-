export default function Hero(){
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero-inner container">
        <div className="hero-text">
          <p className="eyebrow">Centro Nuevo Comienzo</p>
          <h1>Un nuevo enfoque para la comunidad</h1>
          <p className="lead">Cursos y talleres que acompañan a las personas en su proceso de crecimiento y reinserción.</p>
          <a className="cta" href="/formativos" aria-label="Conoce los cursos">Conoce los cursos</a>
        </div>
        <div className="hero-image" aria-hidden="true">
          <div className="photo-mask">
            <img src="/imgs/edificio1.jpg" alt="Persona en el centro" />
          </div> 
        </div>
      </div>
    </section>
  )
}
