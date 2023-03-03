import React from 'react'

const DropdownTheme = (name, number, lessons) => {
    return (
        <div className="theme">
            <div className="theme__head">
                <h3 className="theme__name">Тема: <span>{number}</span> {name}</h3>
            </div>
            <div className="theme__body">
                <ul className="theme__lessons">
                    {lessons.map(lesson =>
                        <li className="theme__lesson">{lesson}</li>
                    )}
                </ul>
            </div>
            <div className="theme__indicator">+</div>
        </div>
    )
}

export default DropdownTheme