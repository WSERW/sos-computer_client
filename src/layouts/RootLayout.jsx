import { useContext, useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { ModalContext } from '../contexts/ModalContext'
import { DataProvider } from '../contexts/DataContext'

import { trackPageView } from '../yandexMetrika'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ScrollToTop from '../components/ScrollTop'
import ModalSuccess from '../modals/ModalSuccess'
import ModalOrder from '../modals/ModalOrder'
import ModalDiscount from '../modals/ModalDiscount'

const RootLayout = () => {
    const { isModalOpen } = useContext(ModalContext);

    const location = useLocation();
    const prevLocationRef = useRef(null);

    useEffect(() => {
        if (
            (!prevLocationRef.current || location.pathname !== prevLocationRef.current) &&
            !location.hash // Проверка на отсутствие якорного фрагмента
        ) {
            trackPageView(location.pathname);
            console.log(location.pathname)
        }
        prevLocationRef.current = location.pathname;
    }, [location]);
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