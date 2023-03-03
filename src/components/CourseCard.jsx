import React from 'react'

const CourseCard = ({ name, stage = 'начальный', descriptions = [], link }) => {
    let stageClass = { 'начальный': 'start', 'продвинутый': 'intermidiate', 'под работу': 'expert' }[stage]
    return (
        <div className='course__card'>
            <h3 className="course__card_name">{name}</h3>
            <ul className="course__card_descriptions">
                {descriptions.map((description) =>
                    <li className="course__card_description">{description}</li>
                )}
            </ul>
            <a href={link} className="course__card_link">Смотреть программу</a>
            <div className={`course__card_stage ${stageClass}`}>{stage}</div>
        </div>
    )
}

export default CourseCard