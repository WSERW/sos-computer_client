import React, { useState } from 'react'

const Drop = () => {
    let [active, setActive] = useState('')
    return (
        <div className="drop">
            <p onClick={() => { setActive(active?'':'active') }} className='navbar__link'>Курсы</p>
            <ul className={`drop__list ${active}`}>
                <li className="navbar__item"><a href="#" className="navbar__link">Курс</a></li>
                <li className="navbar__item"><a href="#" className="navbar__link">Курс</a></li>
                <li className="navbar__item"><a href="#" className="navbar__link">Курс</a></li>
                <li className="navbar__item"><a href="#" className="navbar__link">Курс</a></li>
            </ul>
        </div>

    )
}

export default Drop