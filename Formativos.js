import { useState, useMemo } from 'react';

export default function Formativos() {
  const cursos = [
    {
      title: 'Zumba',
      desc: 'Ejercítate y diviértete con rutinas de baile aeróbico al ritmo de música latina para mejorar tu condición física.',
      category: 'Deporte',
      image: '/imgs/zumba.jpg', 
      detalles: {
        horario: 'Lunes a Viernes de 08:00 AM a 09:00 AM',
        costo: '$20.00 por clase',
        contacto: '464 169 5354'
      }
    },
    {
      title: 'Dibujo Artistico y Color para Niños',
      desc: 'Espacio creativo para que los niños exploren técnicas de trazo, color y composición visual de forma divertida.',
      category: 'Arte y Cultura',
      image: '/imgs/DibujoArtisticoyColorparaNiños.jpg', 
      detalles: {
        horario: 'Viernes de 05:00 PM a 06:30 PM y Sabado de 12:00 PM a 01:30 PM',
        costo: '$35.00 por clase',
        contacto: '464 169 5354'
      }
    },
    {
      title: 'Expresion Musical',
      desc: 'Aprende a tocar tu instrumento favorito: Guitarra, Ukulele, Bajo, Violín o Teclado. Clases para principiantes y avanzados.',
      category: 'Arte y Cultura',
      image: '/imgs/ExpresionMusical.jpg',
      detalles: {
        horario: 'Lunes de 04:00 PM a 06:00 PM y Miercoles de 05:00 PM a 07:00 PM',
        costo: '$60.00 por clase',
        contacto: '464 139 4105'
      }
    },
    {
      title: 'Karate Do',
      desc: 'Disciplina marcial enfocada en la defensa personal, fortaleciendo el carácter, la disciplina y el control físico.',
      category: 'Deporte',
      image: '/imgs/KarateDo.jpg',
      detalles: {
        horario: 'Martes y Jueves de 04:00 PM a 05:00 PM y Sábado de 01:00 PM a 02:00 PM',
        costo: '$30.00 por clase',
        contacto: '464 184 7905'
      }
    },
    {
      title: 'Baile',
      desc: 'Clases dinámicas para aprender diversos ritmos, soltar el cuerpo y disfrutar del movimiento.',
      category: 'Danza',
      image: '/imgs/baile.jpg',
      detalles: {
        horario: 'Lunes a Sabado de 09:00 AM a 10:00 AM y Martes y Jueves de 05:00 PM a 06:00 PM',
        costo: '$30.00 por clase',
        contacto: '464 109 7403'
      }
    },
    {
      title: 'Regularización Escolar',
      desc: 'Apoyo académico personalizado para reforzar materias y mejorar el rendimiento de alumnos de primaria y secundaria.',
      category: 'Educación',
      image: '/imgs/Regularización Escolar.jpg',
      detalles: {
        horario: 'Sabado de 09:00 AM a 11:00 AM',
        costo: '$60.00 por clase',
        contacto: '464 109 7403'
      }
    },
    {
      title: 'Baby Ballet',
      desc: 'Iniciación lúdica a la danza clásica para niñas pequeñas (4 años a 6 años), enfocada en la postura, el ritmo y la coordinación.',
      category: 'Danza',
      image: '/imgs/babyballett.jpg',
      detalles: {
        horario: 'Lunes y Miércoles de 05:00 PM a 06:00 PM',
        costo: '$35.00 por clase',
        contacto: '464 109 7403'
      }
    },
    {
      title: 'Pre Ballet',
      desc: 'Iniciación lúdica a la danza clásica para niñas pequeñas (7 años a 12 años), enfocada en la postura, el ritmo y la coordinación.',
      category: 'Danza',
      image: '/imgs/preballet.jpg',
      detalles: {
        horario: 'Lunes, Miercoles y Viernes de 05:00 PM a 06:00 PM',
        costo: '$35.00 por clase',
        contacto: '464 111 3823'
      }
    },
    {
      title: 'Ballet',
      desc: 'Clases técnicas de danza clásica para niñas de (13 años en adelante) para desarrollar elegancia, fuerza, flexibilidad y expresión corporal.',
      category: 'Danza',
      image: '/imgs/ballet.jpg',
      detalles: {
        horario: 'Lunes, Miercoles y Viernes de 06:00 PM a 07:00 PM',
        costo: '$35.00 por clase',
        contacto: '464 111 3823'
      }
    },
    {
      title: 'Crossfit',
      desc: 'Entrenamiento funcional de alta intensidad adaptado a diferentes edades para desarrollar fuerza, resistencia y agilidad.',
      category: 'Deporte',
      image: '/imgs/crossfit.jpg', 
      detalles: {
        horario: 'Lunes a Viernes de 07:00 AM a 08:00 AM, 06:30 PM a 07:30 PM, 07:30 PM a 08:30 PM',
        costo: '$50.00 por clase',
        contacto: '464 169 5354'
      }
    },
    {
      title: 'Crossfit Kids',
      desc: 'Entrenamiento funcional de alta intensidad adaptado a diferentes edades para desarrollar fuerza, resistencia y agilidad.',
      category: 'Deporte',
      image: '/imgs/crossfitkids.jpg', 
      detalles: {
        horario: 'Lunes, Miercoles y Viernes de 05:00 pm a 06:00 pm',
        costo: '$70 por clase',
        contacto: '464 169 5354'
      }
    },
    {
      title: 'Porra',
      desc: 'Desarrollo de habilidades gimnásticas, baile y coordinación en equipo a través de rutinas energéticas y divertidas (6 años o mas).',
      category: 'Deporte',
      image: '/imgs/porra.jpg', 
      detalles: {
        horario: 'Lunes y Miercoles de 04:00 pm a 05:00 pm',
        costo: '$30.00 por clase',
        contacto: '464 169 5354'
      }
    },
    {
      title: 'Basquetbol y Activacion Fisica',
      desc: 'Iniciación al deporte en equipo, fomentando la coordinación motriz y hábitos saludables en niños y adolescentes (6 años a 13 años).',
      category: 'Deporte',
      image: '/imgs/BasquetbolyActivacionFisica.jpg', 
      detalles: {
        horario: 'Martes y Jueves de 05:00 PM a 06:30 PM',
        costo: '$15.00 por clase',
        contacto: '464 169 5354'
      }
    },
     {
      title: 'Arteterapia Intima',
      desc: 'Ejercita tu inteligencia emocional y autoconocimiento a través de la expresión artística en un ambiente seguro.',
      category: 'Bienestar emocional',
      image: '/imgs/arteterapia.jpg', 
      detalles: {
        horario: 'Miercoles de 10:00 AM a 11:30 AM',
        costo: '$100.00 por clase (Incluido material)',
        contacto: '464 169 5354'
      }
    },
     {
      title: 'Dibujando mi mapa de los sueños',
      desc: 'Taller vivencial para visualizar, plantear y estructurar tus metas personales enfocadas en tu bienestar integral.',
      category: 'Bienestar emocional',
      image: '/imgs/Dibujandomimapadelossueños.jpg', 
      detalles: {
        horario: 'Viernes de 10:00 AM a 11:30 AM',
        costo: '$200.00 por sesion',
        contacto: '464 169 5354'
      }
    },
     {
      title: 'Asesoria de Preparatoria abierta',
      desc: 'Acompañamiento y guía académica para preparar y acreditar tus exámenes de preparatoria abierta.',
      category: 'Educación',
      image: '/imgs/AsesoriadePreparatoriaabierta.jpg', 
      detalles: {
        horario: 'Lunes de 09:00 AM a 03:00 PM y Martes de 09:00 AM a 04:00 PM',
        costo: 'Gratuito',
        contacto: '464 169 5354'
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
    <section id="formativos" className="section formativos" aria-labelledby="formativos-title">
      <div className="container">
        <h2 id="formativos-title">Nuestros Formativos</h2>

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
          {filtered.map((c, i) => (
              <article key={i} className='card' 
                style={{ 
                  border: '1px solid #eee', 
                  borderRadius: '12px', 
                  overflow: 'hidden', // Recorta la imagen en las esquinas redondeadas
                  background: '#fff',
                  padding: 0, // IMPORTANTE: Sin padding para que la imagen toque los bordes
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
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