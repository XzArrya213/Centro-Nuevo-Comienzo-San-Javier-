import Link from 'next/link'
import {useRouter} from 'next/router'
import styles from './Header.module.css'

export default function Header(){
  const router = useRouter()
  const active = router.pathname

  function cls(path){
    return active === path ? styles.active : ''
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logoContainer}>
          <img src="/imgs/logo-nuevo-comienzo.png" alt="Nuevo Comienzo Logo" className={styles.logoImage} />
        </Link>
        <nav className={styles.nav} aria-label="Main navigation">
          <Link className={cls('/formativos')} href="/formativos" aria-current={active==='/formativos' ? 'page' : undefined}>Formativos</Link>
          <Link className={cls('/cursos')} href="/cursos" aria-current={active==='/cursos' ? 'page' : undefined}>Capacitacion</Link>
          <Link className={cls('/servicios')} href="/servicios" aria-current={active==='/servicios' ? 'page' : undefined}>Servicios</Link>
          <Link className={cls('/informacion')} href="/informacion" aria-current={active==='/informacion' ? 'page' : undefined}>Conocenos</Link>
          <Link className={cls('/contacto')} href="/contacto" aria-current={active==='/contacto' ? 'page' : undefined}>Contacto</Link>
        </nav>
      </div>
    </header>
  )
}
