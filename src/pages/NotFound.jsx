import React from 'react'
import { Link } from 'react-router-dom'

import num4 from '../img/4.svg'
import num0 from '../img/0.svg'


const NotFound = () => {
    return (
        <section className='not_found'>
            <div className="container">
                <div className="not_found__banner">
                    <img src={num4} alt="" />
                    <img src={num0} alt="" />
                    <img src={num4} alt="" />
                </div>
                <p>Что-то пошло не так, такой страницы не существут</p>
            </div>
            <Link className='not_found__link' to="/" >На главную</Link>
        </section>
    )
}

export default NotFound