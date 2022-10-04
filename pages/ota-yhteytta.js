import React from 'react'
import ContactUs from '../components/contact'
import InfoBlock from "../components/info-block"
import InfoBlockReverse from "../components/info-block-reverse"

const OtaYhteytta = () => {
    return (
        <>
            <ContactUs />
            <section className="py-14 md:py-20 bg-gradient-to-t from-purple-200 via-purple-50 to-purple-200">
                <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">

                    <InfoBlock
                        imgSrc="/kissa-no-bg-11.png"
                        title="Varaa pöytä"
                        text="Pöydän varaamalla varmistat, että tullessasi meiltä löytyy tilaa sinulle ja mahdollisille seuralaisillesi"
                        buttonText="Varaa pöytä"
                    />

                    <InfoBlockReverse
                        imgSrc="/kissa-no-bg-7.png"
                        title="Tapahtumia"
                        text="Katso meidän eri tapahtumat! Meiltä löytyy ajoittain esimerkiksi. Kissajoogaa, sleepover partyjä kahvilassamme sekä muuta mukavaa "
                        buttonText="Tapahtumat"
                    />

                    <InfoBlock
                        imgSrc="/kissa-no-bg-1.png"
                        title="Hyvää ruokaa ja juotavaa"
                        text="Meiltä erikoiskahvien lisäksi, myös erilaiset leivonnaiset ja pienet suolaiset! Meillä on myös anniskeluoikeus jos esimerkiksi lasi viiniä maistuisi kissojen paijaamisen ohella"
                        buttonText="Menu"
                    />

                </div>
            </section>
        </>
    )
}

export default OtaYhteytta