import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Header(){
  const router = useRouter()
  const active = router.pathname

  function cls(path){
    return active === path ? 'active' : ''
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo"><Link href="/">Centro Nuevo Comienzo SX</Link></div>
        <nav className="nav" aria-label="Main navigation">
          <Link className={cls('/cursos')} href="/cursos" aria-current={active==='/cursos' ? 'page' : undefined}>Cursos</Link>
          <Link className={cls('/servicios')} href="/servicios" aria-current={active==='/servicios' ? 'page' : undefined}>Servicios</Link>
          <Link className={cls('/informacion')} href="/informacion" aria-current={active==='/informacion' ? 'page' : undefined}>Conocenos</Link>
          <Link className={cls('/ubicacion')} href="/ubicacion" aria-current={active==='/ubicacion' ? 'page' : undefined}>Ubicación</Link>
          <Link className={cls('/contacto')} href="/contacto" aria-current={active==='/contacto' ? 'page' : undefined}>Contacto</Link>
        </nav>
      </div>
    </header>
  )
}
