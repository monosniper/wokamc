import React, {useContext} from 'react';
import {Context} from "../index";
import {API_URL} from "../api";
import {observer} from "mobx-react-lite";

const BasketItem = ({ item }) => {
    const {store} = useContext(Context);
    const product = store.products.find(product => product.id === item.id)
    console.log(store.tags.find(tag => tag.id === product.TagId))
    return (
	<div className="cart-product">
	    <div className="cart-product__img -ibg">
		<img src={API_URL+product.image} alt={product.title} />
	    </div>
	    <div className="cart-product__info">
		<div className="cart-product__clm">
		    <div className="cart-product__title">{product.title}</div>
		    <div className="cart-product__label">
			<svg width="20" height="20" viewBox="0 0 20 20"
			     fill="none" xmlns="http://www.w3.org/2000/svg">
			    <path stroke="#2a354f"
				  d="M9.9996 2.08331L7.45252 7.28248L1.66669 8.12081L5.85794 12.2183L4.85585 17.9166L10 15.175L15.1438 17.9166L14.15 12.2187L18.3334 8.12123L12.5796 7.28248L10 2.08331H9.9996Z"
				  stroke-width="2"
				  stroke-linejoin="round"></path>
			</svg>
			<span>{store.tags.find(tag => tag.id === product.TagId).name}</span>
		    </div>
		</div>
		<div className="cart-product__clm">
		    <div className="cart-product__price">{item.count * product.price}.00 ₽</div>
		    <div className="quantity" data-quantity="">
			<button onClick={() => store.removeFromBasket(product.id)} type="button"
				className="quantity__button quantity__button_minus btn-del _icon-del"></button>

			<div className="quantity__input"><input
			     autoComplete="off" type="text"
			    name="form[]" value={item.count} /></div>
			{store.tags.find(tag => tag.id === product.TagId).isPrivilege ? null : (
			    <button data-quantity-plus type="button" onClick={() => store.addCountToBasket(product.id)}
				    className="quantity__button quantity__button_plus"></button>
			)}
		    </div>
		</div>
	    </div>
	</div>
    );
};

export default observer(BasketItem);