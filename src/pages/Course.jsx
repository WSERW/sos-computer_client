import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCourse } from '../api'

import '../css/course.css'

import laptop from '../img/laptop.svg'
import blop from '../img/blop.svg'
import phone from '../img/phone.svg'
import phoneSm from '../img/phone_sm.svg'
import send from '../img/send.svg'

import freelancer from '../img/freelance.svg'
import brand from '../img/brand.svg'
import studia from '../img/studia.svg'

import plus from '../img/plus.svg'
import minus from '../img/minus.svg'


import clock from '../img/clock.svg'
import cash from '../img/cash.svg'
import about from '../img/about.png'
import inst from '../img/inst.svg'
import vk from '../img/vk.svg'
import yt from '../img/yt.svg'
import sertificate1 from '../img/sertificate1.png'
import sertificate2 from '../img/sertificate2.png'
import quest from '../img/quest.svg'
import faqBoy from '../img/faq_boy.svg'

import ProgramCard from '../components/program/ProgramCard'
import PlanCard from '../components/PlanCard'
import ModalEnroll from '../modals/ModalEnroll'
import Waves from '../components/Waves'
import FAQ from '../components/faq/FAQ'

const apiUrl = process.env.REACT_APP_API_URL
const Course = () => {
    const params = useParams()

    const [data, setData] = useState(null)

    useEffect(() => {
        getCourse(params.id)
        .then(data => setData(data))
    }, []);
    return (
        <div>
            <header>
                <div className="container">
                    <div className="header">
                        <div className="header__text">
                            <h1>Курс <span>"{data ? data.name : ''}"</span></h1>
                            <p>{data ? data.description : ''}</p>
                            <ul className="header__list">
                                {data ? data.specs.map(spec =>
                                    <li className="header__item">{spec.text}</li>
                                ) : ''}
                            </ul>
                            <button>Скачать программу</button>
                        </div>
                        <div className="header__img">
                            <img src={laptop} alt="laptop" />
                        </div>
                        <img className="header__blop" src={blop} alt="blop" />
                    </div>
                </div>
            </header>
            <section className="plans">
                <div className="container">
                    <div className="section__heading">
                        <div className="heading__icon">
                            <img src={quest} alt="" />
                        </div>
                        <h2>Варианты обучения</h2>
                    </div>
                    <div className="plans__cards">
                        {data ? data.levels.map(plan =>
                            <PlanCard {...plan}  tag={data.tag} />
                        ) : ''}
                    </div>
                </div>
            </section>
            <section className='program'>
                <div className="container">
                    <div className="section__heading">
                        <div className="heading__icon">
                            <img src={quest} alt="" />
                        </div>
                        <h2>Программа курса</h2>
                    </div>
                    <div className="program__cards">
                        {data ? data.themes.map(theme =>
                            <ProgramCard number={theme.order} title={theme.name} paragraphs={theme.paragraphs} />
                        ) : ''}
                    </div>
                </div>
            </section> 
            <section className="how">
                <div className="container">
                    <div className="section__heading">
                        <div className="heading__icon">
                            <img src={quest} alt="" />
                        </div>
                        <h2>Как записаться и учиться</h2>
                    </div>
                    <div className="how__cards">
                        <div className="how__card">
                            <img src={phone} alt="" />
                            <p>Выбираем направление</p>
                        </div>
                        <div className="how__card">
                            <img src={phone} alt="" />
                            <p>Онлайн или стационар</p>
                        </div>
                        <div className="how__card">
                            <img src={phone} alt="" />
                            <p>Учимся и практикуемся</p>
                        </div>
                        <div className="how__card">
                            <img src={phone} alt="" />
                            <p>Оформляем портфолио </p>
                        </div>
                        <div className="how__card">
                            <img src={phone} alt="" />
                            <p>Выбираем направление</p>
                        </div>
                        <div className="how__card">
                            <img src={phone} alt="" />
                            <p>Выбираем направление</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sertificate">
                <div className="container">
                    <div className="sertificate__wrapper">
                        <div className="sertificate__img">
                            <div className="section__heading">
                                <div className="heading__icon">
                                    <img src={quest} alt="" />
                                </div>
                                <h2>Сертификат Sos Computer Academy</h2>
                            </div>
                            <p className="sertificate__description">Подтвердит, что вы прошли курс, а также станет дополнительным аргументом при устройстве на работу</p>
                            <div className="sertificate__items">
                                <div className="sertificate__item">
                                    <img src={sertificate1} alt="" />
                                </div>
                                <div className="sertificate__item">
                                    <img src={sertificate2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="sertificate__form">
                            <ModalEnroll />
                        </div>
                    </div>
                </div>
            </section>
            <FAQ/>
            <section className="about">
                <div className="container">
                    <div className="about__wrapper">
                        <div className="about__img">
                            <img src={about} alt="" />
                        </div>
                        <div className="about__text">
                            <div className="section__heading">
                                <div className="heading__icon">
                                    <img src={quest} alt="" />
                                </div>
                                <h2>О нас</h2>
                            </div>
                            <p>Мы старейшее образовательное учреждение Донецка в сфере компьютерных технологий. Наша история началась в далёком 1999 году.На данный момент выдано более 5200 дипломов, а лучшие наши выпускники продолжают работу в академии, в качестве преподавателей.Наша цель — преподнести знания, наиболее актуальные для настоящей профессии, без распыления на избыточные материалы.</p>
                            <p>Демократичные цены и широкая сеть офисов по всей области позволят Вам выбрать оптимальный, для себя, вариант.Для корпоративных клиентов мы предоставляем разработку софта, обучение персонала, а также разработку и поддержку сайтов на сервере компании.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='waves'>
                <Waves />
            </section>
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
                                    <img src={quest} alt="" />
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
        </div>
    )
}

export default Course