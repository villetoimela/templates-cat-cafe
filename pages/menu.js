import React from 'react'
import PrimaryHeader from '../components/primary-header'
import DessertMenuDisclosure from '../components/menu/dessert-menu-disclosure'
import DrinkMenuDisclosure from '../components/menu/drink-menu-disclosure'
import FoodMenuDisclosure from '../components/menu/food-menu-disclosure'
import CallToAction from "../components/call-to-action"
import InfoBlock from '../components/info-block'
import InfoBlockReverse from '../components/info-block-reverse'
import Fade from "react-reveal/Fade";


const Menu = () => {
    return (
        <>
            <Fade bottom cascade duration={600}>
                <div className="w-full px-4 pt-44 pb-32 bg-gradient-to-t from-purple-200 via-purple-50 to-purple-200">
                    <PrimaryHeader
                        title="Katso meidän maukas menu ja tule maistelemaan!"
                        text="Käytämme ruuissamme ja leipomuksissa aina mahdollisuuksien mukaan kotimaisia ja lähellä tuotettuja raaka-aineita"
                    />

                    <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-6">

                        <FoodMenuDisclosure
                            title="Lämpimät ruuat"
                        />

                        <DrinkMenuDisclosure
                            title="Juomat"
                        />

                        <DessertMenuDisclosure
                            title="Jälkiruoat"
                        />

                    </div>
                </div>

                <CallToAction
                    mainText="Oletko kiinnostunut adoptoimaan kissan?"
                    buttonText="Ota yhteyttä"
                    text="Teemme yhteistyötä eri järjestöjen kanssa"
                    url="ota-yheytta"
                />

                <section className="py-14 md:py-20 bg-gradient-to-t from-purple-200 via-purple-50 to-purple-200">
                    <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">

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

                    </div>
                </section>
            </Fade>
        </>

    )
}

export default Menu