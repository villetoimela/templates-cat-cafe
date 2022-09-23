import React from 'react'

const ButtonPrimary = (props) => {
    return (
        <a href="#" className="px-8 py-3 text-center font-bold text-sm sm:text-base text-white bg-pink-500 border-2 border-pink-500 rounded-xl hover:bg-pink-600 duration-200">{props.text}</a>
    )
}

export default ButtonPrimary