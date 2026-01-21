import Head from 'next/head'
import Header from '../Header'
import Costos from '../Costos'

export default function CostosPage(){
  return (
    <>
      <Head>
        <title>Costos — Centro Nuevo Comienzo SX</title>
      </Head>
      <Header />
      <main>
        <Costos />
      </main>
    </>
  )
}
