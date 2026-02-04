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
        <p className="eyebrow" style={{textAlign:'center',color:'#2b7a7f',fontWeight:700,letterSpacing:1,marginBottom:6}}>Espacios que transforman</p>
        <h2 style={{textAlign:'center',fontFamily: 'Patrick Hand, cursive'}}>Donde comienzan nuevas oportunidades</h2>

        <div className="cards" style={{marginTop:22}}>
          <article className="card">
            <div className="post-image">
              <img src="https://scontent.fbjx1-1.fna.fbcdn.net/v/t39.30808-6/536282806_617707288078448_8121908918514516844_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=xmZYBKNwJLAQ7kNvwFWIVKh&_nc_oc=Adnm_wNIHqpSC7XjME-A8zHqfnoEJx6mvLKEgG9WYoxY2bgAGUM9_cVnVZwutelWCDg08n_Xyl2I0I72o5dfPaRU&_nc_zt=23&_nc_ht=scontent.fbjx1-1.fna&_nc_gid=Qo4kYACYDd1v6u3fKVUXWA&oh=00_AfsHeXog0eRNQZx3kwviF5Y_ey1EuQ3cpYnVfI8IHeUkKw&oe=69895467" alt="Lápices" />
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
              <img src="https://scontent.fbjx1-1.fna.fbcdn.net/v/t39.30808-6/476345560_469853066197205_6262917055972569064_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Ec-V0njrMoAQ7kNvwFc5kNB&_nc_oc=AdnMTUzmDP7hRueWyL2sWc0Vqq3ptlxfJzwL2PWyZvXZRq70qdBuqeT2409wAdTIEcgShETRp0Tzxhh2UwwdCa1X&_nc_zt=23&_nc_ht=scontent.fbjx1-1.fna&_nc_gid=m6_H5Lem2rmI_KHyqAioBg&oh=00_AfvtHuJxHPuqRGUn9JXI77-R_Q9rPnYuO6_AKe9AzFOB0w&oe=69896508" alt="Niños estudiando" />
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
              <img src="https://scontent.fbjx1-3.fna.fbcdn.net/v/t39.30808-6/477419250_472562235926288_1591892310069505856_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=EmhXiw0FBpMQ7kNvwFgphXZ&_nc_oc=AdnLaBPfEpDfyKynRN2M8LpfpO90ZyQpQJnMaoCogMazAZf71LRB8FW_3FwfJ_GSLNmJ1QvlRQDHiaoFp82HgeJg&_nc_zt=23&_nc_ht=scontent.fbjx1-3.fna&_nc_gid=ZFHCe0V9QlqO5TP-Ze3Rjw&oh=00_AftFIB-1e_00nh_VBnrb3xUNzr-KgeqR8Zyv7XreVWDtjQ&oe=698971AF" alt="Niña escribiendo" />
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
