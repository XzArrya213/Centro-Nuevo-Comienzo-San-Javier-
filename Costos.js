export default function Costos(){
  const costos = [
    {item: 'Curso mensual', price: '$30'},
    {item: 'Taller puntual', price: '$10'},
    {item: 'Asesoría individual', price: '$15'}
  ]

  return (
    <section id="costos" className="section costos">
      <div className="container">
        <h2>Costos</h2>
        <div className="cost-list">
          {costos.map((c,i)=> (
            <div key={i} className="cost-item">
              <strong>{c.item}</strong>
              <span>{c.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
