import { useEffect, useState, useContext } from 'react'
import Cookies from 'js-cookie';
import { getCSRF, postOrder } from '../api'
import { ModalContext } from '../contexts/ModalContext'

import tg from '../img/tg.svg'
import wa from '../img/wa.svg'
import vb from '../img/vb.svg'
import cross from '../img/cross_l.svg'

const ModalOrder = () => {
    const [token, setToken] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    })

    const { openModal, closeModal } = useContext(ModalContext);

    useEffect(() => {
        getCSRF()
            .then(data => (setToken(Cookies.get('csrftoken')))
                .then(console.log(token), Cookies.get('csrftoken'))
            )
    }, [])


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postOrder(formData, token)
            .then(response => {
                closeModal('order')
                openModal('success', "Спасибо с вами свяжутся")
            })
            .catch(error => {
                console.error('Ошибка при отправке заявки:', error);
            });
    }

    const wrapperHandler = (e) => {
        if (e.target.className.includes('modal__wrapper')) {
            closeModal('order')
        }
    }

    return (
        <div className='modal__wrapper  modal__order' onClick={(e) => { wrapperHandler(e) }}>
            <div className='modal__content' onSubmit={(e) => { handleSubmit(e) }}>
                <div className="modal__head">
                    <h2>Записаться на курс</h2><button className='close' onClick={()=>{  closeModal('order')}}><img src={cross} alt="" /></button>
                </div>
                <form action="">
                    <input type="text" placeholder='Ваше имя:' name='name' value={formData.name} onChange={(e) => { handleChange(e) }} />
                    <input type="text" placeholder='Страна, город' name='message' value={formData.message} onChange={(e) => { handleChange(e) }} />
                    <input type="text" placeholder='Телефон для связи:' name='phone' value={formData.phone} required onChange={(e) => { handleChange(e) }} />
                    <div className="modal__online">
                        <p>Хотите ли вы получить образовательный курс Online?</p>
                        <div className="modal__online__radio">
                            <label htmlFor="onlineTrue"><input type="radio" name="online" id='onlineTrue' checked/> Да</label>
                            <label htmlFor="onlineFalse"><input type="radio" name="online" id='onlineFalse' /> Нет</label>
                        </div>
                    </div>
                    <ul className="modal__socio">
                        <li><a href="#"><img src={tg} alt="" /></a></li>
                        <li><a href="#"><img src={vb} alt="" /></a></li>
                        <li><a href="#"><img src={wa} alt="" /></a></li>
                    </ul>
                    <button type='submit'>Получить консультацию</button>
                    <p>Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с правилами пользования Платформой</p>
                </form>
            </div>
        </div>
    )
}

export default ModalOrder