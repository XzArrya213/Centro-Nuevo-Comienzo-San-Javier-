import Link from 'next/link'
import styles from './Footer.module.css'
import { MessageCircle } from 'lucide-react'

let site = null
try{
  site = require('./data/site.json')
}catch(e){
  site = { nombre: 'Centro Nuevo Comienzo San Javier', telefono: '+52 464 688 1415', correo: 'info@centronuevocomienzo.mx', facebook: '#', direccion: 'Calle del Santuario S/N Col. Rinconada San Javier Salamanca Guanajuato', horarios: 'Lunes - Viernes' }
}

export default function Footer(){
  // Formatear número de WhatsApp (remover espacios y +)
  const whatsappNumber = site.whatsapp?.replace(/\s+/g, '').replace('+', '') || ''
  
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        
        <h2 className={styles.footerTitle}>{site.name}</h2>
        
        <nav className={styles.footerNav}>
          <Link href="/">Inicio</Link>
          <Link href="/formativos">Formativos</Link>
          <Link href="/cursos">Capacitacion</Link>
          <Link href="/servicios">Servicios</Link>
        </nav>

        <div className={styles.footerSocial}>
          {site.facebook && site.facebook !== '#' && (
            <a href={site.facebook} target="_blank" rel="noreferrer" className={styles.socialIcon} title="Facebook">f</a>
          )}
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className={styles.socialIcon} title="WhatsApp"> <MessageCircle size={24} /> </a>
          <a href={`tel:${site.phone}`} className={styles.socialIcon} title="Llamar">☎</a>
        </div>

        <div className={styles.footerContact}>
          {site.address && <div><strong>Dirección:</strong> {site.address}</div>}
          {site.hours && <div><strong>Horarios:</strong> {site.hours}</div>}
        </div>

        <div className={styles.footerLegal}>
          <div className={styles.footerCopyright}>
            © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}
