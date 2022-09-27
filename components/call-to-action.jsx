import React from 'react'
import ButtonSecondary from './buttons/button-secondary'

const CallToAction = () => {
    return (
        <section className="w-full bg-darkPurple py-56 overflow-hidden relative">
            <div classNameName="h-36 w-36 rounded-full bg-purple-400 absolute blur-3xl bottom-0"></div>
            <div classNameName="h-24 w-24 rounded-full bg-purple-400 absolute blur-3xl top-0 right-0"></div>
            <div className="max-w-xs px-5 sm:max-w-5xl mx-auto flex lg:flex-row flex-col items-start sm:items-center lg:items-end relative">
                <h2 className="text-white sm:pl-10 font-thin text-4xl sm:text-6xl lg:text-left sm:text-center relative leading-none">Mitä sinä enää odotat?</h2>
                <div className="lg:w-1/2 w-full flex flex-col justify-center relative items-end">
                    <div className="lg:w-auto w-full flex flex-col sm:items-center sm:text-center lg:text-left">
                        <ButtonSecondary
                            styles="lg:w-full mt-10 lg:mb-0 mb-5 text-base font-normal"
                            text="Varaa pöytä"
                            url="#"
                        />
                        <p className="text-gray-300 mt-2">Ja tapaa iloiset kissakaverimme ❤️</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction