import Head from 'next/head'
import Header from '../Header'
import Faqs from '../Faqs'

export default function FaqsPage(){
  return (
    <>
      <Head>
        <title>Preguntas frecuentes — Centro Nuevo Comienzo SX</title>
      </Head>
      <Header />
      <main>
        <Faqs />
      </main>
    </>
  )
}
