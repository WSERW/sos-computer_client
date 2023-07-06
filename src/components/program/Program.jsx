import React from 'react'

import ProgramCard from './ProgramCard'

import quest from '../../img/quest.svg'
const Program = ({themes}) => {
    return (
        <section className='program'>
            <div className="container">
                <div className="section__heading">
                    <div className="heading__icon">
                        <img src={quest} alt="" />
                    </div>
                    <h2>Программа курса</h2>
                </div>
                <div className="program__cards">
                    {themes ? themes.map(theme =>
                        <ProgramCard number={theme.order} title={theme.name} paragraphs={theme.paragraphs} />
                    ) : ''}
                </div>
            </div>
        </section>
    )
}

export default Program