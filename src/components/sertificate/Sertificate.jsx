import React from 'react'

import './style.css'

import ModalEnroll from '../../modals/ModalEnroll'

import penSm from '../../img/pen_sm.svg'
import sertificate1 from '../../img/sertificate1.png'
import sertificate2 from '../../img/sertificate2.png'
import hat from '../../img/hat.png'


const Sertificate = () => {
    return (
        <section className="sertificate">
            <div className="container">
                <div className="sertificate__wrapper">
                    <div className="sertificate__img">
                        <div className="section__heading">
                            <div className="heading__icon">
                                <img src={penSm} alt="" />
                            </div>
                            <h2>Сертификат Sos Computer Academy</h2>
                        </div>
                        <p className="sertificate__description">Подтвердит, что вы прошли курс, а также станет дополнительным аргументом при устройстве на работу</p>
                        <div className="sertificate__items">
                            <div className="sertificate__item">
                                <img src={sertificate1} alt="" />
                            </div>
                            <div className="sertificate__item">
                                <img src={sertificate2} alt="" />
                            </div>
                        </div>
                        <div className="sertificate__item_mob">
                            <img src={hat} alt="" />
                        </div>
                    </div>
                    <div className="sertificate__form">
                        <ModalEnroll />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sertificate