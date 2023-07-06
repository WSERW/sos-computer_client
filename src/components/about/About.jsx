import React from 'react'

import './style.css'

import screenSm from '../../img/screen_sm.svg'
import about from '../../img/about.png'


const About = () => {
    return (
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
                        <p>Мы старейшее образовательное учреждение Донецка в сфере компьютерных технологий. Наша история началась в далёком 1999 году. На данный момент выдано более 5200 дипломов, а лучшие наши выпускники продолжают работу в академии, в качестве преподавателей. Наша цель — преподнести знания, наиболее актуальные для настоящей профессии, без распыления на избыточные материалы.</p>
                        <p>Демократичные цены и широкая сеть офисов по всей области позволят Вам выбрать оптимальный, для себя, вариант. Для корпоративных клиентов мы предоставляем разработку софта, обучение персонала, а также разработку и поддержку сайтов на сервере компании.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About