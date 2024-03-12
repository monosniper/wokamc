import React, {useContext, useState} from 'react';
import Modal from "react-modal";
import {API_URL} from "../api";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Product = ({product, className, hide}) => {
    const {store} = useContext(Context);
    const [modal, setModal] = useState(false)
    const [showChooseModal, setShowChooseModal] = useState(false)

    const handleOpenModal = () => setModal(true);
    const handleCloseModal = () => setModal(false);
    const handleCloseChooseModal = () => setShowChooseModal(false);

    return hide ? null : (
        <div className={"product-wrapper " + className}>
            <div className={"product"}>
                <div className={"product__container"} onClick={handleOpenModal}>
                    <div className="product__title">{product.title}</div>
                    <div className="product__img -ibg">
                        <img src={API_URL + product.image} alt={product.title}/>
                    </div>
                    {product.discount ? <div className="product__discount">{product.discount}%</div> : ''}
                </div>
                <div className="product__footer">
                    <div className="product__price">{product.price_1}.00 ₽</div>
                    {/*{store.basket.find(item => item.id === product.id) ? (*/}
                    {/*    <div className="product__action">*/}
                    {/*        <button className="btn-buy btn-buy_detail" type="button">*/}
                    {/*            {store.basket.find(item => item.id === product.id).count} шт.*/}
                    {/*        </button>*/}
                    {/*        <button onClick={() => store.removeFromBasket(product.id)} className="btn-del _icon-del"*/}
                    {/*                type="button"></button>*/}
                    {/*    </div>*/}
                    {/*) : (*/}
                    {/*    <button onClick={() => store.addToBasket(product.id)}*/}
                    {/*            className="btn-buy btn-buy_common _icon-cart" type="button">*/}
                    {/*        В корзину*/}
                    {/*    </button>*/}
                    {/*)}*/}
                    <button onClick={() => setShowChooseModal(true)}
                            className="btn-buy btn-buy_common _icon-cart" type="button">
                        В корзину
                    </button>
                </div>
            </div>
            <Modal ariaHideApp={false} closeTimeoutMS={500} className={'modal popup_small'} isOpen={modal}>
                <div className="popup__content">
                    <button onClick={handleCloseModal} type="button" className="popup__close _icon-close"></button>
                    <div className="popup__text">
                        <div className="info-buy">
                            <div className="info-buy__header">
                                <div className="info-buy__title">{product.title}</div>
                                <div className="info-buy__label">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="#2a354f" d="M9.9996 2.08331L7.45252 7.28248L1.66669 8.12081L5.85794 12.2183L4.85585 17.9166L10 15.175L15.1438 17.9166L14.15 12.2187L18.3334 8.12123L12.5796 7.28248L10 2.08331H9.9996Z"></path>
                                    </svg>
                                    <span>{store.tags.find(tag => tag.id === product.TagId)?.name}</span>
                                </div>
                            </div>
                            <div className="info-buy__body">
                                <div className="info-buy__img -ibg">
                                    <img src={API_URL + product.image} alt={product.title}/>
                                </div>
                                <div className="info-buy__wrapper">
                                    <div className="info-buy__text">
                                        <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal ariaHideApp={false} closeTimeoutMS={500} className={'modal popup_small'} isOpen={showChooseModal}>
                <div className="popup__content">
                    <button onClick={handleCloseChooseModal} type="button" className="popup__close _icon-close"></button>
                    <div className="choose">
                        <div className="choose__title"><span>{product.title}</span>Сделайте выбор</div>
                        <div className="choose__items">
                            <div className="choose-item">
                                <div className="choose-item__title">1 месяц</div>
                                <div className="choose-item__bonus"><b>+{product.bonus_1} еврохуев</b> <br/><span>кешбек</span></div>
                                <div className="choose-item__price">
                                    <span>Стоимость</span>
                                    <span>{product.price_1}.00 ₽</span>
                                </div>
                                <button className="choose-item__btn" onClick={() => store.addToBasket(product.id, 1)}>В корзину</button>
                            </div>
                            <div className="choose-item">
                                <div className="choose-item__title">3 месяца</div>
                                <div className="choose-item__bonus"><b>+{product.bonus_3} еврохуев</b><br/> <span>кешбек</span></div>
                                <div className="choose-item__price">
                                    <span>Стоимость</span>
                                    <span>{product.price_3}.00 ₽</span>
                                </div>
                                <button className="choose-item__btn" onClick={() => store.addToBasket(product.id, 3)}>В корзину</button>
                            </div>
                            <div className="choose-item">
                                <div className="choose-item__title">Навсегда</div>
                                <div className="choose-item__bonus"><b>+{product.bonus} еврохуев</b><br/> <span>кешбек</span></div>
                                <div className="choose-item__price">
                                    <span>Стоимость</span>
                                    <span>{product.price}.00 ₽</span>
                                </div>
                                <button className="choose-item__btn" onClick={() => store.addToBasket(product.id, 'forever')}>В корзину</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default observer(Product);