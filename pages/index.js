import Head from 'next/head'
import Hero from '../components/hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Katti cafe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
      </main >
    </div >
  )
}
