import React, {useState} from 'react'

const ProgramCard = ({ number, title, paragraphs }) => {
    let [active, setActive] = useState('')
    return (
        <div className={`program__card ${active}`}>
            <h3 className="program__card_title" onClick={()=> setActive(active?'':'active')}><div className="program__card_label">Тема: <span className="program__card_number">{number}</span></div><strong>{title}</strong><span className='program__card_btn'>{active?'-':'+'}</span></h3>
            <div className="program__card_body">
                <ul className="program__card_paragraphs" >
                    {paragraphs.map((paragraph,id)=>
                    <li className="program__card_paragraph">
                        {paragraph.name}
                    </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default ProgramCard
