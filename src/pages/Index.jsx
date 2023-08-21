import React, { useContext } from 'react'
import { MouseParallax } from 'react-just-parallax';
import Helmet from 'react-helmet'


import { DataContext } from "../contexts/DataContext";
import { ModalContext } from '../contexts/ModalContext';

import girl from '../img/girl.svg'
import blop from '../img/blop.svg'
import blop2 from '../img/blop_2.svg'
import cross from '../img/cross.svg'
import circle from '../img/circle.svg'
import circleBig from '../img/circle_big.svg'
import circleBlop from '../img/circle_blop.svg'



import Waves from '../components/waves/Waves'
import FAQ from '../components/faq/FAQ'
import How from '../components/how/How'
import About from '../components/about/About'
import Contacts from '../components/contacts/Contacts'
import Abilities from '../components/abilities/Abilities'
import For from '../components/for/For'
import Sertificate from '../components/sertificate/Sertificate'
import Banner from '../components/banner/Banner'
import Plan from '../components/plan/Plan'
import Course from '../components/course/Course'



const Index = () => {

    const { courses, demo } = useContext(DataContext);
    const { openModal } = useContext(ModalContext);

    return (
        <div>
            <Helmet>
                <title>Сос Компьютер | Курcы в Донецке ДНР</title>
                <meta name="description" content={`Ведём набор на компьютерные курсы для детей и взрослых. У нас множество направлений: программирование, дизайн, 3д моделирование, курсы для детей и т.д. Также есть возможность обучаться онлайн.`} />
            </Helmet>
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
                            <button onClick={() => openModal('order')}>Заказать звонок</button>
                        </div>
                        <div className="header__img">
                            <div className="blop-wrapper">
                                <MouseParallax enableOnTouchDevice strength={0.03}>
                                    <img className='blop' id='blop2' src={blop2} alt="blop" />
                                </MouseParallax>
                            </div>

                            <MouseParallax enableOnTouchDevice strength={0.01}>
                                <img src={girl} alt="girl" />
                            </MouseParallax>

                            <MouseParallax enableOnTouchDevice isAbsolutelyPositioned strength={0.04}>
                                <img className='circle' src={circle} alt="circle" />
                            </MouseParallax>

                            <MouseParallax enableOnTouchDevice isAbsolutelyPositioned strength={0.05}>
                                <img className='cross' id='cross1' src={cross} alt="cross" />
                                <img className='cross' id='cross3' src={cross} alt="cross" />
                            </MouseParallax>

                            <MouseParallax enableOnTouchDevice isAbsolutelyPositioned strength={0.06}>
                                <img className='cross' id='cross2' src={cross} alt="cross" />
                                <img className='cross' id='cross5' src={cross} alt="cross" />
                            </MouseParallax>

                            <MouseParallax enableOnTouchDevice isAbsolutelyPositioned strength={0.07}>
                                <img className='cross' id='cross4' src={cross} alt="cross" />
                                <img className='cross' id='cross6' src={cross} alt="cross" />
                            </MouseParallax>

                        </div>
                        <img className="header__blop" src={blop} alt="blop" />
                        <img className="header__circle-blop" src={circleBlop} alt="circle" />
                        <MouseParallax enableOnTouchDevice isAbsolutelyPositioned strength={0.07} zIndex={-1}>
                            <img className="header__circle" src={circleBig} alt="circle" />
                        </MouseParallax>
                        <MouseParallax enableOnTouchDevice isAbsolutelyPositioned strength={0.04}>
                            <img className='circle-left' src={circle} alt="circle" />
                        </MouseParallax>
                    </div>
                </div>
            </header>
            <Course courses={courses} />
            <Banner />
            <Plan plans={demo ? demo.map(course => Object.assign(course.levels[0], { tag: course.tag, name: course.name })) : null} />
            <For />
            <How />
            <Sertificate />
            <Abilities />
            <FAQ />
            <About />
            <Waves />
            <Contacts />
        </div>
    )
}

export default Index