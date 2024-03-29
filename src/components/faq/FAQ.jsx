import React from 'react'
import FAQCard from './FAQCard'

import './style.css'

import quest from '../../img/quest.svg'
import faqBoy from '../../img/faq_boy.svg'


const FAQ = () => {
  return (
    <section className="faq">
                <div className="container">
                    <div className="section__heading">
                        <div className="heading__icon">
                            <img src={quest} alt="" />
                        </div>
                        <h2>Популярные вопросы</h2>
                    </div>
                    <div className="faq__block">
                        <div className="faq__cards">
                            <FAQCard title={'Какие у вас есть формы обучения?'} text={'Вы можете выбрать один из наших многочисленных офисов, либо взять своего преподавателя в скайпе или дискорде. Качество образования одинаково в обоих случаях, все темы изучаются до полного усвоения учеником. Практика прорабатывается для получения навыков, необходимых при работе в крупных компаниях.'} />
                            <FAQCard title={'Сколько длятся курсы?'} text={'Каждый курс имеет разную продолжительность. Курсы для детей занимают 1,3 - 1,5 года. Взрослые направления обычно занимают от 2 до 6 месяцев, со своим преподавателем. Некоторые сложные дисциплины требуют освоения двух курсов, например fullstack программирование.'} />
                            <FAQCard title={'Как узнать стоимость обучения по каждому курсу?'} text={'Поскольку мы представлены в разных городах, стоимость немного отличается для каждого случая. Пожалуйста, позвоните нам, либо воспользуйтесь удобной социальной сетью, чтобы узнать актуальные цены на любой из наших курсов.'} />
                            <FAQCard title={'Какие есть варианты и способы оплаты?'} text={'Вы можете оплатить несколькими способами. При посещении любого офиса, вы можете заключить договор обучения на месте и оплатить наличными. Если вы занимаетесь онлайн, вы можете оплатить курс в банке по предоставленным реквизитам. Также вы можете воспользоваться переводом денег на карту ПриватБанка или СберБанка, если другие варианты вам не подходят. Мы пересчитаем стоимость в удобную валюту, если вы живёте за рубежом.'} />
                            <FAQCard title={'Помогаете ли вы с трудоустройством?'} text={'У нас есть большая база работодателей, а также часто появляются вакансии от партнёров. Некоторые успешные ученики проходят стажировку у нас и работают в качестве преподавателей в различных городах и онлайн. Если ни один из этих вариантов вам не подойдёт, мы поможем сформировать резюме и портфолио, чтобы достойно представить вас работодателям.'} />
                        </div>
                        <div className="faq__img">
                            <img src={faqBoy} alt="" />
                        </div>
                    </div>

                </div>
            </section>
  )
}

export default FAQ