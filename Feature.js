import React from 'react';

export default function Feature() {
  // --- ESTILOS DEL DISEÑO ALTERNADO ---

  const listContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  };

  // Fila normal (Ícono a la izquierda)
  const itemRowStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '30px',
    paddingBottom: '2rem',
    marginBottom: '2rem',
    borderBottom: '1px solid #e5e7eb' // Línea separadora
  };

  // Fila invertida (Ícono a la derecha)
  const itemRowReverseStyle = {
    ...itemRowStyle,
    flexDirection: 'row-reverse'
  };
  
  // El último elemento no lleva línea separadora
  const lastItemStyle = {
    ...itemRowStyle,
    paddingBottom: 0,
    marginBottom: '2rem',
    borderBottom: 'none'
  };

  const iconContainerStyle = {
    width: '90px',  // Íconos mucho más grandes
    height: '90px',
    flexShrink: 0,
    borderRadius: '50%',
    backgroundColor: '#eef2ff', // Fondo azul muy claro
    color: '#6366f1', // Azul índigo del ícono
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const textContainerStyle = {
    flex: 1
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '0.5rem',
    marginTop: 0
  };

  const descStyle = {
    color: '#4b5563', 
    lineHeight: '1.6',
    marginBottom: '0.75rem',
    marginTop: 0
  };

  const linkStyle = {
    color: '#6366f1',
    textDecoration: 'none',
    fontWeight: '500',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px' 
  };

  const buttonStyle = {
    backgroundColor: '#6366f1',
    color: '#fff',
    border: 'none',
    padding: '12px 32px',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block'
  };

  return (
    <section id="feature" className="section feature">
      <div className="container" style={{ display: 'flex', gap: '50px', alignItems: 'center', flexWrap: 'wrap', padding: '40px 0' }}>
        
        {/* COLUMNA IZQUIERDA: Imagen principal (Conservada) */}
        <div style={{ flex: '1 1 400px', minWidth: 280 }}>
       
          <img
            src="/imgs/personaldelcnc.jpg"
            alt="Centro Nuevo Comienzo"
            style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: 8 }}
          />
        </div>

        {/* COLUMNA DERECHA: Lista alternada */}
        <div style={{ flex: '1 1 450px', minWidth: 300 }}>
          <div style={listContainerStyle}>
            
            {/* Bloque 1: Ícono a la izquierda */}
            <div style={itemRowStyle}>
              <div style={iconContainerStyle}>
                {/* SVG escalado a 40x40 para coincidir con el círculo grande */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <div style={textContainerStyle}>
                <h3 style={titleStyle}>Convivencia y respeto</h3>
                <p style={descStyle}>Un espacio donde las personas se reúnen, se apoyan y conviven, encontrando nuevas oportunidades en un entorno de total inclusión.</p>
              </div>
            </div>

            {/* Bloque 2: Ícono a la derecha */}
            <div style={itemRowReverseStyle}>
              <div style={iconContainerStyle}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </div>
              <div style={textContainerStyle}>
                <h3 style={titleStyle}>Desarrollo personal y social</h3>
                <p style={descStyle}>Fortalecemos los lazos familiares y comunitarios brindando y compartiendo herramientas para el crecimiento integral de todos los asistentes.</p>
              </div>
            </div>

            {/* Bloque 3: Ícono a la izquierda */}
            <div style={lastItemStyle}>
              <div style={iconContainerStyle}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div style={textContainerStyle}>
                <h3 style={titleStyle}>Acompañamiento cercano</h3>
                <p style={descStyle}>Brindamos apoyo y orientación continua para asegurar que cada paso en la comunidad se dé con total confianza y seguridad.</p>
              </div>
            </div>

            {/* Botón inferior centrado */}
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      
              <a className="cta" href="/informacion" aria-label={buttonStyle}>Ver toda la información</a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}