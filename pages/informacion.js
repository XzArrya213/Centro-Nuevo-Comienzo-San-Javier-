import Head from 'next/head'
import Header from '../Header'
import Informacion from '../Informacion'

export default function InformacionPage(){
  return (
    <>
      <Head>
        <title>Información — Centro Nuevo Comienzo SX</title>
      </Head>
      <Header />
      <main>
        <Informacion />
      </main>
    </>
  )
}
