import React from 'react'

import './style.css'

import phoneSm from '../../img/phone_sm.svg'
import send from '../../img/send.svg'
import inst from '../../img/inst.svg'
import vk from '../../img/vk.svg'
import yt from '../../img/yt.svg'


const Contacts = () => {
    return (
        <section className="contacts">
            <div className="container">
                <div className="contacts__wrapper">
                    <form action="" className="contacts__form">
                        <label htmlFor="">Оставьте ваше имя</label>
                        <input type="text" name="" id="" placeholder='Имя...' />
                        <label htmlFor="">Номер телефона</label>
                        <input type="text" name="" id="" placeholder='+380...' />
                        <label htmlFor="">Напишите нам</label>
                        <div className="contacts__comment">
                            <textarea placeholder='Введите текст...'></textarea>
                            <button><img src={send} alt="" /></button>
                        </div>
                        <div className="contacts__copyright">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Я даю согласия на обработку своих персональных данных согласно правилам.</label>
                        </div>
                    </form>
                    <div className="contacts__info">
                        <div className="section__heading">
                            <div className="heading__icon">
                                <img src={phoneSm} alt="" />
                            </div>
                            <h2>Контакты</h2>
                        </div>
                        <p className='contacts__description'>Свяжитесь с нами удобным способом или закажите звонок от нашего менеджера:</p>
                        <h3>Телефоны:</h3>
                        <ul className="contacts__phones">
                            <li className="contacts__phone"><img src={phoneSm} alt="" /> +38(095) - 462 - 46 - 72 <a href="viber://add?number=380954624672">Viber</a> <a href="https://api.whatsapp.com/send?phone=380954624672">Whatsapp</a> <a href="https://t.me/SosComputerAcademy">Telegram</a></li>
                            <li className="contacts__phone"><img src={phoneSm} alt="" /> +7(949) - 405 - 68 - 46<a href="https://t.me/SosComputerAcademy">Telegram</a></li>
                            <li className="contacts__phone"><img src={phoneSm} alt="" /> +7(977) - 012 - 01 - 36<a href="https://t.me/SosComputerAcademy">Telegram</a></li>
                        </ul>
                        <h3>Почта:</h3>
                        <ul className="contacts__mails">
                            <li className="contacts__mail">sosca172@gmail.com</li>
                        </ul>
                        <h3>Следите за нами в сосетях:</h3>
                        <ul className="contacts__links">
                            <li className="contacts__link">
                                <a href="https://www.instagram.com/computercourses_in_donetsk/"><img src={inst} alt="" /></a>
                            </li>
                            <li className="contacts__link">
                                <a href="https://vk.com/sos_computer_academy"><img src={vk} alt="" /></a>

                            </li>
                            <li className="contacts__link">
                                <a href="https://www.youtube.com/@SosComputerAcademy"><img src={yt} alt="" /></a>

                            </li>
                        </ul>
                        <button>Заказать звонок</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts