import React from 'react'

import logo from '../img/logo.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__team">
                        <h2 className="footer__team-title">Команда</h2>
                        <img className="footer__team-logo" src={logo} alt="" />
                        <p className="footer__team-year">1999-{new Date().getFullYear()}</p>
                    </div>
                    <div className="footer__services">
                        <h3 className="footer__services-title">Наши услуги:</h3>
                        <ul className="footer__services-list">
                            <li><a href="#" className="footer__services-item">Для детей</a></li>
                            <li><a href="#" className="footer__services-item">Для взрослых</a></li>
                            <li><a href="#" className="footer__services-item">Разработка сайтов</a></li>
                            <li><a href="#" className="footer__services-item">Приложения</a></li>
                        </ul>
                    </div>
                    <div className="footer__schedule">
                        <h3 className="footer__schedule-title">График работы:</h3>
                        <ul className="footer__schedule-list">
                            <li><a href="#" className="footer__schedule-item">Пн - пт: 9:00 - 19:00</a></li>
                            <li><a href="#" className="footer__schedule-item">Сб - вс: 9:00 - 18:00</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer