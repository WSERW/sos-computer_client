import React from 'react'
import { Link } from 'react-router-dom';

import Drop from './Drop'

import logo from '../img/logo.svg'
import {ReactComponent as Inst} from '../img/inst.svg'
import vk from '../img/vk.svg'
import yt from '../img/yt.svg'
import burger from '../img/burger.svg'

const Navbar = () => {
  return (
    <nav>
        <div className="container">
            <div className="navbar">
                <Link to='/' className="logo">
                    <img src={logo} alt="" />
                </Link>
                <div className="navbar__numbers">
                    <a href="tel:+380954624672" className="">+38 (095) - 462 - 46 - 72</a>
                    <a href="tel:+79494056846" className="">+7 (949) - 405 - 68 - 46</a>
                </div>
                <div className="navbar__social">
                    <div className="navbar__social_item">
                        <a href="https://www.instagram.com/computercourses_in_donetsk/">
                            <Inst/>
                        </a>
                    </div>
                    <div className="navbar__social_item">
                        <a href="https://vk.com/sos_computer_academy">
                            <img src={vk} alt="" />
                        </a>
                    </div>
                    <div className="navbar__social_item">
                        <a href="https://www.youtube.com/@SosComputerAcademy">
                            <img src={yt} alt="" />
                        </a>
                    </div>
                </div>
                <ul className="navbar__nav">
                    <li className="navbar__item"><Link to='/' className="navbar__link">Про академию</Link></li>
                    <li className="navbar__item"><Link to='/' className="navbar__link">Курсы</Link></li>
                    <li className="navbar__item"><a href="#" className="navbar__link">Контакты</a></li>
                </ul>
                <button className='navbar__toggler'>
                    <img src={burger} alt="" />
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar