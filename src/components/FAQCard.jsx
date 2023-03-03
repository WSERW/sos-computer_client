import React, {useState} from 'react'

const FAQCard = ({ title, text }) => {
    let [active, setActive] = useState('')
    return (
        <div className={`faq__card ${active}`}>
            <div className='faq__card_body'>
                <h3 className="faq__card_title" onClick={()=> setActive(active?'':'active')}>-{title} <span>{active?'-':'+'}</span></h3>
                <div className='faq__card_description'>{text}</div>
            </div>
            <div className="faq__card_back"></div>
        </div>
    )
}

export default FAQCard