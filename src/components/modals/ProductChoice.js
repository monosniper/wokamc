import React from 'react';
import Modal from "react-modal";
import {observer} from "mobx-react-lite";
import {useStores} from "../../root-store-context";

const ProductChoice = ({product}) => {
    const {
        basket: { items, add, remove },
        modal: { state: modals, hide }
    } = useStores();

    return (
        <Modal
            ariaHideApp={false}
            closeTimeoutMS={500}
            className={'modal popup_small'}
            isOpen={modals.productChoice[product.id]}
            shouldCloseOnOverlayClick={true}
        >
            <div className="popup__content">
                <button onClick={() => hide('productChoice', product.id)} type="button" className="popup__close _icon-close"></button>
                <div className="choose">
                    <div className="choose__title"><span>{product.title}</span>Сделайте выбор</div>
                    <div className="choose__items">
                        <div className="choose-item">
                            <div className="choose-item__title">1 месяц</div>
                            <div className="choose-item__bonus"><b>+{product.bonus_1} €</b> <br/><span>кешбек</span></div>
                            <div className="choose-item__price">
                                <span>Стоимость</span>
                                <span>{product.price_1}.00 ₽</span>
                            </div>
                            {items.find(({id, expiry}) => id === product.id && expiry === '1') ? (
                                <div className="product__action">
                                    <button className="btn-buy btn-buy_detail" type="button">
                                        {items.find(({id}) => id === product.id).count} шт.
                                    </button>
                                    <button onClick={() => remove(product.id)} className="btn-del _icon-del"
                                            type="button"></button>
                                </div>
                            ) : (
                                <button className="choose-item__btn" onClick={() => add(product.id, '1')}>В корзину</button>
                            )}
                        </div>
                        <div className="choose-item">
                            <div className="choose-item__title">3 месяца</div>
                            <div className="choose-item__bonus"><b>+{product.bonus_3} €</b><br/> <span>кешбек</span></div>
                            <div className="choose-item__price">
                                <span>Стоимость</span>
                                <span>{product.price_3}.00 ₽</span>
                            </div>
                            {items.find(({id, expiry}) => id === product.id && expiry === '3') ? (
                                <div className="product__action">
                                    <button className="btn-buy btn-buy_detail" type="button">
                                        {items.find(({id}) => id === product.id).count} шт.
                                    </button>
                                    <button onClick={() => remove(product.id)} className="btn-del _icon-del"
                                            type="button"></button>
                                </div>
                            ) : (
                                <button className="choose-item__btn" onClick={() => add(product.id, '3')}>В корзину</button>
                            )}
                        </div>
                        <div className="choose-item">
                            <div className="choose-item__title">Навсегда</div>
                            <div className="choose-item__bonus"><b>+{product.bonus} €</b><br/> <span>кешбек</span></div>
                            <div className="choose-item__price">
                                <span>Стоимость</span>
                                <span>{product.price}.00 ₽</span>
                            </div>
                            {items.find(({id, expiry}) => id === product.id && expiry === 'forever') ? (
                                <div className="product__action">
                                    <button className="btn-buy btn-buy_detail" type="button">
                                        {items.find(({id}) => id === product.id).count} шт.
                                    </button>
                                    <button onClick={() => remove(product.id)} className="btn-del _icon-del"
                                            type="button"></button>
                                </div>
                            ) : (
                                <button className="choose-item__btn" onClick={() => add(product.id, 'forever')}>В корзину</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default observer(ProductChoice);