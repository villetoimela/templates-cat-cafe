/* eslint-disable @next/next/no-img-element */
import React from 'react'
import ImageGalleryCard from './image-gallery-card'
import Fade from "react-reveal/Fade";

const ImageGallery = () => {
    return (
        <section className="bg-gradient-to-t from-purple-200 via-purple-50 to-purple-200">
            <div className="py-14 pl-4 pr-4 mx-auto ml-auto mr-auto bg-top bg-cover max-w-7xl md:px-24 lg:px-12 lg:py-20">
                <Fade bottom cascade duration={600}>
                    <div className="mb-10 ml-auto mr-auto bg-top bg-cover max-w-7xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-16">
                        <h1 className=" font-extralight text-6xl font-AmaticSC lg:text-8xl mt-10">Sneak peek kuvina</h1>
                        <div className="w-full md:block hidden max-w-7xl h-px bg-gradient-to-r my-5 from-white via-purple-700 to-white mx-auto"></div>
                        <div className="w-full md:hidden block max-w-7xl h-px bg-gradient-to-r my-5 from-purple-700 to-white mx-auto"></div>
                        <p className=" text-gray-700 text-base md:max-w-md mx-auto lg:max-w-none italic">Muutama kuva jotka kertoo enemmän kuin tuhat sanaa siitä minkälainen tunnelma meillä kahvilassa on!</p>
                    </div>
                </Fade>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

                    <ImageGalleryCard
                        imgSrc="https://images.unsplash.com/photo-1617181669346-e41bb86eebfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0JTIwY2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        imgAlt="kuva kissakahvilan kissasta"
                        title="Meidän ihana Mörri"
                        text="Mörri tykkää hengailla pöydillä kahviseuranasi"
                    />

                    <ImageGalleryCard
                        imgSrc="https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhdCUyMGNhZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                        imgAlt="kuva erikoiskahvista"
                        title="Erikoiskahvimme"
                        text="Meiltä aivan huikean herkulliset erikosikahvit"
                    />

                    <ImageGalleryCard
                        imgSrc="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        imgAlt="kuva kissakahvilan kissasta"
                        title="Kömpelö Jaskamme"
                        text="Jaska on meidän kämpelö kissa, mutta aivan hurmaava siitä huolimatta! (tai juuri sen takia)"
                    />

                    <ImageGalleryCard
                        imgSrc="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0JTIwY2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        imgAlt="kuva kissakahvilasta"
                        title="Valkea Viki"
                        text="Viki on meidän kissoista uteliain, hän rakastaa yli kaiken rapsutuksia."
                    />

                    <ImageGalleryCard
                        imgSrc="https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        imgAlt="kuva kahvista ja limonadista"
                        title="Kahvien lisäksi meiltä myös virvokkeita"
                        text="Meillä on oma nimikko limonadikin, tule maistamaan!"
                    />

                    <ImageGalleryCard
                        imgSrc="https://images.unsplash.com/photo-1617181669950-e0602ed26dbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0JTIwY2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        imgAlt="kuva kissakahvilasta"
                        title="Mörri se taas"
                        text="Kuten huomaamme, Mörri on myös meidän ihka oma linssilude"
                    />
                </div>
                <div className="flex justify-center items-center lg:pt-20 pt-14">
                    <img className="h-auto w-60 animate-slowSpin drop-shadow-2xl" src="/kissa-yingyang.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default ImageGallery