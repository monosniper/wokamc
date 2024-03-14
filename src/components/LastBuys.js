import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {API_URL} from "../api";
import moment from "moment";
import 'moment/locale/ru';

const LastBuys = () => {
    const {store} = useContext(Context);

    useEffect(() => {
        store.fetchLastBuys()
    }, []);

    return (
        <section className="last-buy">
            <div className="last-buy__container">
                <h2 className="last-buy__title title">Последние покупки:</h2>
                <div className="last-buy__items">
                    {store.last_buys.map(buy => buy.Products.map(product => (
                        <div onClick={() => store.showModal("productInfo", product.id)} className="buy-item" data-popup="#info">
                            <div className="buy-item__label">
                                {moment(buy.createdAt).add(1, 'm').lang("ru").fromNow()}
                            </div>
                            <div className="buy-item__img -ibg">
                                <img src={API_URL + product.image} alt={product.title}/>
                            </div>
                            <div className="buy-item__title">
                                <span>{product.title}</span>
                                <small className="_icon-user">
                                    {buy.name}
                                </small>
                            </div>
                        </div>
                    )))}
                </div>
            </div>
        </section>
    );
};

export default observer(LastBuys);