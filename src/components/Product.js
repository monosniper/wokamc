import React, {useContext} from 'react';
import {API_URL} from "../api";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import ProductInfo from "./modals/ProductInfo";
import ProductChoice from "./modals/ProductChoice";

const Product = ({product, className}) => {
    const {store} = useContext(Context);

    return <div className={"product-wrapper " + className}>
        <div className={"product"}>
            <div className={"product__container"} onClick={() => store.showModal('productInfo', product.id)}>
                <div className="product__title">{product.title}</div>
                <div className="product__img -ibg">
                    <img src={API_URL + product.image} alt={product.title}/>
                </div>
                {product.discount ? <div className="product__discount">{product.discount}%</div> : ''}
            </div>
            <div className="product__footer">
                <div className="product__price">{product.price_1}.00 ₽</div>
                <button onClick={() => store.showModal('productChoice', product.id)}
                        className="btn-buy btn-buy_common _icon-cart" type="button">
                    В корзину
                </button>
            </div>
        </div>

        <ProductInfo product={product} tags={store.tags}/>
        <ProductChoice product={product}/>
    </div>;
};

export default observer(Product);