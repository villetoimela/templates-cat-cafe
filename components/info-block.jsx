/* eslint-disable @next/next/no-img-element */
import React from 'react'
import ButtonPrimary from './buttons/button-primary'

const InfoBlock = (props) => {
    return (
        <div className="flex flex-col py-20 sm:flex-row">
            <div className="flex drop-shadow-2xl items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
                <img className="drop-shadow-2xl" src={props.imgSrc} alt="" />
            </div>
            <div className="flex flex-col text-center justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
                <h3 className="mt-2 text-6xl text-gray-900 sm:text-left md:text-7xl font-AmaticSC">{props.title}</h3>
                <p className="my-5 text-lg text-gray-700 text md:text-left ">{props.text}</p>
                <div className="flex justify-center sm:justify-start ">
                    <ButtonPrimary
                        url="#"
                        text={props.buttonText}
                        styles="bg-teal-50 border border-gray-900 hover:bg-teal-100"
                    />
                </div>
            </div>
        </div>
    )
}

export default InfoBlock