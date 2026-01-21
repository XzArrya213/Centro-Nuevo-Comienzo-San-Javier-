import Head from 'next/head'
import Header from '../Header'
import Talleres from '../Talleres'

export default function TalleresPage(){
  return (
    <>
      <Head>
        <title>Talleres — Centro Nuevo Comienzo SX</title>
      </Head>
      <Header />
      <main>
        <Talleres />
      </main>
    </>
  )
}
