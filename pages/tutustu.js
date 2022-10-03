import React from 'react'
import CallToAction from '../components/call-to-action'
import CatShowcase from '../components/cat-showcase/cat-showcase'
import InfoBlock from '../components/info-block'
import InfoBlockReverse from '../components/info-block-reverse'

const Tutustu = () => {
    return (
        <>
            <CatShowcase />
            <CallToAction
                mainText="Tutustu meiltä saataviin herkkuihin"
                text="Meiltä myös vegaaniset tuotteet ❤️"
                buttonText="Menu"
            />

            <section className="py-14 md:py-20 bg-gradient-to-t from-purple-200 via-purple-50 to-purple-200">
                <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">

                    <InfoBlock
                        imgSrc="/kissa-no-bg-5.png"
                        title="Käytkö meillä usein?"
                        text="Liity meidän Cat Clubiin ja saa eksklusiivisia tarjouksia, sekä tietoa esim. tapahtumista ensimmäisenä! "
                        buttonText="Liity klubiin"
                    />
                    <InfoBlockReverse
                        imgSrc="/kissa-no-bg-10.png"
                        title="Ota yhteyttä"
                        text="Tahdotko adoptoida kissan, teemme yhteistyötä eri järjestöjen kanssa! Voit ottaa meihin yhteyttä oli asia sitten mikä tahansa!"
                        buttonText="Ota yhteyttä"
                    />
                </div>
            </section>
        </>
    )
}

export default Tutustu