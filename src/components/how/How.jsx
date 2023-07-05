import React from 'react'

import penSm from '../../img/pen_sm.svg'

import phone from '../../img/phone.svg'
import screen from '../../img/screen.svg'
import book from '../../img/book.svg'
import palett from '../../img/palett.svg'
import hat from '../../img/hat.svg'
import scroll from '../../img/scroll.svg'


import howto_boy from '../../img/howto_boy.svg'
import howto_girl from '../../img/howto_girl.svg'
import howto_boy_pop from '../../img/how_to_boy.png'
import planet_s from '../../img/planet_s.svg'
import planet_b from '../../img/planet_b.svg'

const How = () => {
    return (
        <section className="how">
            <div className="container">
                <div className="section__heading">
                    <div className="heading__icon">
                        <img src={penSm} alt="" />
                    </div>
                    <h2>Как записаться и учиться</h2>
                </div>
                <div className="how__cards">
                    <div className="how__card">
                        <img className='how__card_icon' src={phone} alt="" />
                        <p>Выбираем направление</p>
                        <img className='how__card_pop' src={howto_boy_pop} alt="" />
                    </div>
                    <div className="how__card">
                        <img className='how__card_icon' src={screen} alt="" />
                        <p>Онлайн или стационар</p>
                        <img className='how__card_pop' src={howto_boy_pop} alt="" />
                    </div>
                    <div className="how__card">
                        <img className='how__card_icon' src={book} alt="" />
                        <p>Учимся и практикуемся</p>
                        <img className='how__card_pop' src={howto_boy_pop} alt="" />
                    </div>
                    <div className="how__card">
                        <img className='how__card_icon' src={palett} alt="" />
                        <p>Оформляем портфолио</p>
                        <img className='how__card_pop' src={howto_boy_pop} alt="" />
                    </div>
                    <div className="how__card">
                        <img className='how__card_icon' src={scroll} alt="" />
                        <p>Получаем сертификат</p>
                        <img className='how__card_pop' src={howto_boy_pop} alt="" />
                    </div>
                    <div className="how__card">
                        <img className='how__card_icon' src={hat} alt="" />
                        <p>Ищем вакансии среди партнеров</p>
                        <img className='how__card_pop' src={howto_boy_pop} alt="" />
                    </div>
                </div>
            </div>
            <img src={planet_s} alt="" className="planet_s" />
            <img src={planet_b} alt="" className="planet_b" />
            <img src={howto_boy} alt="" className="how__boy" />
            <img src={howto_girl} alt="" className="how__girl" />
        </section>
    )
}

export default How