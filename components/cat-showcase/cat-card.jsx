/* eslint-disable @next/next/no-img-element */
import React from 'react'

const CatCard = (props) => {
    return (
        <div className="space-y-6 text-center lg:ml-0 md:ml-10 ">
            <div className="relative w-48 h-48 p-2 mx-auto md:w-56 md:h-56">
                <img className="relative z-20 w-full h-full rounded-xl object-contain" src={props.catImage} alt="" />
                <svg className={`${props.blobColor} absolute inset-0 w-full h-full transform scale-150 fill-current opacity-10`} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41.4,-70.8C54.1,-64.5,65,-54.1,70.7,-41.7C76.5,-29.2,77.1,-14.6,76.9,-0.1C76.6,14.3,75.5,28.6,68.8,39.5C62.1,50.3,49.9,57.7,37.5,63.5C25.1,69.3,12.5,73.5,-0.6,74.4C-13.6,75.4,-27.3,73.1,-37.6,66.1C-47.9,59.1,-54.8,47.4,-63.1,35.6C-71.4,23.8,-81,11.9,-83.2,-1.3C-85.4,-14.4,-80.1,-28.8,-70.3,-38C-60.5,-47.1,-46.1,-51.1,-33.6,-57.5C-21.2,-64,-10.6,-73,1.9,-76.3C14.4,-79.6,28.8,-77.2,41.4,-70.8Z" transform="translate(100 100)" className=""></path>
                </svg>
            </div>
            <div className="space-y-2">
                <div className="space-y-1 text-lg font-medium leading-6">
                    <h3 className="text-4xl font-bold font-AmaticSC">{props.catName}</h3>
                    <p className={` ${props.textColor} text-pink-500`}>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default CatCard