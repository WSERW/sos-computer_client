import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
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