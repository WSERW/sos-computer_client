import React from 'react'

const PlanCard = ({ name, stage = 'начальный', descriptions = [], link, price, discount }) => {
    let stageClass = { 'начальный': 'start', 'продвинутый': 'intermidiate', 'под работу': 'expert' }[stage]
    return (
        <div className='plan__card'>
            <h3 className="plan__card_name">{name}</h3>
            <ul className="plan__card_descriptions">
                {descriptions.map((description) =>
                    <li className="plan__card_description">{description.text}</li>
                )}
            </ul>
            <p className="plan__price">от <strong>{Math.round(price)}</strong> руб/мес <strike><strong>{Math.round(price)}</strong> руб/мес</strike></p>
            <a href={link} className="plan__card_link">Записаться на пробное</a>
            <div className={`plan__card_stage ${stageClass}`}>{stage}</div>
        </div>
    )
}

export default PlanCard