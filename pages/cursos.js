import Head from 'next/head'
import Header from '../Header'
import Cursos from '../Cursos'

export default function CursosPage(){
  return (
    <>
      <Head>
        <title>Cursos — Centro Nuevo Comienzo SX</title>
      </Head>
      <Header />
      <main>
        <Cursos />
      </main>
    </>
  )
}
