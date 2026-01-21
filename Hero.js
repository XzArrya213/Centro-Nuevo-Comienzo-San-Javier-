export default function Hero(){
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero-inner container">
        <div className="hero-text">
          <p className="eyebrow">Centro Nuevo Comienzo</p>
          <h1>Un nuevo enfoque para la comunidad</h1>
          <p className="lead">Cursos y talleres que acompañan a las personas en su proceso de crecimiento y reinserción.</p>
          <a className="cta" href="/cursos" aria-label="Conoce los cursos">Conoce los cursos</a>
        </div>
        <div className="hero-image" aria-hidden="true">
          <div className="photo-mask">
            <img src="https://scontent.fqro5-1.fna.fbcdn.net/v/t39.30808-6/469814309_430818183433918_3593818605592522646_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=vzYoc2NP0-gQ7kNvwEcf-UP&_nc_oc=AdncoRUAoj_qUQRKB-nXiz-3SlOahT4ALoU2at5HzF7tmWndqZPWHcNyO6UzyxlEBXA&_nc_zt=23&_nc_ht=scontent.fqro5-1.fna&_nc_gid=X0U5JOkn4-JGMTBiC_JJSw&oh=00_Afqg_wC46PuJ3R2t-3EauQ9i_mMT0M8DchrYBPytaDrixA&oe=696B07E0" alt="Persona en el centro" />
          </div> 
        </div>
      </div>
    </section>
  )
}
