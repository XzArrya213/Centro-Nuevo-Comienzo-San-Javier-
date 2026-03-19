import Link from 'next/link'
import styles from './Footer.module.css'
// Importamos los iconos profesionales de alta calidad
import { MessageCircle, Facebook, Phone } from 'lucide-react'

let site = null
try {
  site = require('./data/site.json')
} catch (e) {
  site = { 
    name: 'CENTRO NUEVO COMIENZO SAN JAVIER', // Texto en mayúsculas como antes
    phone: '+52 464 688 1415', 
    facebook: 'https://www.facebook.com/profile.php?id=100095172199723', 
    whatsapp: '+52 464 139 1149',
    address: 'Calle del Santuario S/N Col. Rinconada San Javier Salamanca Guanajuato', 
    hours: 'Lunes a Viernes de 7:00 AM - 7:00 PM / Sábado: 9:00 AM - 7:00 PM' 
  }
}

export default function Footer() {
  // Formatear número de WhatsApp de forma robusta
  const whatsappNumber = site.whatsapp?.replace(/[^0-9]/g, '') || ''
  
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        
        {/* RESTAURADO: Título de texto original en lugar de imagen */}
        <h2 className={styles.footerTitle}>{site.name}</h2>
        
        <nav className={styles.footerNav}>
          <Link href="/">INICIO</Link>
          <Link href="/formativos">FORMATIVOS</Link>
          <Link href="/cursos">CAPACITACIÓN</Link>
          <Link href="/servicios">SERVICIOS</Link>
        </nav>

        {/* Redes Sociales con Iconos de Alta Calidad (NUEVO ESTILO) */}
        <div className={styles.footerSocial}>
          {site.facebook && site.facebook !== '#' && (
            <a href={site.facebook} target="_blank" rel="noreferrer" className={styles.socialIcon} title="Facebook">
              <Facebook size={22} strokeWidth={2.5} />
            </a>
          )}
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className={styles.socialIcon} title="WhatsApp">
            <MessageCircle size={22} strokeWidth={2.5} />
          </a>
          <a href={`tel:${site.phone}`} className={styles.socialIcon} title="Llamar">
            <Phone size={22} strokeWidth={2.5} />
          </a>
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