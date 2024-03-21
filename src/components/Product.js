import React from 'react';
import {API_URL} from "../api";
import {observer} from "mobx-react-lite";
import ProductInfo from "./modals/ProductInfo";
import ProductChoice from "./modals/ProductChoice";
import {motion} from "framer-motion";
import {useStores} from "../root-store-context";

const Product = ({product, className}) => {
    const {
        main: { tags },
        basket: { items, add, remove },
        modal: { show }
    } = useStores();

    return <motion.div
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.25 }}
        layout
        className={"product-wrapper"}
    >
        <div className={"product"}>
            <div className={"product__container"} onClick={() => show('productInfo', product.id)}>
                <div className="product__title">{product.title}</div>
                <div className="product__img -ibg">
                    <img src={API_URL + product.image} alt={product.title}/>
                </div>
                {product.discount ? <div className="product__discount">-{product.discount}%</div> : ''}
            </div>
            <div className="product__footer">
                <div className="product__price">{product.Tag.isPrivilege ? product.price_1 : product.price}.00 ₽</div>
                {items.find(({id}) => id === product.id) ? (
                    <div className="product__action">
                        <button className="btn-buy btn-buy_detail" type="button">
                            {items.find(({id}) => id === product.id).count} шт.
                        </button>
                        <button onClick={() => remove(product.id)} className="btn-del _icon-del"
                                type="button"></button>
                    </div>
                ) : (
                    <button onClick={() => product.Tag.isPrivilege ? show('productChoice', product.id) : add(product.id)}
                            className="btn-buy btn-buy_common _icon-cart" type="button">
                        В корзину
                    </button>
                )}
            </div>
        </div>

        <ProductInfo product={product} tags={tags}/>
        {product.Tag.isPrivilege ? <ProductChoice product={product}/> : null}
    </motion.div>;
};

export default observer(Product);