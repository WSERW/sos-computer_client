import { useContext, useState, useEffect } from 'react'
import { ModalContext } from '../../contexts/ModalContext'
import Cookies from 'js-cookie';
import { getCSRF, postOrder } from '../../api'
import './style.css'

import phoneSm from '../../img/phone_sm.svg'
import send from '../../img/send.svg'
import { ReactComponent as Inst } from '../../img/inst.svg'
import { ReactComponent as Vk } from '../../img/vk.svg'
import { ReactComponent as Yt } from '../../img/yt.svg'

const Contacts = () => {
    const [token, setToken] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    })

    const { openModal } = useContext(ModalContext);

    useEffect(() => {
        getCSRF()
            .then(data => (setToken(Cookies.get('csrftoken'))))
            .then(console.log(token), Cookies.get('csrftoken'))
    }, [])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postOrder(formData, token)
            .then(response => {
                openModal('success', "Спасибо с вами свяжутся")
            })
            .catch(error => {
                console.error('Ошибка при отправке заявки:', error);
            });
    }

    return (
        <section className="contacts" id='contacts'>
            <div className="container">
                <div className="contacts__wrapper">
                    <form action="" className="contacts__form" onSubmit={(e) => { handleSubmit(e) }}>
                        <label htmlFor="">Оставьте ваше имя</label>
                        <input type="text" name='name' value={formData.name} id="" placeholder='Имя...' onChange={(e) => { handleChange(e) }} />
                        <label htmlFor="">Номер телефона</label>
                        <input type="text" name='phone' value={formData.phone} required id="" placeholder='+380...' onChange={(e) => { handleChange(e) }} />
                        <label htmlFor="">Напишите нам</label>
                        <div className="contacts__comment">
                            <textarea placeholder='Введите текст...' name='message' value={formData.message} onChange={(e) => { handleChange(e) }}></textarea>
                            <button><img src={send} alt="" /></button>
                        </div>
                        <div className="contacts__copyright">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Я даю согласия на обработку своих персональных данных согласно правилам.</label>
                        </div>
                    </form>
                    <div className="contacts__info">
                        <div className="section__heading">
                            <div className="heading__icon">
                                <img src={phoneSm} alt="" />
                            </div>
                            <h2>Контакты</h2>
                        </div>
                        <p className='contacts__description'>Свяжитесь с нами удобным способом или закажите звонок от нашего менеджера:</p>
                        <div className="contacts__phones_wrapper">
                            <h3>Телефоны:</h3>
                            <ul className="contacts__phones">
                                <li className="contacts__phone"><img src={phoneSm} alt="" /> <span>+38 (095) - 462 - 46 - 72</span> <a href="viber://add?number=380954624672">Viber</a> <a href="https://api.whatsapp.com/send?phone=380954624672">Whatsapp</a> <a href="https://t.me/SosComputerAcademy">Telegram</a></li>
                                <li className="contacts__phone"><img src={phoneSm} alt="" />  <span>+7 (949) - 405 - 68 - 46</span> <a href="https://t.me/SosComputerAcademy">Telegram</a></li>
                                <li className="contacts__phone"><img src={phoneSm} alt="" />  <span>+7 (977) - 012 - 01 - 36</span> <a href="https://t.me/SosComputerAcademy">Telegram</a></li>
                            </ul>
                        </div>
                        <h3>Почта:</h3>
                        <ul className="contacts__mails">
                            <li className="contacts__mail">sosca172@gmail.com</li>
                        </ul>
                        <h3>Следите за нами в сосетях:</h3>
                        <ul className="contacts__links">
                            <li className="contacts__link">
                                <a href="https://www.instagram.com/computercourses_in_donetsk/"><Inst /></a>
                            </li>
                            <li className="contacts__link">
                                <a href="https://vk.com/sos_computer_academy"><Vk /></a>

                            </li>
                            <li className="contacts__link">
                                <a href="https://www.youtube.com/@SosComputerAcademy"><Yt /></a>

                            </li>
                        </ul>
                        <button onClick={() => { openModal('order') }}>Заказать звонок</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts