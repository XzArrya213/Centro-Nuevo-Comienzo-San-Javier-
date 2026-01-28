import Link from 'next/link'

let site = null
try{
  site = require('./data/site.json')
}catch(e){
  site = { name: 'Centro Nuevo Comienzo San Javier', phone: '+52 464 688 1415', email: 'info@centronuevocomienzo.mx', facebook: '#', address: 'Calle del Santuario S/N Col. Rinconada San Javier Salamanca Guanajuato', hours: 'Lunes - Viernes' }
}

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">{site.name}</div>
          <div className="footer-desc">Apoyando a la comunidad local con actividades, cursos y talleres.</div>
        </div>

        <div className="footer-contacts">
          <div><strong>Teléfono</strong></div>
          <div><a href={`tel:${site.phone}`}>{site.phone}</a></div>
          <div style={{marginTop:8}}><strong>Email</strong></div>
          <div><a href={`mailto:${site.email}`}>{site.email}</a></div>
        </div>

        <div className="footer-links">
          <div><strong>Enlaces</strong></div>
          <nav>
            <ul>
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/informacion">Información</Link></li>
              <li><Link href="/cursos">Cursos</Link></li>
            </ul>
          </nav>
        </div>

        <div className="footer-social">
          <div><strong>Síguenos</strong></div>
          <div style={{marginTop:8,display:'flex',gap:10}}>
            {site.facebook && (
              <a href={site.facebook} target="_blank" rel="noreferrer" className="social-btn">f</a>
            )}
          </div>
        </div>
      </div>

      {/* Sección Legal Ajustada */}
      <div className="container footer-legal" style={{ textAlign: 'center', borderTop: '1px solid #eee', paddingTop: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
        </div>
        
        {/* Aquí separamos la dirección y el horario en líneas distintas */}
        <div style={{ fontSize: '0.9em', color: '#666' }}>
          <div>Dirección: Calle del Santuario S/N Col. Rinconada San Javier, Salamanca Guanajuato</div>
          <div style={{ marginTop: '5px' }}>Horarios: Lunes a Viernes de 7:00 AM - 7:00 PM Y Sabado: 9:00 AM - 7:00 PM </div>
        </div>
      </div>
    </footer>
  )
}