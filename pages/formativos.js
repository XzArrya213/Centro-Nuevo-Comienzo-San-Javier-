import Head from 'next/head'
import Header from '../Header'
import Formativos from '../Formativos'

export default function FormativosPage(){
  return (
    <>
      <Head>
        <title>Formativos — Centro Nuevo Comienzo SX</title>
      </Head>
      <Header />
      <main>
        <Formativos />
      </main>
    </>
  )
}