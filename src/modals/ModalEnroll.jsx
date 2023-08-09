import { useEffect, useState, useContext } from 'react'
import Cookies from 'js-cookie'
import { getCSRF, postOrder } from '../api'
import { ModalContext } from '../contexts/ModalContext'

const ModalEnroll = () => {
  const [token, setToken] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })

  const { openModal } = useContext(ModalContext);
  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
  useEffect(() => {
    getCSRF()
      .then(data => { setToken(getCookie('csrftoken')) })
      .then(() => { console.log(document.cookie, getCookie('csrftoken')) })
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
    <div className='modal__content modal__enroll' onSubmit={(e) => { handleSubmit(e) }}>
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

export default ModalEnroll