import React from 'react'
import Link from 'next/link'

const NavbarLink = (props) => {
    return (
        <li className="nav-item">
            <Link href={`/${props.to}`}>
                <a className="text-2xl font-AmaticSC tracking-wide cursor-pointer font-bold text-white transition-colors duration-200 hover:text-purple-400">
                    <span className="ml-2">{props.text}</span>
                </a>
            </Link>
        </li>

    )
}

export default NavbarLink