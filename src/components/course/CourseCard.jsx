import React from 'react'

const CourseCard = ({ name, id, stage = 'начальный', specs = [], tag, link, }) => {
    let stageClass = { 'начальный': 'start', 'продвинутый': 'intermidiate', 'под работу': 'expert' }[stage]
    let tagClass = tag == 'child' ? 'child' : 'mature'
    return (
        <div className='course__card'>
            <h3 className="course__card_name">{name}</h3>
            <ul className="course__card_descriptions">
                {specs.map((spec) =>
                    <li className="course__card_description">{spec.text}</li>
                )}
            </ul>
            <a href={`https://test.sos-computer.site/course/${id}`} className="course__card_link">Смотреть программу</a>
            <div className={`course__card_stage ${tagClass}`}>{tag == 'child' ? '6-18' : '14-99+'}</div>
        </div>
    )
}

export default CourseCard