import React, { useContext } from 'react'

import { DataContext } from "../contexts/DataContext";

import girl from '../img/girl.svg'
import blop from '../img/blop.svg'

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