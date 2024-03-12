import React, {useContext, useState} from 'react';
import Modal from "react-modal";
import BasketItem from "./BasketItem";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";

const Basket = ({modal, handleCloseModal}) => {
    const {store} = useContext(Context);

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handlePay = () => {

    }

    return (
        <Modal ariaHideApp={false} closeTimeoutMS={500} className={'modal'} isOpen={modal}>
            <div className="popup__content">
                <button onClick={handleCloseModal} type="button" className="popup__close _icon-close"></button>
                <div className="popup__text">
                    <div className="popup__title">Корзина</div>
                    <div className="order">
                        <div className="order__item info-order">
                            <div className="info-order__header">
                                <div className="empty-cart _hidden">
                                    <img src="img/icons/empty.svg" alt="Image"/>
                                    <p>Корзина пуста</p>
                                </div>
                                <div className="cart-products">
                                    {store.basket.map((item, i) => <BasketItem key={'item-' + i} item={item}/>)}
                                </div>
                            </div>
                            <div className="info-order__text">
                                <div className="info-order__title">Инструкция по покупке</div>
                                <ol>
                                    <li>
                                        <p>Выбор товара</p>
                                        <p>Добавьте необходимые товары в корзину и заполните предлагаемую
                                            форму.</p>
                                    </li>
                                    <li>
                                        <p>Оплата товара</p>
                                        <p>Оплатите товары, добавленные в корзину.</p>
                                    </li>
                                    <li>
                                        <p>Активация</p>
                                        <p>После оплаты товары выдаются на выбранном Вами сервере
                                            автоматически.</p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className="order__form">
                            <form action="#" className="form">
                                <div className="form__row">
                                    <div className="form__column">
                                        <div className="label">Ваш никнейм:</div>
                                        <input className="form__input input" autoComplete="off" type="text"
                                               name="form[]" value={name} onChange={(e) => setName(e.target.value)}
                                               data-error="Ошибка" placeholder="Ваш никнейм"/>
                                    </div>
                                    <div className="form__column">
                                        <div className="label">Ваш Email:</div>
                                        <input className="form__input input" autoComplete="off" type="text"
                                               name="form[]" value={email} onChange={(e) => setEmail(e.target.value)}
                                               data-error="Ошибка"
                                               placeholder="user@example.com"/>
                                    </div>
                                    <div className="form__column">
                                        <div className="label">Промокод <span>(если есть):</span></div>
                                        <input className="form__input input" autoComplete="off" type="text"
                                               name="form[]" data-error="Ошибка" placeholder="xxx"/>
                                    </div>
                                    <div className="form__column">
                                        <div className="checkbox">
                                            <input id="c_" data-error="Ошибка" className="checkbox__input"
                                                   type="checkbox" value="1" name="form[]"/>
                                            <label htmlFor="c_" className="checkbox__label">
                                                <span
                                                    className="checkbox__text">
                                                    Я принимаю условия <a target={"_blank"} href="/public_offer.pdf">пользовательского соглашения</a> и <a
                                                    target={"_blank"}
                                                    href="/public_offer.pdf">оказания услуг</a>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form__row">
                                    <div className="form__title">Оформление платежа</div>
                                    <div className="form__total">
                                        <span>Стоимость товаров:</span>
                                        <strong>{store.getTotalBasket()}.00 ₽</strong>
                                    </div>
                                    <button onClick={handlePay} className="form__button" type="submit">
                                        Оплатить
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default observer(Basket);