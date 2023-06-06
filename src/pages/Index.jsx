import React, {useEffect,useState} from 'react'

import girl from '../img/girl.svg'
import blop from '../img/blop.svg'
import send from '../img/send.svg'

import phoneSm from '../img/phone_sm.svg'
import hatSm from '../img/hat_sm.svg'
import penSm from '../img/pen_sm.svg'
import bookSm from '../img/book_sm.svg'
import screenSm from '../img/screen_sm.svg'
import lampSm from '../img/lamp_sm.svg'



import phone from '../img/phone.svg'
import screen from '../img/screen.svg'
import book from '../img/book.svg'
import palett from '../img/palett.svg'
import hat from '../img/hat.svg'
import scroll from '../img/scroll.svg'


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

import Navbar from '../components/Navbar'
import CourseCards from '../components/course/CourseCards'
import PlanCard from '../components/PlanCard'
import ModalEnroll from '../modals/ModalEnroll'
import FAQCard from '../components/FAQCard'
import Waves from '../components/Waves'

const Index = () => {
    const [data, setData] = useState(null)
    const [demo, setDemo] = useState(null)

    const [url, setUrl] = useState('')
    useEffect(() => {
        getData()
        getDemo()

    },[]);

    const getData = (url = "https://api.sos-computer.site/") => {
        fetch(url,{
            method: 'GET',
        })
        .then(response => response.json())
        .then(response => setData(response))
        .catch(response => console.log(response,url))

    }
    const getDemo = (url = "https://api.sos-computer.site/demo/") => {
        fetch(url,{
            method: 'GET',
        })
        .then(response => response.json())
        .then(response => setDemo(response))
        .catch(response => console.log(response,url))

    }
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
                    <div className="plans__cards">
                    {demo?demo.map(plan=>
                            <PlanCard name={plan.name} descriptions={plan.specs} price={plan.levels[0].price} priceOld={plan.levels[0].price*1.1} />
                        ):''}
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
            <section className="how">
                <div className="container">
                    <div className="section__heading">
                        <div className="heading__icon">
                            <img src={penSm} alt="" />
                        </div>
                        <h2>Как записаться и учиться</h2>
                    </div>
                    <div className="how__cards">
                        <div className="how__card">
                            <img src={phone} alt="" />
                            <p>Выбираем направление</p>
                        </div>
                        <div className="how__card">
                            <img src={screen} alt="" />
                            <p>Выбираем направление</p>
                        </div>
                        <div className="how__card">
                            <img src={book} alt="" />
                            <p>Выбираем направление</p>
                        </div>
                        <div className="how__card">
                            <img src={palett} alt="" />
                            <p>Выбираем направление</p>
                        </div>
                        <div className="how__card">
                            <img src={hat} alt="" />
                            <p>Выбираем направление</p>
                        </div>
                        <div className="how__card">
                            <img src={scroll} alt="" />
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
            <section className="faq">
                <div className="container">
                    <div className="section__heading">
                        <div className="heading__icon">
                            <img src={quest} alt="" />
                        </div>
                        <h2>Популярные вопросы</h2>
                    </div>
                    <div className="faq__block">
                        <div className="faq__cards">
                            <FAQCard title={'Какие у вас есть формы обучения?'} text={'Вы можете выбрать один из наших многочисленных офисов, либо взять своего преподавателя в скайпе или дискорде. Качество образования одинаково в обоих случаях, все темы изучаются до полного усвоения учеником. Практика прорабатывается для получения навыков, необходимых при работе в крупных компаниях.'} />
                            <FAQCard title={'Сколько длятся курсы?'} text={'Каждый курс имеет разную продолжительность. Курсы для детей занимают 1,3 - 1,5 года. Взрослые направления обычно занимают от 2 до 6 месяцев, со своим преподавателем. Некоторые сложные дисциплины требуют освоения двух курсов, например fullstack программирование.'} />
                            <FAQCard title={'Как узнать стоимость обучения по каждому курсу?'} text={'Поскольку мы представлены в разных городах, стоимость немного отличается для каждого случая. Пожалуйста, позвоните нам, либо воспользуйтесь удобной социальной сетью, чтобы узнать актуальные цены на любой из наших курсов.'} />
                            <FAQCard title={'Какие есть варианты и способы оплаты?'} text={'Вы можете оплатить несколькими способами. При посещении любого офиса, вы можете заключить договор обучения на месте и оплатить наличными. Если вы занимаетесь онлайн, вы можете оплатить курс в банке по предоставленным реквизитам. Также вы можете воспользоваться переводом денег на карту ПриватБанка или СберБанка, если другие варианты вам не подходят. Мы пересчитаем стоимость в удобную валюту, если вы живёте за рубежом.'} />
                            <FAQCard title={'Поомогаете ли вы с трудоустройством?'} text={'У нас есть большая база работодателей, а также часто появляются вакансии от партнёров. Некоторые успешные ученики проходят стажировку у нас и работают в качестве преподавателей в различных городах и онлайн. Если ни один из этих вариантов вам не подойдёт, мы поможем сформировать резюме и портфолио, чтобы достойно представить вас работодателям.'} />
                        </div>
                        <div className="faq__img">
                            <img src={faqBoy} alt="" />
                        </div>
                    </div>

                </div>
            </section>
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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod enim deserunt sunt illo animi harum. Ducimus qui quam ex.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis officiis iure perferendis praesentium fuga atque quos, laboriosam necessitatibus libero dolorem temporibus quas quis incidunt qui corporis facilis reiciendis? Voluptas.
                                Quas quaerat molestiae illo modi dicta fugit earum voluptatem ad enim inventore culpa minima repudiandae esse debitis, fuga adipisci veritatis tempore qui a omnis. Ipsam corporis iusto ducimus ut totam.
                                Quia cumque blanditiis veritatis saepe veniam, amet accusantium incidunt optio laborum illum distinctio! Quis iusto et dicta accusantium dolorem pariatur laboriosam veniam, sequi fugit aliquid distinctio exercitationem quaerat, cupiditate vitae.
                            </p>
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
                            <input type="text" name="" id="" placeholder='Имя...'/>
                            <label htmlFor="">Номер телефона</label>
                            <input type="text" name="" id="" placeholder='+380...'/>
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
            <footer></footer>
        </div>
    )
}

export default Index