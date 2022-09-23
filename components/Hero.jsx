import React from 'react'
import ButtonPrimary from './buttons/button-primary'
import ButtonSecondary from './buttons/button-secondary'

function Hero() {
    return (
        <section className="relative w-full h-screen bg-cover bg-top" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80)" }}>

            <div className="absolute inset-0 z-0 h-full bg-purple-700 opacity-25"></div>
            {/*blurry blobs */}
            <div className="h-36 w-36 rounded-full bg-purple-400 absolute blur-3xl"></div>
            <div className="h-24 w-24 rounded-full bg-purple-400 absolute blur-3xl bottom-0"></div>
            {/*blurry blobs */}

            <div className="container flex items-center justify-start h-full py-32 mx-auto">
                <div className="z-10 flex flex-col px-5 xl:flex max-w-xl">
                    <h1 className=" mt-1 text-7xl font-black text-white sm:text-9xl sm:mx-0">kissat?<div className="">Kahvi?  </div>
                    </h1>
                    <p className="w-full my-6 text-xl font-bold text-gray-200">Purrfect! Olet täysin oikeassa paikassa 🐈</p>
                    <div className="flex md:mt-10 gap-3">
                        <ButtonPrimary text="Varaa pöytä" />
                        <ButtonSecondary text="Ota yhteyttä" />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Hero