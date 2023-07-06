import React from 'react'

import './style.css'

import hatSm from '../../img/hat_sm.svg'

import CourseCards from './CourseCards'


const Course = ({courses}) => {
    return (
        <section className="ways">
            <div className="container">
                <div className="section__heading">
                    <div className="heading__icon">
                        <img src={hatSm} alt="" />
                    </div>
                    <h2>Наши направления</h2>
                </div>
                <CourseCards courses={courses} />
            </div>
        </section>
    )
}

export default Course