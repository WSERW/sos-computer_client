import React from 'react'
import { Link } from 'react-router-dom'

const CourseCard = ({ name, id, specs = [], tag}) => {
    return (
        <div className='course__card'>
            <h3 className="course__card_name">{name}</h3>
            <ul className="course__card_descriptions">
                {specs.map((spec) =>
                    <li className="course__card_description">{spec.text}</li>
                )}
            </ul>
            <Link to={`course/${id}`} className="course__card_link">Смотреть программу</Link>
            <div className={`course__card_stage`}>{tag == 'child' ? '6 - 18' : '14 - 99+'} лет</div>
        </div>
    )
}

export default CourseCard