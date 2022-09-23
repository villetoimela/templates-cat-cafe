import React from 'react'
import ButtonPrimary from './buttons/button-primary'
import ButtonSecondary from './buttons/button-secondary'

function Hero() {
    return (
        <section className="relative overflow-hidden w-full h-screen bg-cover bg-top" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80)" }}>

            <div className="absolute inset-0 z-0 h-full bg-purple-700 opacity-25"></div>
            {/*blurry blobs */}
            <div className="h-36 w-36 rounded-full bg-purple-400 absolute blur-3xl"></div>
            <div className="h-24 w-24 rounded-full bg-purple-400 absolute blur-3xl bottom-0"></div>
            {/*blurry blobs */}

            <div className="container flex items-center justify-start h-full py-32 mx-auto">
                <div className="z-10 flex flex-col px-5 xl:flex max-w-xl">
                    <h1 className=" mt-1 text-7xl font-black text-white sm:text-9xl sm:mx-0">Kissat?<div>Kahvi?  </div>
                    </h1>
                    <p className="w-full my-6 text-xl font-bold text-gray-200"><span className="text-pink-400 text-2xl">Purrrfect!</span>  Olet täysin oikeassa paikassa 🐈</p>
                    <div className="flex md:mt-10 gap-3">
                        <ButtonPrimary text="Varaa pöytä" />
                        <ButtonSecondary text="Ota yhteyttä" />
                    </div>
                </div>
                <div className="absolute w-screen bottom-0 left-1/2 -translate-x-1/2">
                    <p className="flex font-AmaticSC justify-center text-2xl text-white font-bold -skew-y-3">Scrollaa alas nähdäksesi lisää!</p>
                    <svg
                        className="w-16 h-16 mx-auto text-pink-500  mb-6"
                        width="24px" height="24px" viewBox="0 0 24 24" fill="#ec4899" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" d="M18.5303 9.46967C18.8232 9.76256 18.8232 10.2374 18.5303 10.5303L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303L5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 9.46967C5.76256 9.17678 6.23744 9.17678 6.53033 9.46967L12 14.9393L17.4697 9.46967C17.7626 9.17678 18.2374 9.17678 18.5303 9.46967Z" fill="currentColor" />
                    </svg>
                </div>

            </div>
        </section >
    )
}

export default Hero