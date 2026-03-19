import { useState } from 'react'
// Importamos los iconos de alta calidad de Lucide
import { Phone, MessageCircle, Facebook } from 'lucide-react'

export default function Contacto() {
  const lat = 20.5682107;
  const lng = -101.2154208;
  const placeName = "Centro GTO CONTIGO Sí San Javier";
  
  const fallbackUrl = `https://maps.google.com/maps?q=${encodeURIComponent(placeName)}&t=&z=17&ie=UTF8&iwloc=&output=embed`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  const company = {
    phone: '+52 464 688 1415',
    facebook: 'https://www.facebook.com/profile.php?id=100095172199723',
    whatsapp: '+52 464 139 1149'
  };

  // Estilo para los contenedores circulares de los iconos (Alta Calidad)
  const iconBoxStyle = (color) => ({
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'grid',
    placeItems: 'center',
    background: `${color}15`, // Fondo muy suave (15% opacidad) del color de marca
    color: color,
    marginBottom: '16px'
  });

  return (
    <section id="contacto" className="section contacto" style={{ padding: '40px 0', background: '#fcfdfe' }}>
      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ color: '#0b4450', marginBottom: '32px' }}>Contacto y Ubicación</h2>

        {/* Fila superior: Las tres tarjetas con Iconos Profesionales */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginBottom: 28 }}>
          
          {/* Tarjeta 1: Llamar */}
          <a href={`tel:${company.phone}`} style={cardStyle} className="contact-card-hover">
            <div style={iconBoxStyle('#0fb1b6')}>
              <Phone size={24} strokeWidth={2.5} />
            </div>
            <div style={labelStyle}>Llamar para mayor Información</div>
            <div style={valueStyle}>{company.phone}</div>
          </a>

          {/* Tarjeta 2: WhatsApp */}
          <a href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" style={cardStyle} className="contact-card-hover">
            <div style={iconBoxStyle('#25D366')}>
              <MessageCircle size={24} strokeWidth={2.5} />
            </div>
            <div style={labelStyle}>Contáctanos por WhatsApp</div>
            <div style={valueStyle}>{company.whatsapp}</div>
          </a>

          {/* Tarjeta 3: Facebook (NUEVO ESTILO ALTA CALIDAD) */}
          <a href={company.facebook} target="_blank" rel="noreferrer" style={cardStyle} className="contact-card-hover">
            <div style={iconBoxStyle('#1877f2')}> {/* Color oficial de Facebook */}
              <Facebook size={24} strokeWidth={2.5} />
            </div>
            <div style={labelStyle}>Visitar nuestra Página</div>
            <div style={valueStyle}>Facebook /CentroNuevoComienzo</div>
          </a>
        </div>

        {/* Sección del Mapa (Se mantiene igual a tu diseño original) */}
        <div style={{ marginTop: 28 }}>
          <div style={{ overflow: 'hidden', borderRadius: 12, background: '#fff', boxShadow: '0 20px 50px rgba(6,22,22,0.08)', lineHeight: 0 }}>
            <iframe
              title="mapa-ubicacion"
              src={fallbackUrl}
              style={{ border: 0, width: '100%', height: 480, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <p style={{ marginTop: 15, fontSize: '14px', color: '#51666a' }}>
            {placeName}. {' '}
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" style={{ color: '#0fb1b6', fontWeight: 600, textDecoration: 'underline' }}>
              Abrir en Google Maps
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

// Estilos de soporte para las tarjetas
const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: '24px',
  borderRadius: '16px',
  background: '#fff',
  boxShadow: '0 10px 25px rgba(0,0,0,0.03)',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  border: '1px solid #f1f5f9'
};

const labelStyle = { fontSize: '13px', color: '#64748b', fontWeight: 600, marginBottom: '6px' };
const valueStyle = { fontSize: '15px', color: '#0b4450', fontWeight: 700 };