import React, { useEffect, useRef } from 'react'

export default function LatestBlog(){
  const sectionRef = useRef(null)

  useEffect(()=>{
    const el = sectionRef.current
    if(!el) return
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          el.classList.add('visible')
          obs.unobserve(el)
        }
      })
    },{threshold:0.12})
    obs.observe(el)
    return ()=>obs.disconnect()
  },[])

  // --- ESTILOS DEL NUEVO DISEÑO ---

  // Contenedor principal usando Flexbox para controlar el layout
  const layoutStyle = {
    display: 'flex',
    flexWrap: 'wrap', // Permite que las tarjetas bajen a la siguiente línea
    gap: '20px',
    marginTop: '40px'
  }

  // Estilo base para todas las tarjetas
  const baseCardStyle = {
    backgroundColor: '#f4f5f7', // Gris muy tenue
    padding: '4rem 2rem', // Mucho espacio interno para dar ese look limpio
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: '4px',
  }

  // La tarjeta superior ocupa el 100% del ancho
  const topCardStyle = {
    ...baseCardStyle,
    flex: '1 1 100%',
    padding: '6rem 2rem', // Aún más espacio para la tarjeta principal
  }

  // Las tarjetas inferiores ocupan casi el 50% cada una
  // El minWidth asegura que en celulares se pongan una debajo de otra
  const bottomCardStyle = {
    ...baseCardStyle,
    flex: '1 1 calc(50% - 20px)',
    minWidth: '280px', 
  }

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '0.75rem',
    // fontFamily: 'Patrick Hand, cursive' // Descomenta si deseas tu tipografía
  }

  const descStyle = {
    color: '#6b7280',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    maxWidth: '600px', // Evita que el texto sea muy largo en la tarjeta grande
  }

  const linkStyle = {
    color: '#6366f1',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '1rem'
  }

  return (
    <section ref={sectionRef} className="section blog-section">
      <div className="container">
        <p className="eyebrow" style={{textAlign:'center',color:'#2b7a7f',fontWeight:700,letterSpacing:1,marginBottom:6}}>Espacios que transforman</p>
        <h2 style={{textAlign:'center',fontFamily: 'Patrick Hand, cursive'}}>Donde comienzan nuevas oportunidades</h2>

        <div style={layoutStyle}>
          
          {/* TARJETA SUPERIOR (Ancho completo) */}
          <article style={topCardStyle}>
            <h3 style={titleStyle}>El conocimiento como base del cambio</h3>
            <p style={descStyle}>El acceso a la información y al aprendizaje es una herramienta clave para transformar realidades. En el Centro Nuevo Comienzo San Xavier se promueven espacios donde el conocimiento impulsa el crecimiento personal y comunitario.</p>
          </article>

          {/* TARJETA INFERIOR 1 (Mitad de ancho) */}
          <article style={bottomCardStyle}>
            <h3 style={titleStyle}>Aprender juntos</h3>
            <p style={descStyle}>A través de actividades formativas y espacios de diálogo, el centro fomenta el desarrollo de habilidades y la participación activa.</p>
          </article>

          {/* TARJETA INFERIOR 2 (Mitad de ancho) */}
          <article style={bottomCardStyle}>
            <h3 style={titleStyle}>Apoyo y Acompañamiento</h3>
            <p style={descStyle}>El acompañamiento cercano es parte esencial. Cada persona encuentra un espacio de escucha para avanzar con confianza.</p>
          </article>

        </div>
      </div>
    </section>
  )
}