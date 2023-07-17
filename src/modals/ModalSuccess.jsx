import { useContext } from 'react'
import { ModalContext } from '../contexts/ModalContext';

import ok from '../img/ok_c.svg';
import yt from '../img/yt_c.svg';
import inst from '../img/inst_c.svg';
import vk from '../img/vk_c.svg';

const ModalSuccess = () => {
    const { modalContent, closeModal } = useContext(ModalContext)

    const wrapperHandler = (e) => {
        if (e.target.className.includes('modal__wrapper')) {
            closeModal()
        }
    }

    return (
        <div className='modal__wrapper modal--success' onClick={(e) => { wrapperHandler(e) }}>
            <div className="modal__content">
                <h2>Спасибо за заявку</h2>
                <p>{modalContent}</p>
                <ul>
                    <li><a href="#"><img src={ok} alt="" /></a></li>
                    <li><a href="#"><img src={yt} alt="" /></a></li>
                    <li><a href="#"><img src={inst} alt="" /></a></li>
                    <li><a href="#"><img src={vk} alt="" /></a></li>
                </ul>
                <button onClick={closeModal}>Отлично!</button>
            </div>
        </div>
    )
}

export default ModalSuccess