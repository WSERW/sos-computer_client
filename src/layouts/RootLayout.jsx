import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ScrollToTop from '../components/ScrollTop'

const RootLayout = () => {
    return (
        <div>
            <ScrollToTop/>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default RootLayout