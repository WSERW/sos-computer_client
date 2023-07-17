import { useContext } from 'react'
import { Outlet } from 'react-router-dom'

import { ModalContext } from '../contexts/ModalContext'
import { DataProvider } from '../contexts/DataContext'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ScrollToTop from '../components/ScrollTop'
import ModalSuccess from '../modals/ModalSuccess'

const RootLayout = () => {
    const { showModal } = useContext(ModalContext);
    return (
        <DataProvider>
            <div className='global_wrapper'>
                <ScrollToTop />
                <Navbar />
                <Outlet />
                <Footer />
                {showModal ? <ModalSuccess /> : ""}
            </div>
        </DataProvider>
    )
}

export default RootLayout