import Head from 'next/head'
import Header from '../Header'
import Servicios from '../Servicios'

export default function ServiciosPage(){
  return (
    <>
      <Head>
        <title>Servicios — Centro Nuevo Comienzo SX</title>
      </Head>
      <Header />
      <main>
        <Servicios />
      </main>
    </>
  )
}
