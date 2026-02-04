import Head from 'next/head'
import Header from '../Header'
import Capacitacion from '../Capacitacion'

export default function CursosPage(){
  return (
    <>
      <Head>
        <title>Capacitacion — Centro Nuevo Comienzo SX</title>
      </Head>
      <Header />
      <main>
        <Capacitacion />
      </main>
    </>
  )
}
