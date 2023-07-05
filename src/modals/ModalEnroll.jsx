import React from 'react'

const ModalEnroll = () => {
  return (
    <div className='modal__content modal__enroll'>
        <h2>Записаться на курс или получить бесплатную консультацию</h2>
        <form action="">
            <input type="text" placeholder='Ваше имя:'/>
            <input type="text" placeholder='Страна, город'/>
            <input type="text" placeholder='Телефон для связи:' required/>
            <button>Получить консультацию</button>
        </form>
    </div>
  )
}

export default ModalEnroll