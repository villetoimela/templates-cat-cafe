import React from 'react'

const Event = (props) => {
    return (
        <div className="max-w-3xl pb-8 mx-auto font-serif md:py-12 lg:py-16">
            <div className="pb-8 border-b md:px-8 md:pb-12 lg:pb-16 border-purple-200 dark:border-gray-750 sm:text-center">
                <div className="block mb-10">
                    <img src={props.imgSrc} className="object-cover object-center w-full md:rounded h-72" />
                </div>

                <div className="w-full px-6 md:px-0">
                    <h2 className="mt-4 font-AmaticSC mb-5 text-4xl font-bold leading-tight tracking-tight md:text-6xl text-darkPurple">
                        {props.title}
                    </h2>

                    <p className="mt-5 text-purple-900">{props.quickInfo}</p>
                    <p className="mb-6 text-purple-900">hinta {props.price}€</p>
                    <p className="text-base text-gray-700 lg:text-lg">
                        {props.text}
                    </p>
                    <p className="text-base text-purple-900 mt-5 lg:text-lg">
                        {props.moreInfo}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Event