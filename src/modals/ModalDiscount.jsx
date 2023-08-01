import { useEffect, useState, useContext } from 'react'

import { getCSRF, postOrder } from '../api'
import { ModalContext } from '../contexts/ModalContext'

const ModalDiscount = () => {
    const [token, setToken] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    })

    const { openModal } = useContext(ModalContext);

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
                openModal('success', "Спасибо с вами свяжутся")
            })
            .catch(error => {
                // Обработка ошибки
                console.error('Ошибка при отправке заявки:', error);
            });
    }

    return (
        <div className='modal__content modal__discount' onSubmit={(e) => { handleSubmit(e) }}>
            <h2>Записаться на курс или получить бесплатную консультацию</h2>
            <form action="">
                <input type="text" placeholder='Ваше имя:' name='name' value={formData.name} onChange={(e) => { handleChange(e) }} />
                <input type="text" placeholder='Страна, город' name='message' value={formData.message} onChange={(e) => { handleChange(e) }} />
                <input type="text" placeholder='Телефон для связи:' name='phone' value={formData.phone} required onChange={(e) => { handleChange(e) }} />
                <button type='submit'>Получить консультацию</button>
            </form>
        </div>
    )
}

export default ModalDiscount