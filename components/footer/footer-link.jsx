import React from 'react'
import Link from 'next/link'

const FooterLink = (props) => {
    return (
        <Link href={`/${props.to}`}>
            <a className="hover:text-purple-400 duration-200">{props.text}</a>
        </Link>
    )
}

export default FooterLink