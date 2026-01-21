import Head from 'next/head'
import Header from '../src/components/Header'
import Hero from '../src/components/Hero'
import Footer from '../src/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Centro Nuevo Comienzo SX</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  )
}
