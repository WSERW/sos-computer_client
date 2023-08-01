import React from 'react'

import './style.css'

import PlanCard from './PlanCard'
import PlanCardSkeleton from './PlanCardSkeleton';

import bookSm from '../../img/book_sm.svg'


const Plan = ({ plans }) => {
    return (
        <section className="plans">
            <div className="container">
                <div className="section__heading">
                    <div className="heading__icon">
                        <img src={bookSm} alt="" />
                    </div>
                    <h2>Варианты обучения</h2>
                </div>
                <div className="plans__subheading">
                    <div className="plans__subheading_left">Курсы стартуют <span>каждый месяц</span></div>
                    <div className="plans__subheading_right">Мы подберем группу или индивидуального педагога под ваш уровень и направление</div>

                </div>
                <div className="plans__cards">
                    {plans ? plans.map((plan, id) =>
                        <PlanCard {...plan} key={id} />
                    ) : [0, 0, 0].map((plan, id) =>
                        <PlanCardSkeleton key={id}/>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Plan