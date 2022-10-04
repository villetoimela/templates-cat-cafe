import React from 'react'
import Booking from '../components/booking'
import PrimaryHeader from "../components/primary-header"

const VaraaPoyta = () => {
    return (
        <section className="py-44 bg-gradient-to-t from-purple-200 via-purple-50 to-purple-200">
            <div className="flex flex-col px-8 mx-auto max-w-7xl xl:px-12">
                <PrimaryHeader
                    title="Varaa pöytä halutessasi täältä!"
                    text=""
                />

                <Booking
                    mainText="Varmista paikkasi oheisesta varausjärjestelmästä"
                    text="Kissakavereidemme seuraan pääsee yleisestiottaen herkuttelemaan kävelemällä kahvilaan sisään, mutta varsinkin viikonloppuisin tai loma-aikana pöydän varamaaisella olet taatusti varannut paikkasi meiltä. Voit myös soittaa suoraan meille ja kysellä nykyisistä asiakasmääristä!"
                />
            </div>
        </section>
    )
}

export default VaraaPoyta