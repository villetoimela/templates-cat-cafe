/* eslint-disable @next/next/no-img-element */
import React from 'react'

const ImageGalleryCard = (props) => {
    return (
        <div className="relative overflow-hidden rounded-xl shadow-2xl group">
            <img className="object-cover w-full h-72 xl:h-80" src={props.imgSrc} alt={props.imgAlt} />
            <div className="absolute inset-0 px-6 py-4 text-center duration-300 opacity-0 group-hover:opacity-100">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 opacity-60 to-purple-700"></div>
                <div className="relative flex flex-col items-center justify-center w-full h-full">
                    <p className="mb-1 text-lg font-bold text-white">{props.title}</p>
                    <p className="mb-4 text-xs tracking-wide text-blue-50">{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default ImageGalleryCard