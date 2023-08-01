import { useEffect, useState, useContext } from 'react'

import { getCSRF, postOrder } from '../api'
import { ModalContext } from '../contexts/ModalContext'

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
            .then(data => setToken(data.csrfToken))
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
                <h2>Записаться на курс или получить бесплатную консультацию</h2>
                <form action="">
                    <input type="text" placeholder='Ваше имя:' name='name' value={formData.name} onChange={(e) => { handleChange(e) }} />
                    <input type="text" placeholder='Страна, город' name='message' value={formData.message} onChange={(e) => { handleChange(e) }} />
                    <input type="text" placeholder='Телефон для связи:' name='phone' value={formData.phone} required onChange={(e) => { handleChange(e) }} />
                    <button type='submit'>Получить консультацию</button>
                </form>
            </div>
        </div>
    )
}

export default ModalOrder