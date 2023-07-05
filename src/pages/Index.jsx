import React, { useEffect, useState } from 'react'
import { getCourses, getDemoCourses } from '../api'

import girl from '../img/girl.svg'
import blop from '../img/blop.svg'
import send from '../img/send.svg'

import phoneSm from '../img/phone_sm.svg'
import hatSm from '../img/hat_sm.svg'
import penSm from '../img/pen_sm.svg'
import bookSm from '../img/book_sm.svg'
import screenSm from '../img/screen_sm.svg'
import lampSm from '../img/lamp_sm.svg'





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


import CourseCards from '../components/course/CourseCards'
import PlanCard from '../components/PlanCard'
import ModalEnroll from '../modals/ModalEnroll'
import Waves from '../components/Waves'
import FAQ from '../components/faq/FAQ'
import How from '../components/how/How'


const Index = () => {
    const [data, setData] = useState(null)
    const [demo, setDemo] = useState(null)


    useEffect(() => {
        getCourses()
        .then(data => setData(data))
        getDemoCourses()
        .then(data => setDemo(data))
    }, []);

    return (
        <div>
            <header>
                <div className="container">
                    <div className="header">
                        <div className="header__text">
                            <h1>Компьютерные курсы доступны каждому, вместе с <span>сос компьютер</span></h1>
                            <p>Изучайте курсы программирования, веб дизайн, 3д моделирование, маркетинг, SEO, SMM, с нуля, занимаясь со своим преподавателем онлайн или в сети наших офисов.</p>
                            <ul className="header__list">
                                <li className="header__item">Подходит для начинающих</li>
                                <li className="header__item">Индивидуальный график</li>
                                <li className="header__item">Личный педагог</li>
                            </ul>
                            <button>Заказать звонок</button>
                        </div>
                        <div className="header__img">
                            <img src={girl} alt="girl" />
                        </div>
                        <img className="header__blop" src={blop} alt="blop" />
                    </div>
                </div>
            </header>
            <section className="ways">
                <div className="container">
                    <div className="section__heading">
                        <div className="heading__icon">
                            <img src={hatSm} alt="" />
                        </div>
                        <h2>Наши направления</h2>
                    </div>
                    <CourseCards courses={data} />
                </div>
            </section>
            <section className="banner">
                <div className="container">
                    <div className="banner__wrapper">
                        <div className="banner__icon">!</div>
                        <p>Мы следим за акутальностью курса и технологий, чтобы ваши навыки максимально соответствовали реальной работе в iT сфере.</p>
                    </div>
                </div>
            </section>
            <section className="plans">
                <div className="container">
                    <div className="section__heading">
                        <div className="heading__icon">
                            <img src={bookSm} alt="" />
                        </div>
                        <h2>Варианты обучения</h2>
                    </div>
                    <div className="plans__subheading">
                        <div className="plans__subheading_left">Курсы стартуют <span>каждый месяц</span></div>
                        <div className="plans__subheading_right">Мы подберем группу или индивидуального педагога под ваш уровень и направление</div>

                    </div>
                    <div className="plans__cards">
                        {demo ? demo.map(plan =>
                            <PlanCard {...plan.levels[0]} name={plan.name} tag={plan.tag} />
                        ) : ''}
                    </div>
                </div>
            </section>
            <section className="for">
                <div className="container">
                    <div className="for__wrapper">
                        <h2>Для кого наши курсы</h2>
                        <ul className="for__list">
                            <li className="for__item"><span>Детей</span>, чтобы получить современное образование.</li>
                            <li className="for__item"><span>Студентов</span>, которые хотят стать частью индустрии.</li>
                            <li className="for__item"><span>Бизнесменов</span>, нуждающихся в сайте, приложении, продвижение своего бренда и разработки софта.</li>
                        </ul>
                    </div>
                </div>
            </section>
            <How/>
            <section className="sertificate">
                <div className="container">
                    <div className="sertificate__wrapper">
                        <div className="sertificate__img">
                            <div className="section__heading">
                                <div className="heading__icon">
                                    <img src={penSm} alt="" />
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
            <section className="abilities">
                <div className="container">
                    <div className="section__heading">
                        <div className="heading__icon">
                            <img src={lampSm} alt="" />
                        </div>
                        <h2>Как применить знания</h2>
                    </div>
                    <div className="abilities__cards">
                        <div className="abilities__card">
                            <div className="abilities__card_head">
                                <img src={studia} alt="" />
                            </div>
                            <div className="abilities__card_body">
                                <h3>Студия</h3>
                                <p>Стабильная высокая зарплата, гибкий график и дружный колектив. Немного печенья и кофе.</p>
                                <div className="abilities__card_spec">
                                    <div className="abilities__card_time">
                                        <img src={clock} alt="" />
                                        <img src={minus} alt="" />
                                        <img src={minus} alt="" />
                                    </div>
                                    <div className="abilities__card_money">
                                        <img src={cash} alt="" />
                                        <img src={plus} alt="" />
                                        <img src={plus} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="abilities__card">
                            <div className="abilities__card_head">
                                <img src={brand} alt="" />
                            </div>
                            <div className="abilities__card_body">
                                <h3>Свой бренд</h3>
                                <p>Без навыков и капитала сюда не попасть, но возможное вознаграждение усилий того стоит.</p>
                                <div className="abilities__card_spec">
                                    <div className="abilities__card_time">
                                        <img src={clock} alt="" />
                                        <img src={minus} alt="" />
                                        <img src={minus} alt="" />
                                        <img src={minus} alt="" />
                                    </div>
                                    <div className="abilities__card_money">
                                        <img src={cash} alt="" />
                                        <img src={plus} alt="" />
                                        <img src={plus} alt="" />
                                        <img src={plus} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="abilities__card">
                            <div className="abilities__card_head">
                                <img src={freelancer} alt="" />
                            </div>
                            <div className="abilities__card_body">
                                <h3>Фриланс</h3>
                                <p>Простой, для новичков, путь, который, однако, требует много времени на развите своего профиля.</p>
                                <div className="abilities__card_spec">
                                    <div className="abilities__card_time">
                                        <img src={clock} alt="" />
                                        <img src={minus} alt="" />
                                    </div>
                                    <div className="abilities__card_money">
                                        <img src={cash} alt="" />
                                        <img src={plus} alt="" />
                                    </div>
                                </div>
                            </div>
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
                                    <img src={screenSm} alt="" />
                                </div>
                                <h2>О нас</h2>
                            </div>
                            <blockquote>Работать надо не 12 часов, а головой. — Стив Джобс</blockquote>
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
        </div>
    )
}

export default Index