import React from 'react'
import Event from '../components/event'
import PrimaryHeader from "../components/primary-header"
import CallToAction from "../components/call-to-action"

const Tapahtumat = () => {
    return (
        <>

            <section className="w-full bg-gradient-to-t from-purple-200 via-purple-50 to-purple-200 pt-44 pb-14 lg:pb-20">
                <PrimaryHeader
                    title="Sillointällöin meillä tapahtuu!"
                    text="Meiltä löytyy esimerkiksi Kissajoogaa, sleepover partyjä kahvilassamme sekä muuta mukavaa"
                />

                <Event
                    imgSrc="https://www.fearfreehappyhomes.com/wp-content/uploads/2020/08/Catyogafeatured.jpg"
                    title="Kissajoogaa nyt joka kuukausi!"
                    quickInfo="Joka kuun ensimmäinen perjantai"
                    price="15"
                    text="Kissakahvilassamme joogataan aina kuun viimeinen perjantai klo 18!

                    Kissajooga sopii kaikille, sen kuuluu olla hauskaa, et tarvitse lainkaan aiempaa joogakokemusta!
                    
                    Voit saapua paikan päälle tutustumaan söpöihin pörröisiin ohjaajiin jo klo 17."

                    moreInfo="Ilmoittautumiset puhelimitse 040 513 7883 tai paikan päällä!"
                />

                <Event
                    imgSrc="https://images.unsplash.com/photo-1549317909-68b039b635e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1040&q=80"
                    title="Sleepover kahvilassamme!"
                    quickInfo="Erillisellä varauksella"
                    price="60"
                    text="Kissakahvilassamme pääsee yöpöymään, vaikka isommallakin porukalla!

                    Hinta sisältää petivaatteet, pyyhkeen, aamukahvin ja herkkuja pörröisille nukkumakavereille."

                    moreInfo="Ilmoittautumiset puhelimitse 040 513 7883 tai paikan päällä!"
                />

                <CallToAction
                    mainText="Etkö ole vielä meidän Cat Clubissa?"
                    buttonText="Liity klubiin"
                    text="Pysy ajantasalla tapahtumista!"
                />
                <div className="flex justify-center items-center lg:pt-20 pt-14">
                    <img className="h-auto w-60 animate-slowSpin drop-shadow-2xl" src="/kissa-yingyang.png" alt="" />
                </div>
            </section>
        </>
    )
}

export default Tapahtumat