import React from 'react'
import ButtonPrimary from './buttons/button-primary'

const InfoBlockReverse = (props) => {
    return (
        <div className="flex flex-col mb-8 sm:flex-row">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12">
                <img className="drop-shadow-2xl" src={props.imgSrc} alt="" />
            </div>
            <div className="flex flex-col text-center justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
                <h3 className="mt-2 text-6xl sm:text-left md:text-7xl font-AmaticSC">{props.title}</h3>
                <p className="my-5 text-lg text-gray-700 text md:text-left">{props.text}</p>
                <div className="flex justify-center sm:justify-start ">
                    <ButtonPrimary
                        url="#"
                        text={props.buttonText}
                        styles="bg-teal-50 border border-gray-900 hover:bg-teal-100 "
                    />
                </div>
            </div>
        </div>
    )
}

export default InfoBlockReverse