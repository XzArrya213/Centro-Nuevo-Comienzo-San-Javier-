import Head from 'next/head'
import Header from '../Header'
import Ubicacion from '../Ubicacion'

export default function UbicacionPage(){
  return (
    <>
      <Head>
        <title>Ubicación — Centro Nuevo Comienzo SX</title>
      </Head>
      <Header />
      <main>
        <Ubicacion />
      </main>
    </>
  )
}
