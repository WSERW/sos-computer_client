import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Helmet from 'react-helmet'
import { downloadFile, getCourse } from '../api'

import '../css/course.css'

import laptop from '../img/laptop.svg'
import blop from '../img/blop.svg'

import CourseSkeleton from '../components/course/CourseSkeleton'

import Plan from '../components/plan/Plan'
import Waves from '../components/waves/Waves'
import FAQ from '../components/faq/FAQ'
import About from '../components/about/About'
import Contacts from '../components/contacts/Contacts'
import Sertificate from '../components/sertificate/Sertificate'
import How from '../components/how/How'
import Program from '../components/program/Program'

const Course = () => {
    const params = useParams()

    const [data, setData] = useState(null)

    useEffect(() => {
        getCourse(params.id)
            .then(data => setData(data))
    }, [params]);
    return (
        <div>
            <Helmet>
                <title>Сос Компьютер | Курс {data?data.name.toLowerCase():''} в Донецке ДНР</title>
                <meta name="description" content={`Изучаем ${data?data.name.toLowerCase():''} на курсах для детей и взрослых. Наша школа it поможет вам освоить новую востребованную профессию в сети наших центров в ДНР, а также онлайн, со своим преподавателем.`} />
            </Helmet>
            <header>
                <div className="container">
                    <div className="header">
                        {data ? (
                            <div className="header__text">
                                <h1>Курс <span>"{data ? data.name : ''}"</span></h1>
                                <p>{data ? data.description : ''}</p>
                                <ul className="header__list">
                                    {data ? data.specs.map((spec, id) =>
                                        <li className="header__item" key={id}>{spec.text}</li>
                                    ) : ''}
                                </ul>
                                <button onClick={() => { downloadFile(data.id) }}>Скачать программу</button>
                            </div>
                        ) : (
                            <div className="header__text">
                                <CourseSkeleton />
                            </div>
                        )
                        }

                        <div className="header__img">
                            <img src={laptop} alt="laptop" />
                        </div>
                        <img className="header__blop" src={blop} alt="blop" />
                    </div>
                </div>
            </header>
            <Plan plans={data ? data.levels.map(level => Object.assign({ tag: data.tag }, level)) : null} />
            <Program themes={data ? data.themes : null} />
            <How />
            <Sertificate />
            <FAQ />
            <About />
            <Waves />
            <Contacts />
        </div>
    )
}

export default Course