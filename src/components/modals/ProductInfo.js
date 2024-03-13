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
                            </div>
                            <div className="info-buy__wrapper">
                                <div className="info-buy__text">
                                    <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
                                </div>
                                <div className="info-buy__price">
                                    <span>{product.price_1}.00 ₽</span>
                                    <button className="btn-buy btn-buy_common _icon-ar-down" type="button" onClick={() => {store.showModal('productChoice', product.id);store.hideModal('productInfo', product.id)}}>
                                        В корзину
                                    </button>
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