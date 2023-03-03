import React from 'react'

const Dropdown = (name, description) => {
    return (
        <div className="dropdown">
            <div className="dropdown__head">
                <h3 className="dropdown__name">{name}</h3>
            </div>
            <div className="dropdown__body">
                <p className="dropdown__description">{description}</p>
            </div>
            <div className="dropdown__indicator">+</div>
        </div>
    )
}

export default Dropdown