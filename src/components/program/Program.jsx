import React from 'react'

import ProgramCard from './ProgramCard'

import scroll from '../../img/scroll_sm.svg'
import ProgrammCardSkeleton from './ProgrammCardSkeleton'
const Program = ({ themes }) => {
    return (
        <section className='program'>
            <div className="container">
                <div className="section__heading">
                    <div className="heading__icon">
                        <img src={scroll} alt="" />
                    </div>
                    <h2>Программа курса</h2>
                </div>
                <div className="program__cards">
                    {themes ? themes.map((theme, id) =>
                        <ProgramCard number={theme.order} title={theme.name} paragraphs={theme.paragraphs} key={id} />
                    ) : [0, 0, 0, 0, 0, 0, 0, 0].map((item, id) =>
                        <ProgrammCardSkeleton key={id} />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Program