/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Fade from "react-reveal/Fade";

const ImageGalleryCard = (props) => {
    return (

        <div className="relative overflow-hidden rounded-xl shadow-2xl group">
            <Fade bottom cascade duration={600}>
                <img className="object-cover w-full h-72 xl:h-80" src={props.imgSrc} alt={props.imgAlt} />
            </Fade>

            <div className="absolute inset-0 px-6 py-4 text-center duration-300 opacity-0 group-hover:opacity-100">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 opacity-60 to-purple-700"></div>
                <Fade bottom cascade duration={600}>
                    <div className="relative flex flex-col items-center justify-center w-full h-full">
                        <p className="mb-1 text-lg font-bold text-white">{props.title}</p>
                        <p className="mb-4 text-xs tracking-wide text-blue-50">{props.text}</p>
                    </div>
                </Fade>
            </div>
        </div >

    )
}

export default ImageGalleryCard