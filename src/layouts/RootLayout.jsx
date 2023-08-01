import { useContext } from 'react'
import { Outlet } from 'react-router-dom'

import { ModalContext } from '../contexts/ModalContext'
import { DataProvider } from '../contexts/DataContext'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ScrollToTop from '../components/ScrollTop'
import ModalSuccess from '../modals/ModalSuccess'
import ModalOrder from '../modals/ModalOrder'
import ModalDiscount from '../modals/ModalDiscount'

const RootLayout = () => {
    const { isModalOpen } = useContext(ModalContext);
    return (
        <DataProvider>
            <div className='global_wrapper'>
                <ScrollToTop />
                <Navbar />
                <Outlet />
                <Footer />
                {isModalOpen('success') ? <ModalSuccess /> : ""}
                {isModalOpen('order') ? <ModalOrder /> : ""}
                {isModalOpen('discount') ? <ModalDiscount /> : ""}
            </div>
        </DataProvider>
    )
}

export default RootLayout