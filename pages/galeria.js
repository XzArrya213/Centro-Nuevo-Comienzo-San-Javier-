import Head from 'next/head'
import Header from '../Header'
import Galeria from '../Galeria'

export default function GaleriaPage(){
  return (
    <>
      <Head>
        <title>Galería — Centro Nuevo Comienzo SX</title>
      </Head>
      <Header />
      <main>
        <Galeria />
      </main>
    </>
  )
}
