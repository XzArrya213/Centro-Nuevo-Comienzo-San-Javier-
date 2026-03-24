import { useState, useMemo } from 'react';

export default function Capacitacion() {
  const cursos = [
    {
      title: 'Alimentos',
      desc: 'Aprende a seleccionar ingredientes y preparar platillos variados, nutritivos y económicos para tu hogar o negocio.',
      category: 'Gastronomia',
      image: '/imgs/taller_alimentos.jpg', 
      detalles: {
        horario: 'Sabado de 09:00 AM a 11:00 AM',
        costo: '$100.00 por clase',
      }
    },
    {
      title: 'Corte y Confección',
      desc: 'Diseña, corta y confecciona tus propias prendas a medida aprendiendo el uso profesional de la máquina de coser.',
      category: 'Oficios',
      image: '/imgs/corteyconfeccion.jpg', 
      detalles: {
        horario: 'Miercoles y Viernes de 09:00 AM a 11:00 PM',
        costo: '$50.00 por clase',
      }
    },
    {
      title: 'Pintura en Tela y Amigurumis',
      desc: 'Desarrollo de habilidades artísticas mediante la pintura textil y el tejido de figuras a crochet.',
      category: 'Arte',
      image: '/imgs/pintura en tela.jpg',
      detalles: {
        horario: 'Martes y Viernes de 04:00 PM a 06:00 PM',
        costo: '$35.00 por clase',
      }
    },
    {
      title: 'Electricidad Residencial',
      desc: 'Curso técnico sobre fundamentos eléctricos, diagnóstico y práctica de instalaciones para el hogar.',
      category: 'Oficios',
      image: '/imgs/electricidad.jpg',
      detalles: {
        horario: 'Miércoles y Sábado de 10:00 AM a 12:00 PM',
        costo: '$30.00 por clase',
      }
    },
    {
      title: 'Repostería y Pastelería',
      desc: 'Elaboración técnica de pays, panadería y postres fríos con el material necesario incluido.',
      category: 'Gastronomia',
      image: '/imgs/reposteria.jpg',
      detalles: {
        horario: 'Miércoles de 04:00 PM a 06:00 PM',
        costo: '$70.00 por clase (Material Incluido)',
      }
    },
    {
      title: 'Globoflexia',
      desc: 'Descubre el arte de crear figuras creativas y decoraciones impresionantes utilizando globos para cualquier ocasión.',
      category: 'Oficios',
      image: '/imgs/globoflexia.jpg',
      detalles: {
        horario: 'Viernes de 04:00 PM a 05:00 PM',
        costo: '$50.00 por clase',
      }
    },
    {
      title: 'Decoracion de Eventos',
      desc: 'Aprende a diseñar, planear y montar ambientaciones espectaculares para fiestas, bodas y celebraciones especiales.',
      category: 'Oficios',
      image: '/imgs/decoracion_eventos.jpg',
      detalles: {
        horario: 'Miércoles de 04:00 PM a 06:00 PM',
        costo: '$50.00 por clase',
      }
    },
    {
      title: 'Barbería',
      desc: 'Taller de formación profesional en cortes de cabello, diseño de barba y visagismo.',
      category: 'Oficios',
      image: '/imgs/barberia2.jpg',
      detalles: {
        horario: 'Viernes de 06:00 PM a 07:30 PM / Martes y Jueves de 03:30 PM a 05:00 PM',
        costo: '$40 por clase',
      }
    },
    {
      title: 'Belleza y Uñas',
      desc: 'Formación integral en cortes, peinados, colorimetría, maquillaje y aplicación de uñas.',
      category: 'Oficios',
      image: '/imgs/Clases de belleza.jpg',
      detalles: {
        horario: 'Martes y Jueves de 09:00 AM a 10:30 AM',
        costo: '$40.00 por clase',
      }
    },
    {
      title: 'Aplicación de Uñas',
      desc: 'Aprende aplicación de uñas acrílicas y de gel, técnicas de limado y diseño profesional para resaltar la belleza de las manos.',
      category: 'Oficios',
      image: '/imgs/aplicaciondeuñas.jpg', 
      detalles: {
        horario: 'Lunes de 02:00 PM a 04:00 Pm y Sabado de 10:00 AM a 12:00 PM',
        costo: '$80.00 por clase',
      }
    },
    {
      title: 'Elaboración de Piñatas',
      desc: 'Taller práctico para aprender el diseño, armado y decoración de piñatas tradicionales y de temporada.',
      category: 'Oficios',
      image: '/imgs/Pinata_portada.jpg', 
      detalles: {
        horario: 'Lunes y Martes de 04:00 pm a 06:00 pm',
        costo: '$50 por clase',
      }
    },
      {
      title: 'Pintura para figuras de yeso y cerámica',
      desc: 'Decoración y personalización de piezas,es necesario que cada asistente se presente con un trapito, un vaso y un pincel plano de 1 cm de ancho.',
      category: 'Arte',
      image: '/imgs/pinturaceramica.jpg', 
      detalles: {
        horario: 'Lunes y Miercoles de 05:00 PM a 06:00 PM',
        costo: '$50 por clase',
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
    <section id="capacitacion" className="section capacitacion" aria-labelledby="capacitacion-title">
      <div className="container">
        <h2 id="capacitacion-title">Nuestras Capacitaciones</h2>

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

        <div className="cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', alignItems: 'start' }}>
          {filtered.map((c, i) => {
            const isExpanded = expanded === i;
            const closedHeight = 440;
            return (
            <div key={i}> 
              <article className='card' 
                style={{ 
                  border: '1px solid #eee', 
                  borderRadius: '12px', 
                  overflow: 'hidden', 
                  background: '#fff',
                  padding: 0, 
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: `${closedHeight}px`,
                  height: isExpanded ? 'auto' : `${closedHeight}px`,
                  transition: 'height 220ms ease-in-out',
                  alignSelf: 'flex-start'
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
                      display: 'block'
                    }} 
                  />
                </div>

                {/* Contenedor de texto con padding para legibilidad */}
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
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

                  <div
                    style={{
                      marginTop: '15px',
                      padding: isExpanded ? '15px' : '0px 15px',
                      background: '#f9f9f9',
                      borderRadius: '8px',
                      fontSize: '0.85em',
                      maxHeight: isExpanded ? '220px' : '0px',
                      opacity: isExpanded ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 220ms ease, opacity 160ms ease',
                    }}
                    aria-hidden={!isExpanded}
                  >
                    <p><strong>Horario:</strong> {c.detalles.horario}</p>
                    <p><strong>Costo:</strong> {c.detalles.costo}</p>
                    {c.detalles.inicio && <p><strong>Inicia:</strong> {c.detalles.inicio}</p>}
     
                    <div style={{ marginTop: 10 }}>
                      <a href="/contacto" className="small-cta" style={{ background: '#007bff', color: '#fff', padding: '8px 12px', borderRadius: '5px', textDecoration: 'none', display: 'inline-block', textAlign: 'center', width: '100%' }}>Inscribirme</a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          );
          })}
        </div>

        <p style={{ marginTop: '15px', fontStyle: 'italic', fontSize: '0.85em' }}>
          * Todos los servicios requieren previa cita.
        </p>
         <p style={{ marginTop: '15px', fontStyle: 'italic', fontSize: '0.85em' }}>
          MENORES DE EDAD: Comprobante de domicilio e INE de madre, padre o tutor.
        </p>
         <p style={{ marginTop: '15px', fontStyle: 'italic', fontSize: '0.85em' }}>
          MAYORES DE EDAD: INE, CURP y comprobante de domicilio.
        </p>

        {filtered.length === 0 && <p>No se encontraron cursos.</p>}
      </div>
    </section>
  );
}