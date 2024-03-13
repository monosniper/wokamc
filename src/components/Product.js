import React, {useContext} from 'react';
import {API_URL} from "../api";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import ProductInfo from "./modals/ProductInfo";
import ProductChoice from "./modals/ProductChoice";

const Product = ({product, className, hide}) => {
    const {store} = useContext(Context);

    return hide ? null : (
        <div className={"product-wrapper " + className}>
            <div className={"product"}>
                <div className={"product__container"} onClick={() => store.showModal('productInfo')}>
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
                    <button onClick={() => store.showModal('productChoice')}
                            className="btn-buy btn-buy_common _icon-cart" type="button">
                        В корзину
                    </button>
                </div>
            </div>

            <ProductInfo product={product} tags={store.tags}/>
            <ProductChoice product={product}/>
        </div>
    );
};

export default observer(Product);