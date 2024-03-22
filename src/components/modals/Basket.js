import React, {useEffect, useState} from 'react';
import Modal from "react-modal";
import BasketItem from "../BasketItem";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";
import {useStores} from "../../root-store-context";

const black_list = [
    'all',
    'alloffline',
    'allonline',
]

const Basket = () => {
    const {
        modal: { state: { basket }, state, hide, show },
        basket: { setPayData, checkPromo, promo: _promo, items, total }
    } = useStores();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [checked, setChecked] = useState(false)
    const [promo, setPromo] = useState('')
    const [debouncedPromo, setDebouncedPromo] = useState("")
    const [isShowError, setShowError] = useState(false)
    const [disable, setDisable] = useState(false)
    const [errorText, setErrorText] = useState('')

    const showError = (text) => {
        setErrorText(text)
        setDisable(true)
        setShowError(true)

        setTimeout(() => {
            document.querySelector('.error-noty').classList.add('open')

            setTimeout(() => {
                setTimeout(() => {
                    document.querySelector('.error-noty').classList.remove('open')

                    setTimeout(() => {
                        setShowError(false)
                        setDisable(false)
                    }, 500)
                }, 1000)
            }, 500)
        }, 50)
    }

    useEffect(() => {
        const delayInputTimeoutId = setTimeout(() => {
            setDebouncedPromo(promo);
        }, 500);
        return () => clearTimeout(delayInputTimeoutId);
    }, [promo]);

    useEffect(() => {
        debouncedPromo.trim() !== "" && checkPromo(debouncedPromo)
    }, [debouncedPromo]);

    const handlePay = () => {
        if(
            name.trim() !== '' && email.trim() !== ''
        ) {
            if(checked) {
                if(items.length)
                    if(!black_list.includes(name.trim())) {
                        setPayData({
                            name: name.trim(), email: email.trim()
                        })
                        hide('basket')
                        show('paymentChoose')
                        console.log(state)
                    } else showError('Недопустимый никнейм!')
                else showError('Ваша корзина пуста!')
            } else showError('Ознакомтесь с правилами и политикой конфиденциальности!')
        } else showError('Необходио заполнить поля никнейм и email!')
    }

    return (
        <Modal
            ariaHideApp={false}
            closeTimeoutMS={500}
            className={'modal'}
            isOpen={basket}
            shouldCloseOnOverlayClick={true}
            onRequestClose={() => hide('basket')}
            overlayRef={() => document.querySelector('.overlay')}
        >
            <div className="popup__content">
                {isShowError ? <div className="error-noty">
                    <div className="text">{errorText}</div></div>
                    : null
                }
                <button onClick={() => hide('basket')} type="button" className="popup__close _icon-close"></button>
                <div className="popup__text">
                    <div className="popup__title">Корзина</div>
                    <div className="order">
                        <div className="order__item info-order">
                            <div className="info-order__header">
                                <div className="empty-cart _hidden">
                                    <img src="img/icons/empty.svg" alt="Empty"/>
                                    <p>Корзина пуста</p>
                                </div>
                                <div className="cart-products">
                                    {items.map((item, i) => <BasketItem key={'item-' + i} item={item}/>)}
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
                                               value={name} onChange={(e) => setName(e.target.value)}
                                                placeholder="Ваш никнейм"/>
                                    </div>
                                    <div className="form__column">
                                        <div className="label">Ваш Email:</div>
                                        <input className="form__input input" autoComplete="off" type="text"
                                               value={email} onChange={(e) => setEmail(e.target.value)}
                                               placeholder="user@example.com"/>
                                    </div>
                                    <div className="form__column">
                                        <div className="label">Промокод <span>(если есть):</span></div>
                                        <input value={promo} onChange={(e) => setPromo(e.target.value)} className="form__input input" autoComplete="off" type="text"
                                               placeholder="XXXXX"/>
                                    </div>
                                    {_promo ? <div className="promo-text">{_promo.name} -{_promo.amount}%</div> : null}
                                    <div className="form__column">
                                        <div className="checkbox">
                                            <input id="c_" data-error="Ошибка" className="checkbox__input"
                                                   type="checkbox" value="1" name="form[]"/>
                                            <label onClick={() => setChecked(!checked)} htmlFor="c_" className="checkbox__label">
                                                <span
                                                    className="checkbox__text">
                                                    Я принимаю условия <Link unstable_viewTransition to={"/policy"}>пользовательского соглашения</Link> и <Link
                                                    unstable_viewTransition to="/policy">оказания услуг</Link>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form__row">
                                    <div className="form__title">Оформление платежа</div>
                                    <div className="form__total">
                                        <span>Стоимость товаров:</span>
                                        <strong>{total}.00 ₽</strong>
                                    </div>
                                    <button disabled={disable} onClick={handlePay} className="form__button" type="button">
                                        Далее
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