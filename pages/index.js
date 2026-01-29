import Head from 'next/head'
import Header from '../Header'
import Hero from '../Hero'
import Cursos from '../Cursos'
import Servicios from '../Servicios'
import Costos from '../Costos'
import Feature from '../Feature'
import Galeria from '../Galeria'
import Faqs from '../Faqs'
import Ubicacion from '../Ubicacion'
import Contacto from '../Contacto'
import LatestBlog from '../LatestBlog'

export default function Home() {
  return (
    <>
      <Head>
        <title>Centro Nuevo Comienzo SX</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Feature />
        <LatestBlog />
      </main>
    </>
  )
}
