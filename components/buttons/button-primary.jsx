import React from 'react'

const ButtonPrimary = (props) => {
    return (
        <a href={props.url} className={` ${props.styles} px-8 py-3 text-center text-sm sm:text-base duration-200 rounded-xl `}>{props.text}</a>
    )
}

export default ButtonPrimary