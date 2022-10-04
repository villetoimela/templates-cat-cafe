/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Fade from "react-reveal/Fade";

const Booking = (props) => {
    return (
        <Fade bottom cascade duration={600}>
            <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
                <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 order-last">
                    <img className="rounded-lg shadow-xl" src="/varasjarjestelma-kuva.png" alt="" data-rounded="rounded-lg" data-rounded-max="rounded-full" />
                </div>
                <div className="flex flex-col justify-center mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
                    <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">{props.mainText}</h3>
                    <p className="mt-5 text-lg text-gray-900 text md:text-left">{props.text}</p>
                    <h3 className="font-bold text-sm italic pt-10"> AJANVARAUSJÄRJESTELMÄ TULISI OLEMAAN RAVINTOLAN VALITSEMAN AJANVARAUSJÄRJESTELMÄN INTEGRAATIO, SIKSI TÄSSÄ VAIN KUVA :D </h3>
                </div>
            </div>
        </Fade>
    )
}

export default Booking