export default function Faqs(){
  const faqs = [
    {q:'¿Cómo me inscribo?', a:'Completa el formulario de contacto o ven al centro en horario de atención.'},
    {q:'¿Hay descuentos?', a:'Ofrecemos descuentos por grupo y por pagos anticipados.'}
  ]

  return (
    <section id="faqs" className="section faqs">
      <div className="container">
        <h2>Preguntas frecuentes</h2>
        <div className="faqs-list">
          {faqs.map((f,i)=> (
            <details key={i}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
