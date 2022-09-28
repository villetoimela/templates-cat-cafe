import React from 'react'
import Link from 'next/link'
import FooterLink from './footer-link'

const Footer = () => {
    return (
        <footer className="text-center bg-darkPurple">
            <div className="h-24 w-24 md:h-44 md:w-44 rounded-full bg-purple-400 absolute blur-3xl -translate-x-10"></div>
            <div className="h-16 w-16 md:h-24 md:w-24 rounded-full bg-purple-400 absolute blur-2xl right-0 translate-y-32"></div>

            <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto space-y-6">

                    <div className="flex justify-center space-x-6 pb-5">
                        <Link href={"/"}>
                            <a className="text-pink-400 hover:scale-110 duration-150">
                                <svg
                                    width="36px"
                                    height="36px"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g>
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path
                                            fillRule="nonzero"
                                            d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"
                                        />
                                    </g>
                                </svg>
                            </a>
                        </Link>
                        <Link href={"/"}>
                            <a className="text-pink-400 hover:scale-110 duration-150">
                                <svg
                                    width="36px"
                                    height="36px"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 Z M4,4 L4,20 L20,20 L20,4 L4,4 Z M13,12.0043945 L11.1330566,12.0043945 L11.1330566,10.0043945 L13,10.0043945 L13,9 C13,7.34314575 14.3431458,6 16,6 L17,6 L17,8 L16,8 C15.4477153,8 15,8.44771525 15,9 L15,10.0043945 L16.9824219,10.0043945 L16.9824219,12.0043945 L15,12.0043945 L15,18 L13,18 L13,12.0043945 Z"
                                    />
                                </svg>
                            </a>
                        </Link>
                    </div>
                    <div className="w-full md:block hidden max-w-7xl h-px bg-gradient-to-r from-white via-purple-700 to-white mx-auto"></div>
                    <div className="w-full md:hidden block max-w-7xl h-px bg-gradient-to-r from-purple-700 to-white mx-auto"></div>

                    <div className="grid grid-cols-2 gap-4 text-pink-400 p-6 text-sm font-medium sm:grid-cols-3 lg:grid-cols-6">
                        <FooterLink text="Tutustu" />
                        <FooterLink text="Menu" />
                        <FooterLink text="Varaa pöytä" />
                        <FooterLink text="Tapahtumat" />
                        <FooterLink text="Liity klubiin" />
                        <FooterLink text="Ota yhteyttä" />
                    </div>

                    <div className="w-full md:block hidden max-w-7xl h-px bg-gradient-to-r from-white via-purple-700 to-white mx-auto"></div>
                    <div className="w-full md:hidden block max-w-7xl h-px bg-gradient-to-r from-white to-purple-700 mx-auto"></div>
                    <p className="text-xs text-purple-200">© 2022 Hiisi Digital</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer