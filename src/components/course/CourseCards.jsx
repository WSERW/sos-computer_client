import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';

import CourseCard from './CourseCard'

import next from '../../img/next.svg'
import prev from '../../img/prev.svg'

const data = [
    {
        tag: 'design',
        name: 'Веб-дизайн1',
        descriptions: ['Свой преподаватель', '2 - 3 раза в неделю', '2 - 4.5 месяца'],
    },
    {
        tag: 'design',
        name: 'Веб-дизайн2',
        descriptions: ['Свой преподаватель', '2 - 3 раза в неделю', '2 - 4.5 месяца'],
    },
    {
        tag: 'design',
        name: 'Веб-дизайн3',
        descriptions: ['Свой преподаватель', '2 - 3 раза в неделю', '2 - 4.5 месяца'],
    },
    {
        tag: 'design',
        name: 'Веб-дизайн4',
        descriptions: ['Свой преподаватель', '2 - 3 раза в неделю', '2 - 4.5 месяца'],
    },
    {
        tag: 'design',
        name: 'Веб-дизайн5',
        descriptions: ['Свой преподаватель', '2 - 3 раза в неделю', '2 - 4.5 месяца'],
    },
    {
        tag: 'dev',
        name: 'Программирование1',
        descriptions: ['Свой преподаватель', '2 - 3 раза в неделю', '2 - 4.5 месяца'],
    },
    {
        tag: 'dev',
        name: 'Программирование2',
        descriptions: ['Свой преподаватель', '2 - 3 раза в неделю', '2 - 4.5 месяца'],
    },
    {
        tag: 'dev',
        name: 'Программирование3',
        descriptions: ['Свой преподаватель', '2 - 3 раза в неделю', '2 - 4.5 месяца'],
    },
    {
        tag: 'dev',
        name: 'Программирование4',
        descriptions: ['Свой преподаватель', '2 - 3 раза в неделю', '2 - 4.5 месяца'],
    },
    {
        tag: 'dev',
        name: 'Программирование5',
        descriptions: ['Свой преподаватель', '2 - 3 раза в неделю', '2 - 4.5 месяца'],
    },
]

const CourseCards = ({courses}) => {
    // let [courses, setCourses] = useState(data)
    console.log(courses)
    let [tag, setTag] = useState('')
    let filtredCourses = courses?courses.filter((course) => course.tag.includes(tag)):[]


    return (
        <div className="ways__wrapper">
            <Swiper
                    slidesPerView={5}
                    centeredSlides={true}
                    breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        400:{
                          slidesPerView:2,
                        },
                        639: {
                          slidesPerView: 3,
                        },
                        865:{
                          slidesPerView:4
                        },
                        1000:{
                          slidesPerView:5
                        }
                      }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
            <div slot="container-start" className="ways__buttons">
                <div className="ways__categories">
                    <button onClick={() => { setTag('') }}>Все</button>
                    <button onClick={() => { setTag('design') }}>Дизайн</button>
                    <button onClick={() => { setTag('dev') }}>Программирование</button>
                    <button onClick={() => { setTag('child') }}>Детские</button>
                    <button onClick={() => { setTag('3d') }}>3д</button>
                    <button onClick={() => { setTag('market') }}>Маркетинг</button>
                    <button onClick={() => { setTag('office') }}>Офисные</button>
                </div>
                <div className="ways__nav">
                    {/* <button onClick={useSwiper().slideNext()}><img src={prev} alt="" /></button>
                    <button onClick={useSwiper().slideNext()}><img src={next} alt="" /></button> */}
                </div>
            </div>
            <div className="ways__slides--">
                
                    {filtredCourses.map((course, id) =>
                        <SwiperSlide>
                            <div className="ways__slide">
                                <CourseCard {...course} key={id} />
                            </div>
                        </SwiperSlide>
                    )}
                
            </div>
            </Swiper>
        </div>
    )
}

export default CourseCards