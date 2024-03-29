import { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext';

const PlanCard = ({ name, level = 'начальный', specs = [], link, price, discount, tag }) => {
    const { openModal } = useContext(ModalContext);

    if (!specs.length) {
        specs = [{ text: 'описание' }, { text: 'описание' }, { text: 'описание' }]
    }
    let pricePeriod = tag == 'child' ? 'мес' : 'курс'
    let levelTag = { 'base': 'начальный', 'advanced': 'продвинутый', 'expert': 'под работу' }[level]
    const priceLabel = (<>от <strong>{Math.round(price * (100 - discount) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</strong> руб/{pricePeriod}</>)
    const priceDiscountLabel = discount ? (<span className='plan__card_discount' ><strong className='plan__card_price-discount'>{Math.round(price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</strong> руб/{pricePeriod}</span>) : ''
    return (
        <div className='plan__card'>
            <h3 className="plan__card_name">{name}</h3>
            <ul className="plan__card_descriptions">
                {specs.map((specs, id) =>
                    <li className="plan__card_description" key={id}>{specs.text}</li>
                )}
            </ul>
            <p className="plan__price">{priceLabel} {priceDiscountLabel}</p>
            <a href={link} className="plan__card_link" onClick={() => openModal('order')}>Записаться на пробное</a>
            <div className={`plan__card_level ${level}`}>{levelTag}</div>
        </div>
    )
}

export default PlanCard