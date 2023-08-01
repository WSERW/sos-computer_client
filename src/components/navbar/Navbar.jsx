import { useState } from 'react'
import { Link } from 'react-router-dom';

import './style.css'

import { ReactComponent as Inst } from '../../img/inst.svg'
import { ReactComponent as Vk } from '../../img/vk.svg'
import { ReactComponent as Yt } from '../../img/yt.svg'
import burger from '../../img/burger.svg'
import PopUp from '../popup/PopUp';
import Logo from '../Logo';

const Navbar = () => {
    const [isPopup, setIsPopup] = useState(false);
    const [isNavbar, setIsNavbar] = useState(false);

    const showPopup = () => {
        setIsPopup(true)
    }

    const closePopup = () => {
        setIsPopup(false)
        console.log('close popup')

    }

    const togglePopup = () => {
        setIsPopup(!isPopup)
    }

    const openNavbar = () => {
        setIsNavbar(true)
    }

    const closeNavbar = (e) => {
        if (e.target.id != 'course__toggler') {
            setIsNavbar(false)
            console.log(1)
        }
        console.log(2)
    }

    const toggleNavbar = () => {
        setIsNavbar(!isNavbar)
    }

    return (
        <nav>
            <div className="container">
                <div className="navbar">
                    <Logo />
                    <div className="navbar__numbers">
                        <a href="tel:+380954624672" className="">+38 (095) - 462 - 46 - 72</a>
                        <a href="tel:+79494056846" className="">+7 (949) - 405 - 68 - 46</a>
                    </div>
                    <div className="navbar__social">
                        <div className="navbar__social_item">
                            <a href="https://www.instagram.com/computercourses_in_donetsk/">
                                <Inst />
                            </a>
                        </div>
                        <div className="navbar__social_item">
                            <a href="https://vk.com/sos_computer_academy">
                                <Vk />
                            </a>
                        </div>
                        <div className="navbar__social_item">
                            <a href="https://www.youtube.com/@SosComputerAcademy">
                                <Yt />
                            </a>
                        </div>
                    </div>
                    <ul className={`navbar__nav ${isNavbar ? 'active' : ''}`} onClick={(e) => { closeNavbar(e) }}>
                        <li className="navbar__item"><Link to='/' className="navbar__link">Про академию</Link></li>
                        <li className="navbar__item"><button id='course__toggler' className="navbar__link" onClick={togglePopup} >Курсы</button></li>
                        <PopUp isPopup={isPopup} closePopup={closePopup} />
                        <li className="navbar__item"><a href="#contacts" className="navbar__link">Контакты</a></li>
                    </ul>
                    <button className='navbar__toggler' onClick={toggleNavbar}>
                        <img src={burger} alt="" />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar