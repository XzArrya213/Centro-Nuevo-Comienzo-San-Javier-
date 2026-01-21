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

  return (
    <section ref={sectionRef} className="section blog-section">
      <div className="container">
        <p className="eyebrow" style={{textAlign:'center',color:'var(--teal)',marginBottom:6}}>Espacios que transforman</p>
        <h2 style={{textAlign:'center',fontFamily: 'Patrick Hand, cursive'}}>Donde comienzan nuevas oportunidades</h2>

        <div className="cards" style={{marginTop:22}}>
          <article className="card">
            <div className="post-image">
              <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=1c6b0f894b2b2a7d3b1b7d3e6c1f1a8e" alt="Lápices" />
            </div>
            <h3 style={{fontFamily: 'Patrick Hand, cursive'}}>El conocimiento como base del cambio</h3>
            <div className="meta" style={{color:'var(--muted)',fontSize:14,marginTop:8}}>
            </div>
            <p style={{marginTop:12,color:'var(--muted)'}}>El acceso a la información y al aprendizaje es una herramienta clave para transformar realidades. En el Centro Nuevo Comienzo San Xavier se promueven espacios donde el conocimiento impulsa el crecimiento personal y comunitario.</p>
            <div style={{textAlign:'center',marginTop:14}}>
            </div>
          </article>

          <article className="card">
            <div className="post-image">
              <img src="https://scontent.fbjx1-1.fna.fbcdn.net/v/t39.30808-6/476345560_469853066197205_6262917055972569064_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=H5svddZxQUEQ7kNvwHFBuEU&_nc_oc=AdlT4Gis4iliArxEPwhxM4ZT5JCnrRLH8SQR9LIgk3023_XRNkuEiHn8CX7zCtay09ho723pbD2ozpVp1Pq6Oh7d&_nc_zt=23&_nc_ht=scontent.fbjx1-1.fna&_nc_gid=ybKaW-MaJe1WHfrZYXFLIw&oh=00_AfrFX9WxlXKTxEE89jF0VodznCiM9_HP2A1RI19jNDolgA&oe=69756648" alt="Niños estudiando" />
            </div>
            <h3 style={{fontFamily: 'Patrick Hand, cursive'}}>Aprender juntos fortalece la comunidad</h3>
            <div className="meta" style={{color:'var(--muted)',fontSize:14,marginTop:8}}>
            </div>
            <p style={{marginTop:12,color:'var(--muted)'}}>A través de actividades formativas y espacios de diálogo, el centro fomenta el desarrollo de habilidades, la participación activa y el trabajo colectivo como base para una comunidad más unida.</p>
            <div style={{textAlign:'center',marginTop:14}}>
            </div>
          </article>

          <article className="card">
            <div className="post-image">
              <img src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3b1e4f6f3d2c1a8e6c4b9b1f2e8c7d6f" alt="Niña escribiendo" />
            </div>
            <h3 style={{fontFamily: 'Patrick Hand, cursive'}}>Apoyo y Acompañamiento</h3>
            <div className="meta" style={{color:'var(--muted)',fontSize:14,marginTop:8}}>
            </div>
            <p style={{marginTop:12,color:'var(--muted)'}}>El acompañamiento cercano y empático es parte esencial del centro. Cada persona encuentra un espacio de escucha, orientación y apoyo para avanzar con confianza hacia un nuevo comienzo.</p>
            <div style={{textAlign:'center',marginTop:14}}>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
