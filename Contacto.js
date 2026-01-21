import {useState} from 'react'

export default function Contacto(){
  const [values,setValues] = useState({name:'',email:'',phone:'',facebook:'',message:''})
  const [status,setStatus] = useState({loading:false,ok:null,error:null})

  function onChange(e){setValues({...values,[e.target.name]:e.target.value})}

  async function onSubmit(e){
    e.preventDefault()
    setStatus({loading:true,ok:null,error:null})

    try{
      const res = await fetch('/api/contact',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(values)
      })
      const data = await res.json()
      if(res.ok){
        setStatus({loading:false,ok:'Mensaje enviado correctamente.',error:null})
        setValues({name:'',email:'',phone:'',facebook:'',message:''})
      } else {
        setStatus({loading:false,ok:null,error:data?.error || 'Error al enviar'})
      }
    }catch(err){
      setStatus({loading:false,ok:null,error:err.message || 'Error de red'})
    }
  }

  let company = null
  try {
    // load data at runtime from data/site.json
    // require is ok here because this runs on client build-time in Next
    // we'll use dynamic import to avoid SSR issues
    company = require('./data/site.json')
  } catch (e) {
    company = {
      phone: '+52 1 555 123 4567',
      email: 'info@centronuevocomienzo.mx',
      facebook: 'https://facebook.com/centronuevocomienzo',
      whatsapp: '+525551234567'
    }
  }

  return (
    <section id="contacto" className="section contacto">
      <div className="container">
        <h2>Contacto</h2>

        <div style={{display:'grid',gridTemplateColumns:'1fr 320px',gap:20,alignItems:'start'}}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:18}}>
            <a href={`tel:${company.phone}`} style={{display:'block',padding:20,borderRadius:12,background:'#fff',boxShadow:'0 12px 30px rgba(6,22,22,0.06)',textDecoration:'none',color:'inherit'}}>
              <div style={{fontSize:14,color:'#0b4450',fontWeight:700}}>Llamar para mayor Información</div>
              <div style={{marginTop:12,fontSize:16,color:'#0b4450'}}>{company.phone}</div>
            </a>

            <a href={`mailto:${company.email}`} style={{display:'block',padding:20,borderRadius:12,background:'#fff',boxShadow:'0 12px 30px rgba(6,22,22,0.06)',textDecoration:'none',color:'inherit'}}>
              <div style={{fontSize:14,color:'#0b4450',fontWeight:700}}>Mandanos un mensaje</div>
              <div style={{marginTop:12,fontSize:16,color:'#0b4450'}}>{company.email}</div>
            </a>

            <a href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g,'')}`} target="_blank" rel="noreferrer" style={{display:'block',padding:20,borderRadius:12,background:'#fff',boxShadow:'0 12px 30px rgba(6,22,22,0.06)',textDecoration:'none',color:'inherit'}}>
              <div style={{fontSize:14,color:'#0b4450',fontWeight:700}}>Contáctanos por WhatsApp</div>
              <div style={{marginTop:12,fontSize:16,color:'#0b4450'}}>{company.whatsapp}</div>
            </a>
          </div>

          <aside style={{padding:18,background:'#fff',borderRadius:12,boxShadow:'0 12px 30px rgba(6,22,22,0.06)'}}>
            <div style={{display:'flex',alignItems:'center',gap:12}}>
              <div style={{width:44,height:44,borderRadius:8,background:'#ef6b5a',display:'grid',placeItems:'center',color:'#fff'}}>✉</div>
              <div>
                <div style={{fontSize:13,color:'#234'}}><strong>Email</strong></div>
                <div style={{color:'#51666a'}}>{company.email}</div>
              </div>
            </div>

            <hr style={{border:'none',borderTop:'1px solid #f0f4f4',margin:'16px 0'}} />

            <div style={{display:'flex',flexDirection:'column',gap:12}}>
              <a href={company.facebook} target="_blank" rel="noreferrer" style={{display:'flex',alignItems:'center',gap:12,textDecoration:'none',color:'#234'}}>
                <div style={{width:34,height:34,borderRadius:8,background:'#1877f2',display:'grid',placeItems:'center',color:'#fff'}}>f</div>
                <div>Pagina de Facebook</div>
              </a>
            </div>
          </aside>
        </div>

        {/* Form below */}
        <div style={{marginTop:28}}>
          <div className="contact-grid" style={{display:'grid',gridTemplateColumns:'1fr',gap:20}}>
            <div className="contact-form-card" style={{padding:20,borderRadius:12,background:'#fff',boxShadow:'0 20px 50px rgba(6,22,22,0.08)'}}>
              <form onSubmit={onSubmit} style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
                <label style={{display:'block'}}>
                  Nombre
                  <input name="name" value={values.name} onChange={onChange} required style={{width:'100%'}} />
                </label>

                <label style={{display:'block'}}>
                  Teléfono
                  <input name="phone" type="tel" value={values.phone} onChange={onChange} placeholder="Ej: +52 1 555 123 4567" style={{width:'100%'}} />
                </label>

                <label style={{display:'block'}}>
                  Email
                  <input name="email" type="email" value={values.email} onChange={onChange} required style={{width:'100%'}} />
                </label>

                <label style={{display:'block'}}>
                  Facebook
                  <input name="facebook" value={values.facebook} onChange={onChange} placeholder="facebook.com/tuPerfil" style={{width:'100%'}} />
                </label>

                <label style={{display:'block',gridColumn:'1 / -1'}}>
                  Mensaje
                  <textarea name="message" value={values.message} onChange={onChange} required style={{width:'100%',minHeight:140,padding:12,borderRadius:8,border:'1px solid rgba(6,22,22,0.06)'}} />
                </label>

                <div style={{gridColumn:'1 / -1',display:'flex',gap:12,alignItems:'center',justifyContent:'space-between'}}>
                  <div>
                    <button type="submit" disabled={status.loading} style={{padding:'10px 18px',background:'#0fb1b6',color:'#fff',border:'none',borderRadius:8}}>
                      {status.loading ? 'Enviando...' : 'Enviar mensaje'}
                    </button>
                  </div>
                  <div style={{minHeight:22}}>
                    {status.ok && <span style={{color:'green'}}>{status.ok}</span>}
                    {status.error && <span style={{color:'red'}}>{status.error}</span>}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
