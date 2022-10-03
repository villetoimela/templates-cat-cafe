import React from 'react'

const PrimaryHeader = (props) => {
    return (
        <div className="mb-20 space-y-5 sm:mx-auto sm:max-w-xl md:max-w-2xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="relative text-gray-900 font-AmaticSC text-6xl font-extrabold tracking-tight sm:text-8xl">{props.title}</h2>
            <p className="sm:text-xl text-gray-700">{props.text}</p>
        </div>
    )
}

export default PrimaryHeader