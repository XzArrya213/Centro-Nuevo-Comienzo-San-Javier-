export default function Feature(){
  return (
    <section id="feature" className="section feature">
      <div className="container" style={{display:'flex',gap:'40px',alignItems:'center',flexWrap:'wrap'}}>
        <div style={{flex:'1 1 380px',minWidth:280}}>
          <img
            src="https://scontent.fqro5-1.fna.fbcdn.net/v/t39.30808-6/469814309_430818183433918_3593818605592522646_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=vzYoc2NP0-gQ7kNvwEcf-UP&_nc_oc=AdncoRUAoj_qUQRKB-nXiz-3SlOahT4ALoU2at5HzF7tmWndqZPWHcNyO6UzyxlEBXA&_nc_zt=23&_nc_ht=scontent.fqro5-1.fna&_nc_gid=X0U5JOkn4-JGMTBiC_JJSw&oh=00_Afqg_wC46PuJ3R2t-3EauQ9i_mMT0M8DchrYBPytaDrixA&oe=696B07E0"
            alt="Centro Nuevo Comienzo"
            style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:8}}
          />
        </div>

        <div style={{flex:'1 1 420px',minWidth:300}}>
          <p style={{color:'#2b7a7f',fontWeight:700,letterSpacing:1}}>Un espacio para la comunidad</p>
          <h2 style={{marginTop:6,marginBottom:12,fontSize:34,color:'#0b4450'}}>Donde la convivencia y el desarrollo comienzan de nuevo</h2>
          <p style={{color:'#51666a',lineHeight:1.6}}>El Centro Nuevo Comienzo San Xavier es un espacio donde las personas se reúnen, se apoyan, conviven y encuentran oportunidades para crecer, fortaleciendo los lazos familiares y comunitarios en un entorno de respeto e inclusión.</p>

          <div style={{display:'flex',gap:16,marginTop:18,alignItems:'center'}}>
            <img src="https://scontent.fqro5-1.fna.fbcdn.net/v/t39.30808-6/520288758_598673633315038_4946826171337435351_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=1rI2cuWueOAQ7kNvwHVNcy8&_nc_oc=Adnha1P1CyD-tIQhXeyHX37IjW5QXtYzq-R8ADIjZ2PexvAJyADNNU3zOmChOJ7DFto&_nc_zt=23&_nc_ht=scontent.fqro5-1.fna&_nc_gid=rGhFBe9sgr5NWw5ot2rsvQ&oh=00_AfrX_mI6DHswbZJiChz_yNAdnHrx4yhJloXPv-tLcRwJjw&oe=696C45B4" alt="mini" style={{width:120,height:80,objectFit:'cover',borderRadius:6}} />
            <ul style={{listStyle:'none',padding:0,margin:0,color:'#51666a'}}>
              <li style={{padding:'8px 0',borderBottom:'1px solid #e6eef0'}}>Un espacio de convivencia y respeto</li>
              <li style={{padding:'8px 0',borderBottom:'1px solid #e6eef0'}}>Impulso al desarrollo personal y social</li>
              <li style={{padding:'8px 0'}}>Acompañamiento cercano a la comunidad.</li>
            </ul>
          </div>

          <div style={{marginTop:20}}>
            <a href="/informacion" style={{display:'inline-block',background:'#0fb1b6',color:'#fff',padding:'12px 20px',borderRadius:30,textDecoration:'none'}}>Leer mas</a>
          </div>
        </div>
      </div>
    </section>
  )
}
