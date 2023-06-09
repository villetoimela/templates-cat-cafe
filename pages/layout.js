import React from 'react'
import Footer from '../components/footer/footer'
import Navbar from '../components/navbar/navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main> {children} </main>
            <Footer />
        </>
    )
}

export default Layout