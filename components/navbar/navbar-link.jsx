import React from 'react'
import Link from 'next/link'

const NavbarLink = (props) => {
    return (
        <li className="nav-item">
            <Link href={"/"}>
                <a className="text-sm tracking-wide cursor-pointer font-bold text-pink-400 transition-colors duration-200 hover:text-purple-400">
                    <span className="ml-2">{props.text}</span>
                </a>
            </Link>
        </li>

    )
}

export default NavbarLink