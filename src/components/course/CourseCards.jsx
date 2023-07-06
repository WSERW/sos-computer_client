import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide, useSwiper, } from 'swiper/react';
import { Autoplay, } from "swiper";

import 'swiper/css';

import CourseCard from './CourseCard'

import next from '../../img/next.svg'
import prev from '../../img/prev.svg'

const CourseCards = ({ courses }) => {
    // let [courses, setCourses] = useState(data)
    let [tag, setTag] = useState('')
    let filtredCourses = courses ? courses.filter((course) => course.tag.includes(tag)) : []


    return (
        <div className="ways__wrapper">
            <Swiper
                slidesPerView={5}
                // centeredSlides={true}
                autoplay = {{
                    delay: 3000,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    400: {
                        slidesPerView: 2,
                        centeredSlides: false,
                    },
                    639: {
                        slidesPerView: 3,
                    },
                    865: {
                        slidesPerView: 4
                    },
                    1000: {
                        slidesPerView: 5
                    }
                }}
                modules={[Autoplay,]}
            >
                <div slot="container-start" className="ways__buttons">
                    <div className="ways__categories">
                        <button className={tag==''?'active':''} onClick={() => { setTag('') }}>Все</button>
                        <button className={tag=='design'?'active':''} onClick={() => { setTag('design') }}>Дизайн и 3д</button>
                        <button className={tag=='dev'?'active':''} onClick={() => { setTag('dev') }}>Программирование</button>
                        <button className={tag=='child'?'active':''} onClick={() => { setTag('child') }}>Детские</button>
                        <button className={tag=='office'?'active':''} onClick={() => { setTag('office') }}>Офисные и SEO SMM</button>
                    </div>
                    <div className="ways__nav">
                        {/* <button onClick={useSwiper().slideNext()}><img src={prev} alt="" /></button>
                    <button onClick={useSwiper().slideNext()}><img src={next} alt="" /></button> */}
                    </div>
                </div>
                <div className="ways__slides--">

                    {filtredCourses.map((course) =>
                        <SwiperSlide key={course.id}>
                            <div className="ways__slide">
                                <CourseCard {...course}  />
                            </div>
                        </SwiperSlide>
                    )}

                </div>
            </Swiper>
        </div>
    )
}

export default CourseCards