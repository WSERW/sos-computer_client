import React from 'react'

import './style.css'

import lampSm from '../../img/lamp_sm.svg'
import clock from '../../img/clock.svg'
import plus from '../../img/plus.svg'
import minus from '../../img/minus.svg'
import cash from '../../img/cash.svg'
import freelancer from '../../img/freelance.svg'
import studia from '../../img/studia.svg'
import brand from '../../img/brand.svg'


const Abilities = () => {
    return (
        <section className="abilities">
            <div className="container">
                <div className="section__heading">
                    <div className="heading__icon">
                        <img src={lampSm} alt="" />
                    </div>
                    <h2>Как применить знания</h2>
                </div>
                <div className="abilities__cards">
                    <div className="abilities__card">
                        <div className="abilities__card_head">
                            <img src={studia} alt="" />
                        </div>
                        <div className="abilities__card_body">
                            <h3>Студия</h3>
                            <p>Стабильная высокая зарплата, гибкий график и дружный колектив. Немного печенья и кофе.</p>
                            <div className="abilities__card_spec">
                                <div className="abilities__card_time">
                                    <img src={clock} alt="" />
                                    <img src={minus} alt="" />
                                    <img src={minus} alt="" />
                                </div>
                                <div className="abilities__card_money">
                                    <img src={cash} alt="" />
                                    <img src={plus} alt="" />
                                    <img src={plus} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="abilities__card">
                        <div className="abilities__card_head">
                            <img src={brand} alt="" />
                        </div>
                        <div className="abilities__card_body">
                            <h3>Свой бренд</h3>
                            <p>Без навыков и капитала сюда не попасть, но возможное вознаграждение усилий того стоит.</p>
                            <div className="abilities__card_spec">
                                <div className="abilities__card_time">
                                    <img src={clock} alt="" />
                                    <img src={minus} alt="" />
                                    <img src={minus} alt="" />
                                    <img src={minus} alt="" />
                                </div>
                                <div className="abilities__card_money">
                                    <img src={cash} alt="" />
                                    <img src={plus} alt="" />
                                    <img src={plus} alt="" />
                                    <img src={plus} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="abilities__card">
                        <div className="abilities__card_head">
                            <img src={freelancer} alt="" />
                        </div>
                        <div className="abilities__card_body">
                            <h3>Фриланс</h3>
                            <p>Простой, для новичков, путь, который, однако, требует много времени на развите своего профиля.</p>
                            <div className="abilities__card_spec">
                                <div className="abilities__card_time">
                                    <img src={clock} alt="" />
                                    <img src={minus} alt="" />
                                </div>
                                <div className="abilities__card_money">
                                    <img src={cash} alt="" />
                                    <img src={plus} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Abilities