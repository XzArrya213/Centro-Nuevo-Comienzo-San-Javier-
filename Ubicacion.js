export default function Ubicacion(){
  // Coordenadas reales obtenidas del enlace corto compartido
  const lat = 20.5682107;
  const lng = -101.2154208;
  const placeName = "Centro GTO CONTIGO Sí San Javier";
  const mapsLink = `https://www.google.com/maps?q=${lat},${lng}`;
  const embedSrc = `https://www.google.com/maps?q=${lat},${lng}&z=17&output=embed`;

  return (
    <section id="ubicacion" className="section ubicacion">
      <div className="container">
        <h2>Ubicación</h2>
        <div className="map-wrap">
          <iframe
            title="mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14941.527817699829!2d-101.21837875217268!3d20.572453740880338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c85a45f1fc121%3A0xfd3b2522437ca378!2sCentro%20GTO%20CONTIGO%20S%C3%AD%20San%20Javier!5e0!3m2!1ses-419!2smx!4v1768263666999!5m2!1ses-419!2smx"
            style={{ border: 0, width: '100%', height: 480 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p>
            {placeName}.{' '}
            <a href={mapsLink} target="_blank" rel="noopener noreferrer">
              Abrir en Google Maps
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
