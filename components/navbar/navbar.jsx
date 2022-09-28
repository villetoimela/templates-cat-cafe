import React from 'react'
import Link from 'next/link';
import NavbarLink from './navbar-link';
import Image from 'next/image';

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const close = () => setNavbarOpen(false);

    const genericHamburgerLine = `h-[3px] rounded-xl w-6 my-0.5 bg-pink-400 transition ease transform duration-300`;

    return (
        <nav className="fixed top-0 py-5 z-40 bg-transparent backdrop-blur-sm bg-opacity-40 w-full px-8 ">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <Link
                        href={"/"}>
                        <a className="cursor-pointer rotate-45 absolute top-1/2 -translate-y-[25px]">
                            <Image
                                alt="Jalkahoito Tunturiretki Logo"
                                width={45}
                                height={45}
                                src={"/kissantassut.svg"}>
                            </Image>
                        </a>
                    </Link>
                    <p></p>
                    <button
                        className="flex flex-col justify-center items-center group lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}>
                        <div
                            className={`${genericHamburgerLine} ${navbarOpen
                                ? "rotate-45 translate-y-2  group-hover:opacity-100"
                                : "opacity-100 group-hover:opacity-100"
                                }`}
                        />
                        <div
                            className={`${genericHamburgerLine} ${navbarOpen
                                ? "opacity-0"
                                : "opacity-100 group-hover:opacity-100"
                                }`}
                        />
                        <div
                            className={`${genericHamburgerLine} ${navbarOpen
                                ? "-rotate-45 -translate-y-1.5 opacity-100 group-hover:opacity-100"
                                : "opacity-100 group-hover:opacity-100"
                                }`}
                        />
                    </button>
                </div>
                <div
                    className={
                        "lg:flex items-center" + (navbarOpen ? "  flex" : " hidden")
                    }>
                    <ul
                        onClick={close}
                        className="flex flex-col lg:pt-0 pt-10 lg:space-y-0 space-y-6 lg:flex-row lg:space-x-12 list-none lg:ml-auto">
                        <NavbarLink text="Tutustu" />
                        <NavbarLink text="Menu" />
                        <NavbarLink text="Varaa pöytä" />
                        <NavbarLink text="Tapahtumat" />
                        <NavbarLink text="Liity klubiin" />
                        <NavbarLink text="Ota yhteyttä" />
                    </ul>
                </div>
            </div>
        </nav >

    )
}

export default Navbar