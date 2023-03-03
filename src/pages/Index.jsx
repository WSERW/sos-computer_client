import React from 'react'
import girl from '../img/girl.svg'
import blop from '../img/blop.svg'
import phone from '../img/phone.svg'
import freelancer from '../img/freelance.svg'
import clock from '../img/clock.svg'
import cash from '../img/cash.svg'
import about from '../img/about.png'
import inst from '../img/inst.svg'
import vk from '../img/vk.svg'
import yt from '../img/yt.svg'



import sertificate1 from '../img/sertificate1.png'
import sertificate2 from '../img/sertificate2.png'
import CourseCard from '../components/CourseCard'
import PlanCard from '../components/PlanCard'
import ModalEnroll from '../modals/ModalEnroll'
import FAQCard from '../components/FAQCard'
import Waves from '../components/Waves'

const Index = () => {
    return (
        <div>
            <nav></nav>
            <header>
                <div className="container">
                    <div className="header">
                        <div className="header__text">
                            <h1>Компьютерные курсы доступны каждому, вместе с <span>сос компьютер</span></h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi a incidunt molestiae ab tenetur magnam?</p>
                            <ul className="header__list">
                                <li className="header__item">Lorem, ipsum dolor.</li>
                                <li className="header__item">Lorem, ipsum dolor.</li>
                                <li className="header__item">Lorem, ipsum dolor.</li>
                            </ul>
                            <button>Заказать звонок</button>
                        </div>
                        <div className="header__img">
                            <img src={girl} alt="girl" />
                        </div>
                    </div>
                </div>
                <img className="header__blop" src={blop} alt="blop" />
            </header>
            <section className="ways">
                <div className="container">
                    <div className="section__heading">
                        <h2>Наши направления</h2>
                    </div>
                    <div className="ways__wrapper">
                        <div className="ways__buttons">
                            <div className="ways__categories">

                            </div>
                            <div className="ways__nav">

                            </div>
                        </div>
                        <div className="ways__slides">
                            <div className="ways__slide">
                                <CourseCard name={'Веб-дизайн'} descriptions={['Свой преподаватель', '2 - 3 раза в неделю', '2 - 4.5 месяца']} />
                            </div>
                            <div className="ways__slide">
                                <CourseCard name={'Веб-дизайн'} descriptions={['Свой преподаватель', '2 - 3 раза в неделю', '2 - 4.5 месяца']} />
                            </div>
                            <div className="ways__slide">
                                <CourseCard name={'Веб-дизайн'} descriptions={['Свой преподаватель', '2 - 3 раза в неделю', '2 - 4.5 месяца']} />
                            </div>
                            <div className="ways__slide">
                                <CourseCard name={'Веб-дизайн'} descriptions={['Свой преподаватель', '2 - 3 раза в неделю', '2 - 4.5 месяца']} />
                            </div>
                            <div className="ways__slide">
                                <CourseCard name={'Веб-дизайн'} descriptions={['Свой преподаватель', '2 - 3 раза в неделю', '2 - 4.5 месяца']} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="banner">
                <div className="container">
                    <div className="banner__wrapper">
                        <h2>Lorem ipsum dolor sit amet.</h2>
                    </div>
                </div>
            </section>
            <section className="plans">
                <div className="container">
                    <div className="section__heading">
                        <h2>Варианты обучения</h2>
                    </div>
                    <div className="plans__cards">
                        <PlanCard name={'Индивидуально и микро-группы для детей'} descriptions={['Свой преподаватель', '2 - 3 раза в неделю', '2 - 4.5 месяца']} price={5400} priceOld={6000} />
                        <PlanCard name={'Индивидуально и микро-группы для детей'} descriptions={['Свой преподаватель', '2 - 3 раза в неделю', '2 - 4.5 месяца']} stage='продвинутый' price={5400} priceOld={6000} />
                        <PlanCard name={'Индивидуально и микро-группы для детей'} descriptions={['Свой преподаватель', '2 - 3 раза в неделю', '2 - 4.5 месяца']} stage='под работу' price={5400} priceOld={6000} />
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
                        <h2>Как записаться и учиться</h2>
                    </div>
                    <div className="how__cards">
                        <div className="how__card">
                            <img src={phone} alt="" />
                            <p>Выбираем направление</p>
                        </div>
                        <div className="how__card">
                            <img src={phone} alt="" />
                            <p>Выбираем направление</p>
                        </div>
                        <div className="how__card">
                            <img src={phone} alt="" />
                            <p>Выбираем направление</p>
                        </div>
                        <div className="how__card">
                            <img src={phone} alt="" />
                            <p>Выбираем направление</p>
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
                            <h2>Сертификат Sos Computer Academy</h2>
                            <p>Подтвердит, что вы прошли курс, а также станет дополнительным аргументом при устройстве на работу</p>
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
                        <h2>Как применить знания</h2>
                    </div>
                    <div className="abilities__cards">
                        <div className="abilities__card">
                            <div className="abilities__card_head">
                                <img src={freelancer} alt="" />
                            </div>
                            <div className="abilities__card_body">
                                <h3>Фриланс</h3>
                                <p>Простой, для новичков, путь ,который, однако, требует много времени на развите своего профиля.</p>
                                <div><img src={clock} alt="" /><span className="time">-</span><img src={cash} alt="" /><span className="money">+</span></div>
                            </div>
                        </div>
                        <div className="abilities__card">
                            <div className="abilities__card_head">
                                <img src={freelancer} alt="" />
                            </div>
                            <div className="abilities__card_body">
                                <h3>Фриланс</h3>
                                <p>Простой, для новичков, путь ,который, однако, требует много времени на развите своего профиля.</p>
                                <div><img src={clock} alt="" /><span className="time">-</span><img src={cash} alt="" /><span className="money">+</span></div>
                            </div>
                        </div>
                        <div className="abilities__card">
                            <div className="abilities__card_head">
                                <img src={freelancer} alt="" />
                            </div>
                            <div className="abilities__card_body">
                                <h3>Фриланс</h3>
                                <p>Простой, для новичков, путь ,который, однако, требует много времени на развите своего профиля.</p>
                                <div><img src={clock} alt="" /><span className="time">-</span><img src={cash} alt="" /><span className="money">+</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faq">
                <div className="container">
                    <div className="section__heading">
                        <h2>Популярные вопросы</h2>
                    </div>
                    <div className="faq__cards">
                        <FAQCard title={'Какие у вас формы обучения'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odit nemo est officia, vero asperiores repellendus cumque necessitatibus suscipit aliquid ut dicta molestiae, fuga in qui ducimus voluptatum quisquam. Pariatur.'} />
                        <FAQCard title={'Какие у вас формы обучения'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odit nemo est officia, vero asperiores repellendus cumque necessitatibus suscipit aliquid ut dicta molestiae, fuga in qui ducimus voluptatum quisquam. Pariatur.'} />
                        <FAQCard title={'Какие у вас формы обучения'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odit nemo est officia, vero asperiores repellendus cumque necessitatibus suscipit aliquid ut dicta molestiae, fuga in qui ducimus voluptatum quisquam. Pariatur.'} />
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
                            <h2>О нас</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod enim deserunt sunt illo animi harum. Ducimus qui quam ex.</p>
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
                            <input type="text" name="" id="" />
                            <label htmlFor="">Номер телефона</label>
                            <input type="text" name="" id="" />
                            <label htmlFor="">Напишите нам</label>
                            <div className="contacts__comment">
                                <textarea></textarea>
                                <button></button>
                            </div>
                            <label htmlFor=""><input type="checkbox" name="" id="" /> Я даю согласия на обработку своих персональных данных согласно правилам.</label>
                        </form>
                        <div className="contacts__info">
                            <h2>Контакты</h2>
                            <p>Свяжитесь с нами удобным способом или закажите звонок от нашего менеджера:</p>
                            <h3>Телефоны:</h3>
                            <ul className="contacts__phones">
                                <li className="contacts__phone">+38(095) - 462 - 46 - 72 <a href="tel:">Viber</a> <a href="tel:">Whatsapp</a> <a href="tel:">Telegram</a></li>
                                <li className="contacts__phone">+7(948) - 405 - 68 - 46<a href="tel:">Telegram</a></li>
                                <li className="contacts__phone">+7(977) - 012 - 01 - 36</li>
                            </ul>
                            <h3>Почта:</h3>
                            <ul className="contacts__mails">
                                <li className="contacts__mail">sosca172@gmail.com</li>
                            </ul>
                            <h3>Следите за нами в сосетях:</h3>
                            <ul className="contacts__links">
                                <li className="contacts__link">
                                    <a href="#"><img src={inst} alt="" /></a>
                                </li>
                                <li className="contacts__link">
                                    <a href="#"><img src={vk} alt="" /></a>

                                </li>
                                <li className="contacts__link">
                                    <a href="#"><img src={yt} alt="" /></a>

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