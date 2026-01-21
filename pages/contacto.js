import Head from 'next/head'
import Header from '../Header'
import Contacto from '../Contacto'

export default function ContactoPage(){
  return (
    <>
      <Head>
        <title>Contacto — Centro Nuevo Comienzo SX</title>
      </Head>
      <Header />
      <main>
        <Contacto />
      </main>
    </>
  )
}
