import React from 'react'
import CatCard from './cat-card'
import PrimaryHeader from '../primary-header'

const CatShowcase = () => {
    return (
        <section className="w-full py-24 bg-gradient-to-t from-purple-200 via-purple-50 to-purple-200 lg:py-44">
            <div className="px-12 mx-auto text-center max-w-7xl">
                <div className="space-y-12 md:text-left">

                    <PrimaryHeader
                        title="Täällä pääset tutustumaan kissoihimme!"
                        text="Kaikki kissamme ovat aivan valloittavia omia persooniaan ja se tekeekin heistä vielä enemmän rakastettavia karvapalleroita! Kaikki ovat tietenkin kilttejä ja tottuneita ihmisiin :3"
                    />

                    <div className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">

                        <CatCard
                            catName="Piku"
                            text="Piku on varmaan meidän sosiaalisin kissa, ja hänet voitkin löytää kerjäämästä palaa kakustasi!"
                            catImage="/kissa-no-bg-piku.png"
                            blobColor="text-pink-500"
                            textColor="text-pink-500"
                        />

                        <CatCard
                            catName="Mörri"
                            text="Meidän Mörrimme vaatii vähän enemmän tutustumista (tai herkkuja) jotta hän uskaltautuu rapsutuksille"
                            catImage="/kissa-no-bg-2.png"
                            blobColor="text-teal-500"
                            textColor="text-teal-500"
                        />

                        <CatCard
                            catName="Jaska"
                            text="Jaska on meidän kämpelö kissa, mutta aivan hurmaava siitä huolimatta! (tai juuri sen takia)"
                            catImage="/kissa-no-bg-11.png"
                            blobColor="text-yellow-500"
                            textColor="text-yellow-500"
                        />

                        <CatCard
                            catName="Maisa"
                            text="Onko sinulla kamera mukana? Maisa pyrkii varmasti olemaan kuvissasi mukana!"
                            catImage="/kissa-no-bg-1.png"
                            blobColor="text-teal-500"
                            textColor="text-teal-500"
                        />

                        <CatCard
                            catName="Bella"
                            text="Bella on panikoija, niinkuin kuvasta voi nähdä. Tuntuu että hän pitää kokoajan huolta koko porukasta!"
                            catImage="/kissa-no-bg-6.png"
                            blobColor="text-yellow-500"
                            textColor="text-yellow-500"
                        />

                        <CatCard
                            catName="Jörö"
                            text="Kuka nyt ei tykkäisi tästä pienestä vitivalkoisesta pörinäpojasta, Jörö nauttii myös maharapsuista!"
                            catImage="/kissa-no-bg-7.png"
                            blobColor="text-pink-500"
                            textColor="text-pink-500"
                        />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default CatShowcase