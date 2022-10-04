import React from 'react'

const ButtonSecondary = (props) => {
    return (
        <a href={props.url} className={` ${props.styles} px-8 py-3 text-center font-bold text-sm sm:text-base text-white border-2 border-pink-500 rounded-xl hover:bg-pink-500 duration-200`}>{props.text}</a>
    )
}

export default ButtonSecondary