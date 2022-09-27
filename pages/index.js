import Head from 'next/head'
import CallToAction from '../components/call-to-action'
import { Hero } from '../components/Hero'
import { InfoBlocks } from '../components/info-blocks'

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
        <InfoBlocks />
        <CallToAction />
      </main >
    </div >
  )
}
