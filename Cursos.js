import { useState, useMemo } from 'react';

export default function Cursos() {
  const cursos = [
    {
      title: 'Elaboración de Piñatas',
      desc: 'Taller práctico para aprender el diseño, armado y decoración de piñatas tradicionales y de temporada.',
      category: 'Oficios',
      image: '/imgs/Pinata_portada.jpg', 
      detalles: {
        horario: 'Lunes y Martes de 04:00 pm a 06:00 pm',
        costo: '$50 por clase',
        inicio: '27 de Enero',
        contacto: '464 169 5354'
      }
    },
    {
      title: 'Pintura en Tela y Amigurumis',
      desc: 'Desarrollo de habilidades artísticas mediante la pintura textil y el tejido de figuras a crochet.',
      category: 'Arte',
      image: '/imgs/pintura en tela.jpg',
      detalles: {
        horario: 'Martes y Viernes de 04:00 pm a 06:00 pm',
        costo: 'Consultar en sede',
        contacto: '464 139 4105'
      }
    },
    {
      title: 'Repostería y Pastelería',
      desc: 'Elaboración técnica de pays, panadería y postres fríos con el material necesario incluido.',
      category: 'Oficios',
      image: '/imgs/reposteria.jpg',
      detalles: {
        horario: 'Miércoles de 04:00 pm a 06:00 pm',
        costo: '$70 por clase (incluye material)',
        contacto: '464 109 7403'
      }
    },
    {
      title: 'Belleza y Uñas',
      desc: 'Formación integral en cortes, peinados, colorimetría, maquillaje y aplicación de uñas.',
      category: 'Oficios',
      image: '/imgs/Clases de belleza.jpg',
      detalles: {
        horario: 'Martes y Jueves de 09:00 am a 10:30 am',
        costo: '$40 por clase',
        contacto: 'Sede Rinconada San Javier'
      }
    },
    {
      title: 'Regularización',
      desc: 'Apoyo académico para primaria y secundaria en materias como matemáticas, física y química.',
      category: 'Educación',
      image: '/imgs/regularizacion.jpg',
      detalles: {
        horario: 'Sábados de 09:00 am a 11:00 am',
        costo: '$60 por clase',
        contacto: '464 120 6967'
      }
    },
    {
      title: 'Electricidad Residencial',
      desc: 'Curso técnico sobre fundamentos eléctricos, diagnóstico y práctica de instalaciones para el hogar.',
      category: 'Oficios',
      image: '/imgs/electricidad.jpg',
      detalles: {
        horario: 'Miércoles y Sábado de 10:00 am a 12:00 pm',
        costo: '$30 por clase',
        contacto: '464 184 7905'
      }
    },
    {
      title: 'Barbería',
      desc: 'Taller de formación profesional en cortes de cabello, diseño de barba y visagismo.',
      category: 'Oficios',
      image: '/imgs/barberia2.jpg',
      detalles: {
        horario: 'Martes y Jueves de 03:30 pm a 05:00 pm',
        costo: '$40 por clase',
        contacto: '464 111 3823'
      }
    },

    {
  title: 'Atención Psicológica: Un espacio para la mujer',
  desc: 'Espacio de escucha y apoyo profesional orientado específicamente a las necesidades y bienestar de la mujer.',
  category: 'Salud', // O puedes usar 'Bienestar' según tus categorías actuales
  image: '/imgs/psicologiafemenina.jpg', // Recuerda mover el flyer a public/imgs/ y usar este nombre
  detalles: {
    horario: 'Lunes a Viernes de 09:00 AM a 12:00 PM',
    costo: 'Consultar en sede', 
    especialista: 'Psic. Angelica Montero A.',
    contacto: '464 120 6967'
  }
},

  ];

  const [filter, setFilter] = useState('Todos');
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState(null);

  const categories = useMemo(() => ['Todos', ...Array.from(new Set(cursos.map(c => c.category)))], []);

  const filtered = useMemo(() => {
    return cursos.filter(c => 
      (filter === 'Todos' || c.category === filter) && 
      (c.title.toLowerCase().includes(query.toLowerCase()) || c.desc.toLowerCase().includes(query.toLowerCase()))
    );
  }, [filter, query]);

  return (
    <section id="cursos" className="section cursos" aria-labelledby="cursos-title">
      <div className="container">
        <h2 id="cursos-title">Nuestros Cursos</h2>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 25, flexWrap: 'wrap' }}>
          <div role="tablist" aria-label="Filtrar cursos">
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setFilter(cat)} 
                className="toggle-btn" 
                style={{ marginRight: 8, background: filter === cat ? '#eee' : 'transparent', fontWeight: filter === cat ? 'bold' : 'normal' }}
              >
                {cat}
              </button>
            ))}
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <input 
              id="search" 
              placeholder="Buscar curso..." 
              value={query} 
              onChange={e => setQuery(e.target.value)} 
              style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #ddd' }} 
            />
          </div>
        </div>

        <div className="cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {filtered.map((c, i) => (
            <article key={i} className={`card ${expanded === i ? 'expanded' : ''}`} 
              style={{ 
                border: '1px solid #eee', 
                borderRadius: '12px', 
                overflow: 'hidden', // Recorta la imagen en las esquinas redondeadas
                background: '#fff',
                padding: 0 // IMPORTANTE: Sin padding para que la imagen toque los bordes
              }}>
              
              {/* Imagen Superior sin márgenes */}
              <div style={{ width: '100%', height: '200px', margin: 0 }}>
                <img 
                  src={c.image} 
                  alt={c.title} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    display: 'block' // Elimina el espacio vacío inferior de la imagen
                  }} 
                />
              </div>

              {/* Contenedor de texto con padding para legibilidad */}
              <div style={{ padding: '20px' }}>
                <h3 style={{ marginTop: 0 }}>{c.title}</h3>
                <p style={{ fontSize: '0.9em', color: '#555' }}>{c.desc}</p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
                  <span style={{ fontSize: '0.8em', color: '#888', textTransform: 'uppercase' }}>{c.category}</span>
                  <button 
                    className="toggle-btn" 
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    style={{ cursor: 'pointer', background: 'none', border: '1px solid #ccc', borderRadius: '5px', padding: '5px 10px' }}
                  >
                    {expanded === i ? 'Cerrar' : 'Ver más'}
                  </button>
                </div>

                {expanded === i && (
                  <div style={{ marginTop: '15px', padding: '15px', background: '#f9f9f9', borderRadius: '8px', fontSize: '0.85em' }}>
                    <p><strong>Horario:</strong> {c.detalles.horario}</p>
                    <p><strong>Costo:</strong> {c.detalles.costo}</p>
                    {c.detalles.inicio && <p><strong>Inicia:</strong> {c.detalles.inicio}</p>}
                    <p><strong>Contacto:</strong> {c.detalles.contacto}</p>
                    <div style={{ marginTop: 10 }}>
                      <a href="/contacto" className="small-cta" style={{ background: '#007bff', color: '#fff', padding: '8px 12px', borderRadius: '5px', textDecoration: 'none', display: 'inline-block', textAlign: 'center', width: '100%' }}>Inscribirme</a>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
        {filtered.length === 0 && <p>No se encontraron cursos.</p>}
      </div>
    </section>
  );
}