/* eslint-disable @next/next/no-img-element */
import React from 'react'
import InfoBlock from './info-block'
import InfoBlockReverse from './info-block-reverse'
import Fade from "react-reveal/Fade";


export const InfoBlocks = () => {
    return (
        <section className="py-14 md:py-20 bg-gradient-to-t from-purple-200 via-purple-50 to-purple-200">
            <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
                <div className="flex justify-center items-center">
                    <img className="h-auto w-60 animate-slowSpin drop-shadow-2xl" src="/kissa-yingyang.png" alt="" />
                </div>
                <Fade bottom cascade duration={600}>
                    <div className="relative">
                        <h2 className="w-full text-7xl text-center sm:text-8xl lg:text-9xl text-gray-900 font-AmaticSC ">Tervetuloa kissakahvilan sivuille</h2>
                        <p className="w-full py-10 mx-auto -mt-2 sm:text-6xl md:text-7xl text-5xl text-center font-AmaticSC text-gray-900 font-light italic sm:max-w-3xl">Valloittavia <span className="text-pink-500">katteja</span> <br /> Mainiota <span className="text-pink-500">ruokaa</span> <br /> iloisia <span className="text-pink-500">ihmisiä</span> </p>
                    </div>
                </Fade>

                <InfoBlock
                    imgSrc="/kissa-no-bg-2.png"
                    title="Kissakaverimme"
                    text="Tutustu etukäteen meidän aivan ihaniin karvaisiin kavereihimme jotka pääsetkin pian tapaamaan!"
                    buttonText="Tutustu"
                    url="/tutustu"
                />

                <InfoBlockReverse
                    imgSrc="/kissa-no-bg-1.png"
                    title="Hyvää ruokaa ja juotavaa"
                    text="Meiltä erikoiskahvien lisäksi, myös erilaiset leivonnaiset ja pienet suolaiset! Meillä on myös anniskeluoikeus jos esimerkiksi lasi viiniä maistuisi kissojen paijaamisen ohella"
                    buttonText="Menu"
                    url="menu"
                />

                <InfoBlock
                    imgSrc="/kissa-no-bg-11.png"
                    title="Varaa pöytä"
                    text="Pöydän varaamalla varmistat, että tullessasi meiltä löytyy tilaa sinulle ja mahdollisille seuralaisillesi"
                    buttonText="Varaa pöytä"
                    url="varaa-poyta"
                />

                <InfoBlockReverse
                    imgSrc="/kissa-no-bg-7.png"
                    title="Tapahtumia"
                    text="Katso meidän eri tapahtumat! Meiltä löytyy ajoittain esimerkiksi. Kissajoogaa, sleepover partyjä kahvilassamme sekä muuta mukavaa "
                    buttonText="Tapahtumat"
                    url="tapahtumat"
                />

                <InfoBlock
                    imgSrc="/kissa-no-bg-10.png"
                    title="Ota yhteyttä"
                    text="Tahdotko adoptoida kissan, teemme yhteistyötä eri järjestöjen kanssa! Voit ottaa meihin yhteyttä oli asia sitten mikä tahansa!"
                    buttonText="Ota yhteyttä"
                    url="ota-yhteytta"
                />

            </div>
        </section>
    )
}