export default function Servicios() {
  const servicios = [
    { 
      name: 'Nutriólogo Rafael Méndez (Tel: 4646537861)', 
      days: 'Lunes a Viernes / Sábado', 
      hours: '04:00 PM a 08:00 PM / 11:00 AM a 01:00 PM', 
      cost: '$150.00 Por Consulta'
    },
    { 
      name: 'Terapia de Lenguaje, Mtra. Tania Arroyo (Tel: 4646559508)', 
      days: 'Lunes a Viernes', 
      hours: '12:00 PM a 06:00 PM', 
      cost: '$200.00 Por Consulta' 
    },
    { 
      name: 'Terapia de Lenguaje, Neuropsicologa. Becky de la Peña (Tel: 4641652487)', 
      days: 'Martes a Jueves', 
      hours: '10:00 AM a 5:00 PM', 
      cost: '$250.00 Por Consulta' 
    },
    { 
      name: 'Asesoría Jurídica - Lic. Rubi Miranda (Tel: 4641346720)', 
      days: 'Lunes a Viernes', 
      hours: '9:00 AM a 1:00 PM', 
      cost: '$150.00 Por Consulta' 
    },
    { 
      name: 'Fisioterapia - Victor Tierrablanca (Tel: 4646549599)', 
      days: 'Lunes a Viernes', 
      hours: '9:00 AM a 4:00 PM', 
      cost: '$150.00 Por Consulta' 
    },
    { 
      name: 'Dentista Diana García (Tel: 4641239868)', 
      days: 'Lunes a Viernes / Sábado', 
      hours: '10:00 AM a 7:00 PM / 10:00 AM a 3:00 PM', 
      cost: '$100.00 Por Consulta' 
    },
    { 
      name: 'Oculista', 
      days: 'Sábado', 
      hours: '10:30 AM a 1:00 PM', 
      cost: 'Examen Gratis (Lentes costo variable)' 
    },
    { 
      name: 'Tanatología - Candy Saavedra (Tel: 4641810180)', 
      days: 'Sábado', 
      hours: '8:00 AM a 4:00 PM', 
      cost: '$150.00 Por Consulta' 
    },
    { 
      name: 'Terapia de Lenguaje - Tania Arroyo (Tel: 4646559508)', 
      days: 'Lunes a Viernes', 
      hours: '2:00 PM a 6:00 PM', 
      cost: '$200.00 Por Consulta' 
    },
    { 
      name: 'Terapia de Lenguaje - Becky De La Peña (Tel: 4641652487)', 
      days: 'Lunes, Miércoles', 
      hours: '12:00 PM a 5:00 PM', 
      cost: '$150.00 Por Consulta' 
    }
  ];

  return (
    <section id="servicios" className="section servicios">
      <div className="container">
        <h2 style={{ marginBottom: '20px' }}>Servicios (horarios y días)</h2>
        <div style={{ overflowX: 'auto' }}>
          <table className="services-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '2px solid #eee' }}>
                <th style={{ padding: '12px' }}>Servicio</th>
                <th style={{ padding: '12px' }}>Días de Atención</th>
                <th style={{ padding: '12px' }}>Horario</th>
                <th style={{ padding: '12px' }}>Costo</th>
              </tr>
            </thead>
            <tbody>
              {servicios.map((s, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #f5f5f5' }}>
                  <td style={{ padding: '12px', fontSize: '0.95em' }}>{s.name}</td>
                  <td style={{ padding: '12px', fontSize: '0.95em' }}>{s.days}</td>
                  <td style={{ padding: '12px', fontSize: '0.95em' }}>{s.hours}</td>
                  <td style={{ padding: '12px', fontWeight: 'bold', color: '#2c3e50' }}>{s.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: '15px', fontStyle: 'italic', fontSize: '0.85em' }}>
          * Todos los servicios requieren previa cita.
        </p>
      </div>
    </section>
  );
}