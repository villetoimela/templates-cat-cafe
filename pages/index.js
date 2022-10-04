import Head from 'next/head'
import CallToAction from '../components/call-to-action'
import { Hero } from '../components/Hero'
import ImageGallery from '../components/image-gallery/image-gallery'
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
        <CallToAction
          mainText="Mitä sinä enää odotat?"
          text="Ja tapaa iloiset kissakaverimme"
          buttonText="Varaa pöytä"
          url="varaa-poyta"
        />

        <ImageGallery />
      </main >
    </div >
  )
}
