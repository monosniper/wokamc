import React, {useContext} from 'react';
import {API_URL} from "../../api";
import Modal from "react-modal";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const ProductInfo = ({product, tags}) => {
    const {store} = useContext(Context);

    return (
        <Modal ariaHideApp={false} closeTimeoutMS={500} className={'modal popup_small'} isOpen={store.modals.productInfo[product.id]}>
            <div className="popup__content">
                <button onClick={() => store.hideModal('productInfo', product.id)} type="button" className="popup__close _icon-close"></button>
                <div className="popup__text">
                    <div className="info-buy">
                        <div className="info-buy__header">
                            <div className="info-buy__title">{product.title}</div>
                            <div className="info-buy__label">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path stroke="#2a354f" d="M9.9996 2.08331L7.45252 7.28248L1.66669 8.12081L5.85794 12.2183L4.85585 17.9166L10 15.175L15.1438 17.9166L14.15 12.2187L18.3334 8.12123L12.5796 7.28248L10 2.08331H9.9996Z"></path>
                                </svg>
                                <span>{tags.find(tag => tag.id === product.TagId)?.name}</span>
                            </div>
                        </div>
                        <div className="info-buy__body">
                            <div className="info-buy__img -ibg">
                                <img src={API_URL + product.image} alt={product.title}/>
                                {product.discount ? <div className="product__discount">-{product.discount}%</div> : ''}
                            </div>
                            <div className="info-buy__wrapper">
                                <div className="info-buy__text">
                                    <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
                                </div>
                                <div className="info-buy__price">
                                    <span>{product.Tag.isPrivilege ? product.price_1 : product.price}.00 ₽</span>
                                    {store.basket.find(({id}) => id === product.id) ? (
                                        <div className="product__action">
                                            <button className="btn-buy btn-buy_detail" type="button">
                                                {store.basket.find(({id}) => id === product.id).count} шт.
                                            </button>
                                            <button onClick={() => store.removeFromBasket(product.id)} className="btn-del _icon-del"
                                                    type="button"></button>
                                        </div>
                                    ) :
                                        <button
                                            className="btn-buy btn-buy_common _icon-ar-down"
                                            type="button"
                                            onClick={
                                            product.Tag.isPrivilege ?
                                                () => {store.hideModal('productChoice', product.id);store.hideModal('productInfo', product.id)} :
                                                () => {store.addToBasket(product.id);store.hideModal('productInfo', product.id)}
                                            }
                                        >В корзину</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default observer(ProductInfo);