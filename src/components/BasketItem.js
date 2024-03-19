import React, {useContext} from 'react';
import {Context} from "../index";
import {API_URL} from "../api";
import {observer} from "mobx-react-lite";

const expires = {
    1: '» на месяц',
    3: '» на три месяца',
    forever: '» навсегда',
}

const BasketItem = ({item}) => {
    const {store} = useContext(Context);

    const product = store.products.find(({id, title}) => item.id === 'money' ? title === 'money' : id === item.id)

    return (
        <div className="cart-product">
            <div className="cart-product__img -ibg">
                <img src={API_URL + product.image} alt={product.title}/>
            </div>
            <div className="cart-product__info">
                <div className="cart-product__clm">
                    <div className="cart-product__title">{item.id === 'money' ? 'Игровая валюта €' : product.title}</div>
                    <div className="cart-product__label">
                        <svg width="20" height="20" viewBox="0 0 20 20"
                             fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="#2a354f" d="M9.9996 2.08331L7.45252 7.28248L1.66669 8.12081L5.85794 12.2183L4.85585 17.9166L10 15.175L15.1438 17.9166L14.15 12.2187L18.3334 8.12123L12.5796 7.28248L10 2.08331H9.9996Z"></path>
                        </svg>
                        <span>{store.tags.find(tag => tag.id === product.TagId).name}</span>
                    </div>
                    {item.expiry ? <div className="cart-product__expiry">{expires[item.expiry]}</div> : null}
                </div>
                <div className="cart-product__clm">
                    <div className="cart-product__price">{item.id === 'money' ? item.amount : store.getItemPrice(item)}.00 ₽</div>
                    <div className="quantity" data-quantity="">
                        <button onClick={() => store.removeFromBasket(item.id)} type="button"
                                className="quantity__button quantity__button_minus btn-del _icon-del"></button>

                        <div className="quantity__input"><input
                            autoComplete="off" type="text"
                            name="form[]" value={item.count}/></div>
                        {store.tags.find(tag => tag.id === product.TagId).isPrivilege || item.id === 'money' || product.Tag.isAlone ? null : (
                            <button data-quantity-plus type="button" onClick={() => store.addCountToBasket(item.id)}
                                    className="quantity__button quantity__button_plus"></button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(BasketItem);