export default function Galeria(){
  const images = [
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop&crop=faces'
  ]

  return (
    <section id="galeria" className="section galeria">
      <div className="container">
        <h2>Galería</h2>
        <div className="gallery-grid">
          {images.map((src,i)=> (<img key={i} src={src} alt={`foto ${i+1}`} />))}
        </div>
      </div>
    </section>
  )
}
