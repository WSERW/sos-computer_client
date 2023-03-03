import React from 'react'

const Button = (text, size = 'small', outline = false, link = false) => {
    let btn = link ? (<a href={link}>{text}</a>):(<button>{text}</button>)
    return (
        <div className="">ыыыы</div>
    )
}

export default Button